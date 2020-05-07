const express = require('express');
const app = express();
var path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(express.static(path.join(__dirname, 'public')));




module.exports = app;