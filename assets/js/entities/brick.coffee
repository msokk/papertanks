class Brick extends Entity
  constructor: (@type = 'brick1', @x, @y) ->
    @w = 8
    @h = 8
    
window.Brick = Brick