const express = require("express"),
    bodyParser = require("body-parser"),
    cors = require("cors"),
    port = process.env.PORT || 3000,
    app = express(),
    database = require("./database-connection"),
    queries = require("./queries");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.get("/", (req, res) => {
    // const db = database("students").select();
    // console.log(db);
    // // res.json({ db });
    // res.json(db);
    queries.list().then(student => {
        res.json({ student });
    });
});
app.get("/:id", (req, res) => {});

module.exports = app;
