var Entity = function(type) {
  this.type = type;
};

Entity.prototype.draw = function(ctx, time) {
ctx.sprites.draw(
    this.type, 
    Math.randRange(0, window.innerWidth - 10), 
    Math.randRange(0,  window.innerHeight - 10),
    32, 32
  );
};

Entity.prototype.update = function(time) {

};
