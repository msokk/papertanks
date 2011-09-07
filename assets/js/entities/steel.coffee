class Steel
  constructor: (x, y) ->
    @type = 'steel'
    @x = x
    @y = y    

  draw: (ctx) ->
    ctx.sprites.draw @type, @x, @y, 16, 16

window.Steel = Steel