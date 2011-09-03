var Home = function(x, y) {
    this.type = 'home';
    this.x = x;
    this.y = y;    
};

Home.prototype.draw = function(ctx) {
    ctx.sprites.draw(this.type, this.x, this.y, 32, 32);
};

