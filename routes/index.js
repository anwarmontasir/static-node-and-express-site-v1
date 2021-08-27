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
    console.log(project);
    res.render('project', {project});
})

module.exports = router;