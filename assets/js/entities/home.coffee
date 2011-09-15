class Home extends PT.Entity
  constructor: (@x, @y) ->
    @type = 'home'
    @w = 32
    @h = 32

  draw: (ctx, time) ->
    ctx.sprites.draw @type, @x, @y, @w, @h
    
PT.Home = Home