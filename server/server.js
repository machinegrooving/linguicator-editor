const express = require('express');
const path = require('path');


// create app
const app = express();

// set app middleware
app.use(express.static(path.join(__dirname, '../build')));

// setup editor route
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


// start server
app.listen(9000);
