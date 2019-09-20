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

app.post('/api/post/create', (req, res) => {
    const post = new Post({ body: req.body.body, title: req.body.title});
    post.save( (err) => {
        if (err) return res.status(404).send({message: err.message});
        return res.send({ post });
    });
});

app.post('/api/post/update/:id', (req, res) => {
    let options = { new: true};
    Post.findByIdAndUpdate(req.params.id, req.body.data, options, (err, post) => {
        if (err) return res.status(404).send({message: err.message});
        return res.send({ message: 'post updated! ', post});
    })
});

app.post('/api/post/delete/:id', (req, res) => {
    Post.findByIdAndRemove(req.params.id, (err) => {
        if (err) return res.status(404).send({message: err.message});
        return res.send({ message: 'post deleted!'});
    });
});

const PORT = 5000;
app.listen(PORT);
console.log('api running on port ' + PORT);