import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack'
import config from '../webpack.config.dev';

/* Allow console logging inside build scripts */
/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

//tells express to use dev-middleware and pass it the webpack config
app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

//look for root and the entry file
app.get('/', function(request, response){
    response.sendFile(path.join(__dirname, '../src/index.html'))
});

//mock JSON data for http request
app.get('/users', function(request, response) {
    response.json([
        {"id":1,"firstName":"Richard","lastName":"Smith","email":"richard@gmail.com"},
        {"id":2,"firstName":"Chris","lastName":"Norton","email":"christ@yahoo.com"},
        {"id":3,"firstName":"David","lastName":"Lee","email":"david.lee@hotmail.com"}
    ]);
});

//open port or log error to console
app.listen (port, function(err){
    if (err) {
        console.log(err);
    } else {
        open('http://localhost:' + port);
    }
});
