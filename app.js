const express = require('express');

const app = express();

app.use('/static', express.static('public'));

app.set('view engine', 'pug');

const mainRoutes = require('./routes');
app.use(mainRoutes);

app.use((req, res, next) => {
    const err = new Error('That page is not found.');
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status);
    res.render('error');
})

app.listen(3000, () => {
    console.log('the application is running on localhost:3000');
})