const express = require('express');

const app = express();

app.use('/static', express.static('public'));

app.set('view engine', 'pug');

const mainRoutes = require('./routes');
app.use(mainRoutes);

app.use((req, res, next) => {
    const err = new Error();
    err.status = 404;
    err.message = 'That page is not found.';
    next(err);
});

app.use((err, req, res, next) => {
    if (err.status === 404) {
        res.status(404).render('page-not-found', {err});
    } else {
        err.message = err.message || 'Oops, looks like something went wrong on the server';
        res.status(err.status || 500).render('error', {err});
    }
})

app.listen(3000, () => {
    console.log('the application is running on localhost:3000');
})