class Home
  constructor: (x, y) ->
    @type = 'home'
    @x = x
    @y = y    

  draw: (ctx) ->
    ctx.sprites.draw @type, @x, @y, 32, 32
    
window.Home = Home