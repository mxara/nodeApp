// ---------------------- LIBRARIES ----------------
const express = require('express'); // Импорт библиотеки Express JS
const Post = require('../models/post');
const { 
    getPost,
    EditPut,
    GetEdited,
    DeleteEdited,
    getPosts,
    AddPost,
    MethodPost, } = require("../controllers/post-controllers")

const router = express.Router();

router.use(express.urlencoded({ extended: false })) // импорт бодипарсера

router.get('/posts/:id', getPost)

router.put('/edit/:id', EditPut)

router.get('/edit/:id', GetEdited)

router.delete('/posts/:id', DeleteEdited)

router.get('/posts', getPosts);

router.get('/add-post', AddPost)

router.post('/add-post', MethodPost)

module.exports = router