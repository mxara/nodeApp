const Post = require('../models/post');

const getPost = (req, res) => {
    Post
        .findById(req.params.id)
        .then((post) => {
            res.status(200).json(post)
        })
        .catch((error) => {
            console.log(error);
        })
};

const EditPut = (req, res) => {
    const { title, author, text } = req.body
    const { id } = req.params;
    Post
        .findByIdAndUpdate(id, { title, author, text })
        .then((post) => {
            res.status(200).json(post)
        })
        .catch((error) => {
            console.log(error);
        })
};

const DeleteEdited = (req, res) => {
    Post
        .findByIdAndDelete(req.params.id)
        .then(() => {
            res.status(200).json(req.params.id)
        })
        .catch((error) => {
            console.log(error);
        })
}

const getPosts = (req, res) => {
    Post
        .find()
        .sort({ createdAt: -1})
        .then((posts) => {
            res.status(200).json(posts)
        })
        .catch((error) => {
            console.log(error);
        });
}

const MethodPost = (req, res) => {
    const { title, author, text } = req.body
    const post = new Post({ title, author, text });
    post
        .save()
        .then((post) => {
            res.status(200).json(post)
        })
        .catch((error) => {
            console.log(error);
        })
}

module.exports = {
    getPost,
    EditPut,
    DeleteEdited,
    getPosts,
    MethodPost,
}