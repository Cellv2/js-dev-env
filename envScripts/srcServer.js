import express from 'express';
import path from 'path';
import open from 'open';

const port = 3000;
const app = express();

//look for root and the entry file
app.get('/', function(request, response){
    response.sendFile(path.join(__dirname, '../src/index.html'))
});

//open port or log error to console
app.listen (port, function(err){
    if (err) {
        console.log(err);
    } else {
        open('http://localhost:' + port);
    }
});
