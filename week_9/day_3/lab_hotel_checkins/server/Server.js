const express = require('express');
const app = express();

app.listen(9001, function(){
    console.log(`app listening on port ${this.address().port}`);
  })