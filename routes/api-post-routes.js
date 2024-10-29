// ---------------------- LIBRARIES ----------------
const express = require('express'); // Импорт библиотеки Express JS
const Post = require('../models/post');
const { 
    getPost,
    EditPut,
    DeleteEdited,
    getPosts,
    MethodPost, } = require("../controllers/api-post-controllers")

const router = express.Router();
router.use(express.urlencoded({ extended: false })) // импорт бодипарсера

// Get All Posts
router.get('/api/posts', getPosts);
// Add New Post
router.post('/api/post', MethodPost)
// Get Post by ID
router.get('/api/posts/:id', getPost)
// Delete Post by ID
router.delete('/api/posts/:id', DeleteEdited)
// Update Post by ID
router.put('/api/post/:id', EditPut)


module.exports = router