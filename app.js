const express = require("express"),
    // bodyParser = require("body-parser"),
    cors = require("cors"),
    port = process.env.PORT || 3000,
    app = express(),
    database = require("./database-connection"),
    queries = require("./queries");

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    queries.list().then(student => {
        res.json({ student });
    });
});
app.get("/:id", (req, res) => {});

app.get("/student/new", (req, res) => {
    res.render("form.ejs");
});

app.post("/student", (request, response, next) => {
    queries
        .create(request.body)
        .then(student => {
            response.status(201).json({ student });
        })
        .catch(next);
});

module.exports = app;
