var sid = getCookies()['connect.sid'];

var socket = io.connect();
socket.on('connect', function () {

});

function createRoom() {
  $.get('/api/login', { user: 'mihkel', pass: 'test' }, function(data) {
    $.get('/api/v1/createroom', { name: prompt('Nimi?') }, function(data) {
        socket.emit('sessionstart', sid);
    });
  });
}