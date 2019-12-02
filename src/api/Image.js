const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Item = Schema(
    { img:
        { data: Buffer, contentType: String }
    }
);
const Image = mongoose.model('Image',Item);
module.exports = Image;