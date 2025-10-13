const express = require('express');
const route = express.Router();

const {readPosts, createPost, deletePost} = require('./controllers/postsController');


route.get('/posts', readPosts);
route.post('/posts', createPost);
route.delete('/posts/:id', deletePost)

module.exports = route;