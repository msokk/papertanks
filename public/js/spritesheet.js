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
    this.ctx.drawImage(this.img, sprite.x, sprite.y,
      sprite.w, sprite.h, x, y, w, h);
  }
};

