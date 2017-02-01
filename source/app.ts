import express = require('express');
import morgan = require('morgan');

import ejs = require('ejs');
import serveStatic = require('serve-static');
var minifyHTML = require('express-minify-html');

var app = express();
app.set('view engine', 'ejs');
app.use(morgan('combined'));
app.use(minifyHTML({
    override:      true,
    exception_url: false,
    htmlMinifier: {
        removeComments:            true,
        collapseWhitespace:        true,
        collapseBooleanAttributes: true,
        removeAttributeQuotes:     true,
        removeEmptyAttributes:     true,
        minifyJS:                  true
    }
}));

app.get('/', (req, res) => {
	res.render('login', {
		title: "Login"
	});
})

app.use(serveStatic('.', {
	maxAge: (process.env.NODE_ENV == 'production' ? 1000 * 60 * 60 * 24 : 0)
}))
app.listen(8080);