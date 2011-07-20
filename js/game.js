/**
 * {Game} Engine
 * @constructor
 * @param {Object} Options
 */
var Engine = function(options) {
  var opt = {
    selector: 'canvas',
    debug: false
  };
  $.extend(opt, options);
  this.options = opt;
  
  this.ctx = $('#gamecanvas')[0].getContext('2d');
  
  this.sprites = new SpriteSheet('img/html5tank.gif', {
    'powerup': {
      x: 160,
      y: 0,
      w: 32,
      h: 32
    },
    'explosion': {
      x: 130,
      y: 0,
      w: 32,
      h: 32
    }
  }, this.ctx);
  
  this.start();

  if(opt.debug) {
    this.createFPSCounter();
  }
};
var ep = Engine.prototype;

ep.FPSSAMPLERATE = 10;
ep.FPS = 0;

ep.start = function() {
  var that = this;
  this.oldTime = new Date().getTime() - 5;
  this.animFrameLoop = function(time) {
    that.updateLoop(time);
    that.drawLoop(time);
    var frameFPS = 1000 / (time - that.oldTime);
    that.FPS += (frameFPS - that.FPS) / that.FPSSAMPLERATE;
    that.oldTime = time;
    window.requestAnimFrame(that.animFrameLoop);
  };
  this.animFrameLoop(new Date().getTime());
};

ep.stop = function() {
  if(this.animFrameLoop) {
    window.cancelRequestAnimFrame(this.animFrameLoop);
    delete this.animFrameLoop;
  }
};

ep.getFPS = function() {
  return this.FPS.toFixed(1);
};

ep.createFPSCounter = function() {
  var that = this;
  $('body').append('<div id="fpscounter"></div>');
  var elem = $('#fpscounter');
  setInterval(function() {
    elem.html(that.getFPS() + ' FPS');
  }, 250);
};

ep.drawLoop = function(time) {
  var ctx = this.ctx;
  for(var i = 0; i < 100; i++) {
    this.sprites.draw('powerup', Math.randRange(0,800), Math.randRange(0,600), 32, 32);
    this.sprites.draw('explosion', Math.randRange(0,800), Math.randRange(0,600), 32, 32);
  };
  ctx.clearRect(350, 250, 100, 100);

};

ep.updateLoop = function(time) {
  
};

var SpriteSheet = function(src, spritemap, ctx) {
  this.ready = false;
  this.img = new Image();
  this.img.src = src;
  this.img.onload = function() {
    this.ready = true;
  };
  this.spritemap = spritemap || {};
  this.ctx = ctx;
};

SpriteSheet.prototype.draw = function(key, x, y, w, h) {
  var sprite = this.spritemap[key];
  this.ctx.drawImage(this.img, sprite.x, sprite.y,
    sprite.w, sprite.h, x, y, w, h);
};


window.cancelRequestAnimFrame = (function() {
  return window.cancelAnimationFrame         ||
    window.webkitCancelRequestAnimationFrame ||
    window.mozCancelRequestAnimationFrame    ||
    window.oCancelRequestAnimationFrame      ||
    window.msCancelRequestAnimationFrame     ||
    window.clearTimeout;
})();

window.requestAnimFrame = (function() {
  return window.requestAnimationFrame  || 
    window.webkitRequestAnimationFrame || 
    window.mozRequestAnimationFrame    || 
    window.oRequestAnimationFrame      || 
    window.msRequestAnimationFrame     || 
    function(callback, element) {
      return window.setTimeout(callback, 1000 / 60);
    };
})();

/**
 * Returns random decimal number in the range
 * @param {Number} from
 * @param {Number} to
 * @return {Number}
 */
Math.randRange = function(from, to) {
  return from + Math.round(Math.random() * (to - from));
};



//Init
var test = new Engine({
  selector: '#gamecanvas',
  debug: true,
  width: 800,
  height: 600
});


