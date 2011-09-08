class Bullet
  constructor: (@player, @x, @y) ->
    @type = 'bullet'
    @direction = @player.direction
    @speed = 2
    @w = 16
    @h = 16

  draw: (ctx) ->  
    ctx.save()
    ctx.translate @x + (@w / 2) , @y + (@h / 2)
    ctx.rotate (@direction - 90) * (Math.PI / 180)
    ctx.translate -( @x + (@w / 2) ), -( @y + (@h / 2))
    ctx.sprites.draw @type, @x, @y, @w, @h
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