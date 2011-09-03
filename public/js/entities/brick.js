var Brick = function(type, x, y) {
    this.type = type || 'brick1';
    this.x = x;
    this.y = y;    
};

Brick.prototype.draw = function(ctx) {
    ctx.sprites.draw(this.type, this.x, this.y, 8, 8);    
};

