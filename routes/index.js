const express = require('express');
const router = express.Router();
const data = require('../data.json');

router.get("/", (req, res) => {
    res.render("index", { data });
});

router.get("/about", (req, res) => {
    res.render("about");
});

router.get('/project/error', (req, res, next) => {
    // Log out custom error handler indication
    console.log('Custom error route called');

    const err = new Error();
    err.message = `Something went wrong :(`;
    err.status = 500;
    throw err;
});

router.get('/project/:id', (req, res, next) => {
    if (data.projects[req.params.id]) {
        res.render('project', {
            project: data.projects[req.params.id]
        });
    } else {
        const err = new Error();
        err.status = 404;
        err.message = `Looks like the project you requested doesn't exist.`
        next(err);
    }
});


module.exports = router;