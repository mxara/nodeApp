const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
    text: {
        type: String,
        reqired: true,
    },
    title: {
        type: String,
        reqired: true,
    },
    author: {
        type: String,
        reqired: true,
    }
}, { timestamps: true }) // сохраняем пост в DB

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
