class Brick extends PT.Entity
  constructor: (@type = 'brick1', @x, @y) ->
    @w = 8
    @h = 8
    
PT.Brick = Brick