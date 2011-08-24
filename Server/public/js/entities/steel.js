var Steel = function(x, y) {
    this.type = 'steel';
    this.x = x;
    this.y = y;    
};

Steel.prototype.draw = function(ctx) {
    ctx.sprites.draw(this.type, this.x, this.y, 16, 16);
};

