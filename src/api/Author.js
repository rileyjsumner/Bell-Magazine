const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AuthorSchema = Schema(
    {
        name: {type: String, required: true},
        staff_bio: {type: String, required: false},
        email: {type: String, required: false},
        long_bio: {type: String, required: false},
        photo: {type: String, required: false},
        social_handle: {type: String, required: false},

    },
    { timestamps: true }
);
const Author = mongoose.model("Author", AuthorSchema);
module.exports = Author;