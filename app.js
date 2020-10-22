// "require" the express web framework
const express = require("express");
const app = express();

// Set up static server middleware. Refer to public folder as "static"
app.use("/static", express.static("public"));
// Set up to use pug templates
app.set("view engine", "pug");

// Connect to routes folder
const mainRoutes = require('./routes');
app.use(mainRoutes);

// 404 error handler for non existent routes "/not-a-route" or "/project/not-a-route"
app.use((req, res, next) => {
    console.log('404 error handler called');
    // Render the 'not-found' view
    res.status(404).render('not-found');
});

// Global error handler
app.use((err, req, res, next) => {

    if (err) {
        console.log('Global error handler called', err);
    }
    // If error status is 404 set response status to 404
    if (err.status === 404) {
        // Render 'not-found' view and pass error object to view
        res.status(404).render('not-found', { err })
    } else {
        // Set error message to given message or specify general message
        err.message = err.message || `Oops! It looks like something went wrong on the server`;
        /* 
          Set response status to given error status or set it to 500
          by default if no error status is set. Render the 'error view and
          pass it the error object. 
        */
        res.status(err.status || 500).render('error', { err });
    }
});

// Set up local server to listen on port 3000 and log a message to the console
app.listen(3000, () => {
    console.log("The application is running on localhost:3000")
});