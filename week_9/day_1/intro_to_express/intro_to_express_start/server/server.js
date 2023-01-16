const express = require('express');
const app = express();

app.listen(9000, function(){
   console.log('App running on port 9000'); 
});

app.get('/', function(req, res){
    res.send('Hello World!');
});