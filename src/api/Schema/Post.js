const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PostSchema = Schema(
    {
        title: {type: String, required: true},
        publish_date: {type: Date, required: true},
        body: {type: String, required: true},
        author: {type: Array, required: true},
        category: {type: String, required: true},
        description: {type: String, required: true},
        photo_url: {type: String, required: true},
        slug: {type: String, required: true},

    },
    { timestamps: true }
);
const Post = mongoose.model("Post", PostSchema);
module.exports = Post;
