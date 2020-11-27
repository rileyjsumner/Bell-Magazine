const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CategorySchema = Schema(
    {
        name: {type: String, required: true},
        slug: {type: String, required: true},
        parent: {type: String, required: false}
    }
);
const Category = mongoose.model('Category', CategorySchema);
module.exports = Category;
