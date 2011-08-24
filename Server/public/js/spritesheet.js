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
    /*if(this.ready) {        */
    var sprite = this.spritemap[key];
    if(sprite && !sprite.animated) {
        this.ctx.drawImage(this.img, sprite.x, sprite.y,
            sprite.w, sprite.h, x, y, w, h);
    }
//   }    
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
            h: 32        
        },
        'brick1': {
            x: 0,
            y: 16,
            w:8,
            h:8
        },
        'brick2': {
            x: 0,
            y: 24,
            w:8,
            h:8
        },
        'steel': {
            x: 0,
            y: 0,
            w:16,
            h:16
        },
        'home': {
            x: 0,
            y: 32,
            w:32,
            h:32
        },
        'player': {
            x: 0,
            y: 64,
            w:32,
            h:32
        },
        'player_move': {
            x: 0,
            y: 96,
            w:32,
            h:32
        },
        'bullet': {
            x: 32,
            y: 0,
            w:16,
            h:16
        }
    }, ctx);
    ctx.sprites = sprites;
    return sprites;
};
  
  
  
