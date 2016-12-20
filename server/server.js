const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser')
const db = require('./models');

// Serve the client
var staticPath = path.join(__dirname, '../client/public');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(staticPath));

const routes = require('./routes').routes;

db.sequelize.sync()
.then(() => {
  
  //api routes
  app.use('/api/post', routes.post)
  app.use('/api/comment', routes.comment)
  app.use('/api/vote', routes.vote)
  app.use('/api/category', routes.category)
  

  app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, '../client/public/index.html'));
  });
  
  app.set('port', process.env.PORT || 9999);
  app.listen(app.get('port'), () =>{
    console.log("Readit is running on port ", app.get('port'))
  })
})

