var Powerup = function(type) {
  this.type = type;
};

$.extend(Powerup, Entity);

Powerup.prototype.draw = function(ctx, time) {
  ctx.sprites.draw(
    this.type, 
    Math.randRange(0, window.innerWidth - 10), 
    Math.randRange(0,  window.innerHeight - 100),
    32, 32
  );
};

Powerup.prototype.update = function(time) {

};
