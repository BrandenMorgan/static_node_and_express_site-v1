// "require" express web framework
const express = require('express');
// Set up router
const router = express.Router();
// "require" json projects data file to read from
const data = require('../data.json');

/* GET homepage - render index template passing it project data */
router.get("/", (req, res) => {
    res.render("index", { data });
});

/* GET about - render about template */
router.get("/about", (req, res) => {
    res.render("about");
});

/* GET generated error route - create and throw 500 server error */
router.get('/error', (req, res, next) => {
    // Log out custom error handler indication
    console.log('Custom error route called');

    const err = new Error();
    err.message = `Something went wrong :(`;
    err.status = 500;
    throw err;
});

/* GET individual project route */
router.get('/project/:id', (req, res, next) => {

    /*
      If requested route exists render the project view with the speicified
      project. Else create a new 404 error with a message and forward the error
      to the global error handler
    */
    if (data.projects[req.params.id]) {
        res.render('project', {
            project: data.projects[req.params.id]
        });
    } else {
        const err = new Error();
        err.status = 404;
        err.message = `Looks like the project you requested doesn't exist.`
        // Looks for the next middleware function with the 'err' parameter
        next(err);
    }
});

// Export router
module.exports = router;