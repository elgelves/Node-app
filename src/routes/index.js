const express = require('express');
const { restart } = require('nodemon');
const router = express.Router();

router.get('/', (req, res) =>{
    res.render('index.html', { title: 'App Website'} );
});

router.get('/contact', (req, res) =>{
    res.render('contact.html', { title: 'Contact Page'})
});

module.exports = router;