// server.js
'use strict';

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const multer = require('multer');
const sharp = require('sharp');
const path = require('path');

// models
const Post = require('./src/api/Schema/Post');
const Author = require('./src/api/Schema/Author');
const Category = require('./src/api/Schema/Category');

const fileFilter = function(req, file, cb) {
    const allowedTypes = ["image/jpeg", "image/png", "image/gif"];

    console.log(file);
    if(!allowedTypes.includes(file.mimetype)) {
        const error = new Error("Wrong file type");
        console.log(file.mimetype);
        error.code = "LIMIT_FILE_TYPES";
        return cb(error, false);
    }

    cb(null, true);
};

const upload = multer({
        dest: './uploads/',
        fileFilter,
        limits: {
            fileSize: 1000000
        }
    });
//connect server to mongoDB

+mongoose.connect(
    'mongodb://localhost:27017/bell_local',
    { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);
mongoose.connection.on('error', console.error.bind(console, 'connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(function(err, req, res, next) {
    if(err.code === "LIMIT_FILE_TYPES") {
        res.status(422).json({ error: "only images are allowed"});
    }

    if(err.code === "LIMIT_FILE_SIZE") {
        res.status(422).json({ error: "too big"});
    }
});

app.use("/static", express.static(path.join(__dirname, "static"))); // need to move static folder
// get all posts
app.get('/api/post/list', (req, res) => {
    Post.find({}).sort({updatedAt: 'descending'}).exec((err, posts) => {
        if (err) return res.status(404).send('Error while getting posts!');
        return res.send({posts})
    });
});
app.get('/api/author/list', (req, res) => {
    Author.find({}).sort({updatedAt: 'descending'}).exec((err, authors) => {
        if (err) return res.status(404).send('Error while getting authors!');
        return res.send({authors})
    });
});

app.get('/api/author/search/url/:link', (req, res) => {
    Author.findOne({ url: req.params.link }).exec((err, author) => {
        if(err) return res.status(404).send("Author not found");
        return res.send({ author });
    })
});
app.get('/api/author/search/name/:name', (req, res) => {
    Author.findOne({ name: req.params.name }).exec((err, author) => {
        if (err) return res.status(404).send("Author not found");
        return res.send({author})
    });
});

app.get('/api/category/search/name/:name', (req, res) => {
    Category.findOne({ name: req.params.name }).exec((err, category) => {
        if (err) return res.status(404).send("Category not found");
        return res.send({category})
    });
});

app.get('/api/author/search/posts/:name', (req, res) => {
    Post.find({ author: req.params.name }).exec((err, posts) => {
        if (err) return res.status(404).send("Stories not found");
        return res.send({posts});
    })
});
app.get('/api/post/search/:link', (req, res) => {
    Post.findOne({ permalink: req.params.link }).exec((err, post) => {
        if (err) return res.status(404).send("Post not found");
        return res.send({post})
    })
});

app.get('/api/category/list', (req, res) => {
    Category.find({}).sort({updatedAt: 'descending'}).exec((err, categories) => {
        if (err) return res.status(404).send('Error while getting categories!');
        return res.send({categories})
    });
});

app.post('/api/category/create', (req, res) => {
    const category = new Category({
        name: req.body.name,
        type: req.body.type,
        parent: req.body.parent
    });
    category.save( (err) => {
        if(err) return res.status(404).send({ message: err.message });
        return res.send({ category });
    })
});

app.post('/api/post/create', (req, res) => {
    const post = new Post({
        body: req.body.body,
        title: req.body.title,
        category: req.body.category,
        author: req.body.author,
        description: req.body.description,
        photo: req.body.photo,
        permalink: req.body.permalink });
    post.save( (err) => {
        if (err) return res.status(404).send({message: err.message});
        return res.send({ post });
    });
});
app.post('/api/author/create', (req, res) => {
    const author = new Author({
        name: req.body.name,
        url: req.body.url,
        staff_bio: req.body.staff_bio,
        long_bio: req.body.long_bio,
        social_handle: req.body.social_handle,
        email: req.body.email,
        photo: req.body.photo });
    author.save( (err) => {
        if (err) return res.status(404).send({message: err.message});
        return res.send({ author });
    });
});

app.post('/api/post/update/:id', (req, res) => {
    let options = {
        new: true,
        useFindAndModify: false
    };
    Post.findByIdAndUpdate(req.params.id, req.body.data, options, (err, post) => {
        if (err) return res.status(404).send({message: err.message});
        return res.send({ message: 'post updated! ', post});
    })
});
app.post('/api/author/update/:id', (req, res) => {
    let options = {
        new: true,
        useFindAndModify: false
    };
    Author.findByIdAndUpdate(req.params.id, req.body.data, options, (err, author) => {
        if (err) return res.status(404).send({message: err.message});
        return res.send({ message: 'author updated! ', author});
    })
});

app.post('/api/category/update/:id', (req, res) => {
    let options = {
        new: true,
        useFindAndModify: false
    };
    Category.findByIdAndUpdate(req.params.id, req.body.data, options, (err, category) => {
        if (err) return res.status(404).send({message: err.message});
        return res.send({ message: 'category updated! ', category});
    })
});

app.post('/api/post/delete/:id', (req, res) => {
    Post.findByIdAndRemove(req.params.id, (err) => {
        if (err) return res.status(404).send({message: err.message});
        return res.send({ message: 'post deleted!'});
    });
});
app.post('/api/author/delete/:id', (req, res) => {
    Author.findByIdAndRemove(req.params.id, (err) => {
        if (err) return res.status(404).send({message: err.message});
        return res.send({ message: 'author deleted!'});
    });
});

app.post('/api/category/delete/:id', (req, res) => {
    Category.findByIdAndRemove(req.params.id, (err) => {
        if (err) return res.status(404).send({message: err.message});
        return res.send({ message: 'category deleted!'});
    });
});

app.post('/api/author/upload/photo', upload.single('file'), async (req, res) => {
    try {
        await sharp(req.file.path)
            .resize(300)
            .background('white')
            .embed()
            .toFile(`./static/${req.file.originalname}`);

        let path = req.file.originalname;
        fs.unlink(req.file.path, () => {
            console.log(`/static/${req.file.originalname}`);
            res.json({ file: `/static/${path}`})
        })
    } catch(err) {
        res.status(422).json({ err });
    }
});

app.post('/api/author/upload/images', upload.array('files'), async (req, res) => {
    try {
        await sharp(req.file.path)
            .resize(300)
            .background('white')
            .embed()
            .toFile(`./static/${req.file.originalname}`);

        // fs.unlink(req.file.path, () => {
        //     res.json({ file: `./static/${req.file.originalname}`})
        // })
    } catch(err) {
        res.status(422).json({ err });
    }
    res.json({files: req.files});
});

const PORT = 5000;
app.listen(PORT);
console.log('api running on port ' + PORT);