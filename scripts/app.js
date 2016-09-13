var normalize = require('../node_modules/normalize.css/normalize.css'),
    styles = require('../styles/main.sass');
var pageHeader = require('../components/pageHeader/pageHeader.js');
// var pug = require('pug');

var app = {};
app.init = function () {
    pageHeader.init();
}

app.init();
