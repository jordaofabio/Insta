const express = require('express');
const PostController = require('./controllers/PostController');
const LikeController = require('./controllers/LikeController');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const routes = new express.Router();
const upload = multer(uploadConfig);

routes.get('/', (req, res) => {
    const name = req.query.name ? req.query.name : 'World';
    return res.send(`Hello ${name}!`);
});

routes.post('/posts', upload.single('image'), PostController.store);

routes.get('/posts', PostController.index);

routes.post('/posts/:id/like', LikeController.store);



module.exports = routes;