return if not io?

sid = getCookies()['connect.sid']



socket = io.connect()
socket.on 'connect', ->
  console.log 'sio connected'

createRoom = ->
  $.get '/api/login', { user: 'mihkel', pass: 'test' }, (data) ->
    $.get '/api/v1/createroom', { name: prompt 'Nimi?' }, (data) ->
        socket.emit 'sessionstart', sid