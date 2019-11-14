const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AuthorSchema = Schema(
    {
        first: {type: String, required: true},
        last: {type: String, required: true},
        staff_bio: {type: String, required: true},
        email: {type: String, required: true},
        long_bio: {type: String, required: true},
        photo_link: {type: String, required: false},
        plug: {type: String, required: false},

    },
    { timestamps: true }
);
const Author = mongoose.model("Author", AuthorSchema);
module.exports = Author;