var Bullet = function(player, x, y) {
    this.type = 'bullet';
    this.x = x;
    this.y = y;    
    this.direction = player.direction;
    this.player = player;
    this.speed=2;
    this.height = 16;
    this.width = 16;
};

Bullet.prototype.draw = function(ctx) {    
    ctx.save();
    ctx.translate(this.x + (this.width / 2) , this.y + (this.height / 2));
    ctx.rotate((this.direction-90) * (Math.PI / 180));
    ctx.translate(-(this.x + (this.width / 2)), -(this.y + (this.height / 2)));    
    ctx.sprites.draw(this.type, this.x, this.y, 16, 16);
    ctx.restore();
};

Bullet.prototype.fly = function() {
    if (0 == this.direction) {
        this.y -= this.speed;
    } else if (90 == this.direction) {
        this.x -= this.speed;
    } else if (180 == this.direction) {
        this.x += this.speed;
    } else {
        this.y += this.speed;
    }
    
    if(this.y < 0 || this.x < 0 || this.x > 416 || this.y > 416) {
        this.player.bullet = null;        
    }
}

Bullet.prototype.collide = function() {
    //destroy the bullet object
    this.player.bullet = null;
}