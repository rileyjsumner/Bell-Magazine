const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AuthorSchema = Schema(
    {
        name: {type: String, required: true},
        slug: {type: String, required: true},
        staff_bio: {type: String, required: false},
        email: {type: String, required: false},
        long_bio: {type: String, required: false},
        photo_url: {type: String, required: false},
        facebook_url: {type: String, required: false},
        twitter_username: {type: String, required: false},
        instagram_username: {type: String, required: false},
        rank: {type: Number, required: false},
    },
    { timestamps: true }
);
const Author = mongoose.model("Author", AuthorSchema);
module.exports = Author;
