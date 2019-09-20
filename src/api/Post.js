const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PostSchema = Schema(
    {
        title: {type: String, required: true},
        body: {type: String, required: true},
    },
    { timestamps: true }
);
const Post = mongoose.model("Post", PostSchema);
module.exports = Post;