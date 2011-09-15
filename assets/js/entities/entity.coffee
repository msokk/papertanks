class Entity 
  constructor: (@x = 0, @y = 0) ->
    @type = 'unknown'
    @w = 8
    @h = 8

  draw: (ctx, time) ->
    ctx.sprites.draw @type, @x, @y, @w, @h

  update: (time) ->

  intersects: (e, offset_x = 0, offset_y = 0) ->        
    not (@x > (e.x + offset_x) + e.w || @x + @w < (e.x + offset_x) || @y > (e.y + offset_y) + e.h || @y + @h < (e.y + offset_y))
    
    
PT.Entity = Entity