class Bullet
  constructor: (player, x, y) ->
    @type = 'bullet'
    @x = x
    @y = y    
    @direction = player.direction
    @player = player
    @speed = 2
    @height = 16
    @width = 16

  draw: (ctx) ->  
    ctx.save()
    ctx.translate @x + (@width / 2) , @y + (@height / 2)
    ctx.rotate (@direction - 90) * (Math.PI / 180)
    ctx.translate -( @x + (@width / 2) ), -( @y + (@height / 2))
    ctx.sprites.draw @type, @x, @y, 16, 16
    ctx.restore()

  fly: ->
    switch @direction
      when 0   then @y -= @speed
      when 90  then @x += @speed
      when 180 then @y += @speed
      else @x -= @speed
    
    @player.bullet = null if @y < 0 or @y > 416 or @x < 0 or @x > 416

  collide: ->
    #destroy the bullet object
    @player.bullet = null

window.Bullet = Bullet