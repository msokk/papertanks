//Skip DB for now
var users = {
  mihkel: {
    name: 'Mihkel',
    pass: 'test'
  },
  jaanus: {
    name: 'Jaanus',
    pass: 'test'
  },
  test: {
    name: 'Testkasutaja',
    pass: 'test'
  }
};

module.exports = function(app) {

  //Login handler
  app.get('/api/login', function(req, res) {
    var user = req.param('user'),
        pass = req.param('pass');
    if(user && users[user]) { //Found user
      if(pass && users[user].pass == pass) {
        req.session.user = users[user];
        res.send({ err: null });
      } else {
        res.send({ err: 'Wrong pass!' }, 500);
      }
    } else {
      res.send({ err: 'Wrong user!' }, 500);
    }
  });

  //Logout handler
  app.get('/api/logout', function(req, res) {
    if(req.session.user) {
      delete req.session.user;
      req.send({ err: null });
    } else {
      res.send({ err: 'Not authenticated!' }, 403);
    }
  });

};

