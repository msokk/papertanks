var Explosion = function() {
  this.type = 'explosion';
};

Explosion.prototype.draw = function(ctx, time, index) {
  var that = this;
  ctx.sprites.animate(
    this.type, 
    20 + index * 32, window.innerHeight - 70,
    32, 32,
    100
  );
  setTimeout(function() {
    if(index < 25) {
      that.draw(ctx, time, index+1);
    }
  }, 1);
};
