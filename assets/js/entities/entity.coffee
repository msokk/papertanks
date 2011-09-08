PT = @PT

class Entity 
  constructor: (@x = 0, @y = 0) ->
    @type = 'unknown'
    @w = 8
    @h = 8

  draw: (ctx, time) ->
    ctx.sprites.draw @type, @x, @y, @w, @h

  update: (time) ->
    
  intersects: (e) ->
    Math.abs(@x - e.x) * 2 < @w + e.w and Math.abs(@y - e.y) * 2 < @h + e.h
    
window.Entity = Entity