"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
app.get('/health', function (req, res) {
    res.json({
        msg: "Hello World"
    });
});
app.listen(4200, function () {
    console.log("Listening to port ".concat(4200));
});
