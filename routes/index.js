const express = require('express');
const router = express.Router();

const { projects } = require('../data/projects.json');

router.get('/', (req, res) => {
    res.render('index', {projects});
});

router.get('/about', (req, res) => {
    res.render('about');
})

router.get('/project/:id', (req, res) => {
    const { id } = req.params;
    const project = projects[id];
    const landscape = projects[id].image_urls.landscape;
    res.render('project', {project, landscape});
})

module.exports = router;