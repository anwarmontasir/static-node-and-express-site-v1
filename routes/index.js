const express = require('express');
const router = express.Router();

const { projects } = require('../data/projects.json');

router.get('/', (req, res) => {
    res.render('index', {projects});
});

router.get('/about', (req, res) => {
    res.render('about');
})

router.get('/project/:id', (req, res, next) => {
    const { id } = req.params;
    if (projects[id]) {
        const project = projects[id];
        const landscape = projects[id].image_urls.landscape;
        res.render('project', {project, landscape});
    } else {
        const err = new Error();
        err.status = 404;
        err.message = 'That project does not exist.'
        next(err);
    }
})

module.exports = router;