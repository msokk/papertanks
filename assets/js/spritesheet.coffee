# Spritesheet manager
class SpriteSheet
  constructor: (src, @spritemap = {}, @ctx) ->
    @ready = false
    @img = new Image
    @img.onload = =>
      @ready = true    
    @img.src = src

  draw: (key, x, y, w, h) ->
    sprite = @spritemap[key]
    @ctx.drawImage @img, sprite?.x, sprite?.y, sprite?.w, sprite?.h, x, y, w, h
    
  @loadTankSheet: (ctx) ->
    sprites = new SpriteSheet 'img/html5tank.gif',
        freeze:      { x: 160, y: 0,  w: 32, h: 32 },
        grenade:     { x: 160, y: 32, w: 32, h: 32 },
        life:        { x: 160, y: 64, w: 32, h: 32 },
        protection:  { x: 160, y: 96, w: 32, h: 32 },
        explosion:   { x: 130, y: 0,  w: 32, h: 32 },
        brick1:      { x: 0,   y: 16, w: 8,  h: 8  },
        brick2:      { x: 0,   y: 24, w: 8,  h: 8  },
        steel:       { x: 0,   y: 0,  w: 16, h: 16 },
        home:        { x: 0,   y: 32, w: 32, h: 32 },
        player:      { x: 1,   y: 70, w: 26, h: 26 },
        player_move: { x: 1,   y: 102, w: 26, h: 26 },
        bullet:      { x: 32,  y: 0,  w: 16, h: 16 },
        ctx
    ctx.sprites = sprites  

PT.SpriteSheet = SpriteSheet