const express = require("express");
const app = express();

app.use("/static", express.static("public"));
app.set("view engine", "pug");

const mainRoutes = require('./routes');

app.use(mainRoutes);

app.use((req, res, next) => {
    console.log('404 error handler called');
    res.status(404).render('not-found')
});

app.use((err, req, res, next) => {

    if (err) {
        console.log('Global error handler called', err);
    }
    if (err.status === 404) {
        res.status(404).render('not-found', { err })
    } else {
        err.message = err.message || `Oops! It looks like something went wrong on the server`;
        res.status(err.status || 500).render('error', { err });
    }
});

app.listen(3000, () => {
    console.log("The application is running on localhost:3000")
});