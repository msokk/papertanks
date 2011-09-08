class Home extends Entity
  constructor: (@x, @y) ->
    @type = 'home'
    @w = 32
    @h = 32

  draw: (ctx, time) ->
    ctx.sprites.draw @type, @x, @y, @w, @h
    
window.Home = Home