// server.js
'use strict';

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

// models
const Post = require('./Post');
const Author = require('./Author');

//connect server to mongoDB

+mongoose.connect(
    'mongodb://localhost:27017/bell_local',
    { useNewUrlParser: true, useCreateIndex: true, }
);
mongoose.connection.on('error', console.error.bind(console, 'connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

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

app.get('/api/author/:id', (req, res) => {
    Author.findOne({_id: new mongodb.ObjectID( req.params.id)}).exec((err, author) => {
        if (err) return res.status(404).send("Author not found");
        return res.send({author})
    });
});
app.get('/api/author/search/:name', (req, res) => {
    console.log(req.params.name);
    Author.find({ name: req.params.name }).exec((err, author) => {
        if (err) return res.status(404).send("Author not found");
        return res.send({author})
    });
});

app.post('/api/post/create', (req, res) => {
    const post = new Post({ body: req.body.body, title: req.body.title, author: req.body.author, permalink: req.body.permalink });
    post.save( (err) => {
        if (err) return res.status(404).send({message: err.message});
        return res.send({ post });
    });
});
app.post('/api/author/create', (req, res) => {
    console.log(req.body);
    const author = new Author({ name: req.body.name });
    author.save( (err) => {
        console.log(err);
        if (err) return res.status(404).send({message: err.message});
        return res.send({ author });
    });
});

app.post('/api/post/update/:id', (req, res) => {
    let options = { new: true};
    Post.findByIdAndUpdate(req.params.id, req.body.data, options, (err, post) => {
        if (err) return res.status(404).send({message: err.message});
        return res.send({ message: 'post updated! ', post});
    })
});
app.post('/api/author/update/:id', (req, res) => {
    let options = { new: true};
    Author.findByIdAndUpdate(req.params.id, req.body.data, options, (err, author) => {
        if (err) return res.status(404).send({message: err.message});
        return res.send({ message: 'author updated! ', author});
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

const PORT = 5000;
app.listen(PORT);
console.log('api running on port ' + PORT);