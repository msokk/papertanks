module.exports = function(app) {
  var UID = require(__dirname + '/uid');

  //API Calls
  app.get('/api/v1/createroom', function(req, res) {
    res.send(UID.get()); //Create custom UID
  });

  app.get('/api/v1/joinroom', function(req, res) {
    res.send('');
  });

  app.get('/api/v1/move', function(req, res) {
    res.send('');
  });

  app.get('/api/v1/fire', function(req, res) {
    res.send('');
  });

};
