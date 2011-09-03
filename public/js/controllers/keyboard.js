var Keyboard = function(selector) {
  this.elem = $(selector || window);
};

Keyboard.prototype.bindKey = function(key, cb, delay) {    
  if(key.length > 1) {
    throw new Error('Key is not a char');
  }
  delay = delay || 50;
  var keyCode = key.toUpperCase().charCodeAt(0);
  var isDown = false;
  var interval;
  
  this.elem.bind('keydown', function(e) {      
    if(e.which == keyCode && !isDown) {        
      isDown = true;
      interval = setInterval(function() {          
        cb();
      }, delay);
    }
  });
 
  this.elem.bind('keyup', function(e) {
    if(e.which == keyCode) {
      clearInterval(interval);
      isDown = false;
    }
  });
  
};

Keyboard.prototype.bindKeys = function(map) {
  if(!map || !(map instanceof Array)) {return;}
  
  for(var i = 0; i < map.length; i++) {
    this.bindKey(map[i].key, map[i].cb, map[i].delay);
  }
};
