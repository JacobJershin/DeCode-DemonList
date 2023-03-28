const express = require("express");
const path = require('path');
const { google } = require("googleapis");
const app = express();

app.use(express.static(path.join(__dirname)));
app.set("view engine", "ejs");
app.engine('ejs', require('ejs').__express);
app.use(express.urlencoded({ extended: true }));

app.use('/v1/level/placement/:filename', async (req, res) => {
    console.log("loading query");
    const placement = req.params.filename.toString()

    const url = "https://script.google.com/macros/s/AKfycbx0sxjsBIKdZwktRzb7goz6ThKVBKmCzYLCrC83RHJonbvqYqe_CG9R_jIf7sOs7FW3hQ/exec?action=getData";
    const response = await fetch(url);
    var JSON = await response.json();
    console.log(JSON);

    res.send(JSON[parseInt(placement)]);
});

app.listen(3000, (req, res) => console.log("running on 3000"));
