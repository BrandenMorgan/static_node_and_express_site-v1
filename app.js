const express = require("express");
const data = require("./data.json");

const app = express();
app.use("/static", express.static("public"));

app.set("view engine", "pug");

app.get("/", (req, res) => {
    res.render("index", { data });
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.get('/project/:id', (req, res) => {
    res.render('project', {
        project: data.projects[req.params.id]
    });

});

app.use((req, res, next) => {
    const err = new Error("Oops! This page doesn't exist.");
    err.status = 404
    next(err);
});


app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status);
    res.render('error');
});

app.listen(3000, () => {
    console.log("The application is running on localhost:3000")
});