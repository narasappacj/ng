const express = require('express');
const app = express();

// Run the app by serving the static files
// in the dist directory

app.use(express.static(__dirname + '/dist/AngularDemo'));

// Start the app by listening on the default
// Heroku port
const path = require('path');
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/AngularDemo/index.html'));
});
app.listen(process.env.PORT || 8080);



// ...

// For all GET requests, send back index.html
// so that PathLocationStrategy can be used

