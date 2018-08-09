var express = require('express');

var app = express();
app.use(express.static('public'));
app.use(express.static('node_modules'));

app.listen(process.env.PORT || '8080', () => {
  console.log("Server started on port 8080");
});

