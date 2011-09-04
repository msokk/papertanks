var Player = function(x, y) {
    this.type = 'player';
    this.x = x;
    this.y = y;
    this.direction = 0; // 0 - north; 
    this.height = 32;
    this.width = 32;
    this.health = 1;
    this.lives = 1;
    this.birth_x = this.x;
    this.birth_y = this.y;
    this.bullet;
    this.speed = 3;
};

Player.prototype.draw = function(ctx) {
    ctx.save();
    ctx.translate(this.x + (this.width / 2) , this.y + (this.height / 2));
    ctx.rotate(this.direction * (Math.PI / 180));
    ctx.translate(-(this.x + (this.width / 2)), -(this.y + (this.height / 2)));
    var type = this.type;
    if (this.y % 2 == 0 && (this.direction == 0 || this.direction == 180)) {
        type = 'player_move';
    } else if (this.x % 2 == 0 && (this.direction == 90 || this.direction == 270)) {    
        type = 'player_move';
    } else {
        type = 'player';
    }   
        
    ctx.sprites.draw(type, this.x, this.y, 32, 32);
    ctx.restore();
    if (this.bullet) {
        this.bullet.draw(ctx);
        this.bullet.fly();
    }  
};

Player.prototype.moveUp = function() {
    this.direction = 0;
    this.y -= this.speed;
}

Player.prototype.moveDown = function() {
    this.direction = 180;
    this.y += this.speed;
}

Player.prototype.moveLeft = function() {
    this.direction = 270;
    this.x -= this.speed;    
}

Player.prototype.moveRight = function() {
    this.direction = 90;
    this.x += this.speed;
}

Player.prototype.die = function() {
    //do animation    
    //set lives -1
    if (this.lives > 1) {
        this.x = this.birth_x;
        this.y = this.birth_y;
        this.lives -= 1;
    } else {        
        console.log("must destroy");
    //no spawn
        
    }
}
Player.prototype.shoot = function() {
    if (!this.bullet) {
        var x_b = this.x+(this.width/2)-8;
        var y_b = this.y+(this.height/2)-8;
        if (this.direction == 0) {
            y_b -= 16;
        } else if (this.direction == 90) {
            x_b -= 16;
        } else if (this.direction == 180) {
            y_b += 16;
        } else {
            x_b += 16;
        }
        this.bullet = new Bullet(this, x_b, y_b);
    }
}