var sio = require('socket.io'),
    RoomManager = require(__dirname + '/room');

var sessionMap = {};


module.exports = function(app) {
  var io = sio.listen(app);

  //Socket Calls
  io.sockets.on('connection', function (socket) {
    socket.on('sessionstart', function (sid) {
      sid = unescape(sid);
      if(sessionMap[sid]) {
        sessionMap[sid] = socket.id;
        console.log(sessionMap);
      }
    });
  });

  //API Calls
  app.get('/api/v1/createroom', function(req, res) {
    var uid = RoomManager.create(req.param('name',
    'Room #' + RoomManager.count()), req.session.user);
     sessionMap[req.sessionID] = {};
     res.send('');
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
