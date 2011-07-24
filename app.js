var express = require('express'),
    io = require('socket.io'),
    loginHandler = require(__dirname + '/lib/login'),
    apiHandler = require(__dirname + '/lib/api');
    
var app = express.createServer();
app.use(express.bodyParser());
app.use(express.cookieParser());
app.use(express.session({ secret: 'tanker' }));
app.use(express.favicon());
app.use(express.responseTime());
app.use(express.logger('short'));
app.use(express.static(__dirname + '/public'));


//Session checking middleware
app.use('/api/v1', function(req, res, next){
  if(req.session.user) {
    next();
  } else {
    res.send({ err: 'Not authenticated!' }, 403);
  }
});

app.use(app.router);
app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));

loginHandler(app);
apiHandler(app);

app.listen(3000);
