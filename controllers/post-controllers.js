const Post = require('../models/post');

const getPost = (req, res) => {
    const title = "Post";
    Post
        .findById(req.params.id)
        .then((post) => res.render("post", { post, title}))
        .catch((error) => {
            console.log(error);
        })
};

const EditPut = (req, res) => {
    const { title, author, text } = req.body
    const { id } = req.params;
    Post
        .findByIdAndUpdate(id, { title, author, text })
        .then((post) => res.redirect(`/posts/${id}`))
        .catch((error) => {
            console.log(error);
        })
};

const GetEdited = (req, res) => {
    const title = "Edit Post";
    Post
        .findById(req.params.id)
        .then((post) => res.render("edit-post", { post, title}))
        .catch((error) => {
            console.log(error);
        })
}

const DeleteEdited = (req, res) => {
    const title = "Post";
    Post
        .findByIdAndDelete(req.params.id)
        .then((result) => res.sendStatus(200))
        .catch((error) => {
            console.log(error);
        })
}


const getPosts = (req, res) => {
    const title = "Posts";
    Post
        .find()
        .sort({ createdAt: -1})
        .then((posts) => res.render("posts", { posts, title }))
        .catch((error) => {
            console.log(error);
        });
}

const AddPost = (req, res) => {
    const title = "Posts";
    res.render("add-post")
}


const MethodPost = (req, res) => {
    const { title, author, text } = req.body
    const post = new Post({ title, author, text });
    post
        .save()
        .then((result)=> {
            res.redirect("/posts")
        })
        .catch((error) => {
            console.log(error);
        })
}

module.exports = {
    getPost,
    EditPut,
    GetEdited,
    DeleteEdited,
    getPosts,
    AddPost,
    MethodPost,

}