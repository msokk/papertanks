class Brick 
  constructor: (type = 'brick1', x, y) ->
    @type = type
    @x = x
    @y = y    

  draw: (ctx) ->
    ctx.sprites.draw @type, @x, @y, 8, 8
    
window.Brick = Brick