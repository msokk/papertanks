class Entity 
  constructor: (type) ->
    @type = type

  draw: (ctx, time) ->
    ctx.sprites.draw @type, 
      Math.randRange(0, window.innerWidth - 10), 
      Math.randRange(0,  window.innerHeight - 10),
      32, 32

  update: (time) ->
    
window.Entity = Entity