var normalize = require('../node_modules/normalize.css/normalize.css'),
    styles = require('../styles/main.sass');
    // pug = require('../node_modules/pug');
var gallery = require('../components/gallery/gallery.js')

var app = {};
app.init = function () {
    gallery.init();
}

$(document).ready(function(){
    app.init();
});
