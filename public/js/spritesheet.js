/**
 * Spritesheet manager
 */
var SpriteSheet = function(src, spritemap, ctx) {
  var that = this;
  this.ready = false;
  this.img = new Image();
  this.img.src = src;
  this.img.onload = function() {
    that.ready = true;
  };
  this.spritemap = spritemap || {};
  this.ctx = ctx;
};

SpriteSheet.prototype.draw = function(key, x, y, w, h) {
  if(this.ready) {
    var sprite = this.spritemap[key];
    if(sprite && !sprite.animated) {
      this.ctx.drawImage(this.img, sprite.x, sprite.y,
        sprite.w, sprite.h, x, y, w, h);
    }
  }
};

SpriteSheet.prototype.animate = function(key, x, y, w, h, stepduration, cb) {
  var that = this;
  if(this.ready) {
    var sprite = this.spritemap[key];
    if(sprite && sprite.animated) {
    
      var currentstep = 0;
      var steps = sprite.animated[1];
      var direction = sprite.animated[0];
      
      
      var interval = setInterval(function() {
        
        that.ctx.clearRect(x, y, w, h);
        if(direction == 'x') {
          that.ctx.drawImage(that.img, sprite.x + (currentstep * sprite.w), sprite.y,
            sprite.w, sprite.h, x, y, w, h);
        } else {
          that.ctx.drawImage(that.img, sprite.x, sprite.y + (currentstep * sprite.h),
          sprite.w, sprite.h, x, y, w, h);
        }
        
        if(currentstep == steps) {
          that.ctx.clearRect(x, y, w, h);
          clearInterval(interval);
          cb && cb();
        }
        currentstep++;

      }, stepduration || 300);
    
    }
  }
};

SpriteSheet.loadTankSheet = function(ctx) {
  var sprites = new SpriteSheet('img/html5tank.gif', {
      'freeze': {
        x: 160,
        y: 0,
        w: 32,
        h: 32
      },
      'grenade': {
        x: 160,
        y: 32,
        w: 32,
        h: 32
      },
      'life': {
        x: 160,
        y: 64,
        w: 32,
        h: 32
      },
      'protection': {
        x: 160,
        y: 96,
        w: 32,
        h: 32
      },
      'explosion': {
        x: 130,
        y: 0,
        w: 32,
        h: 32,
        animated: 'y3'
      }
  }, ctx);
  ctx.sprites = sprites;
  return sprites;
};
  
  
  
