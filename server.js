const express = require('express');
const ejsLayouts = require('express-ejs-layouts');
const fs = require('fs');

const app = express();

app.set('view engine', 'ejs');
app.use(ejsLayouts);
app.use(express.static('static'));
app.use(express.urlencoded({extended: false}));

app.get('/', function(req, res) {
  res.render("home");
});

app.use('/dinosaurs', require('./routes/dinosaurs'));

app.listen(3000, function() {
  console.log("Server listening on port 3000...")
});
