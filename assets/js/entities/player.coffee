PT = @PT

class Player extends Entity
  constructor: (@x, @y) ->
    @type = 'player'
    @direction = 0 #0 - north 
    @w = 26
    @h = 26
    @health = 1
    @lives = 1
    @birth_x = @x
    @birth_y = @y
    @bullet = null
    @speed = 3
    PT.player1 = @

  draw: (ctx) ->
    ctx.save()
    ctx.translate @x + (@w / 2) , @y + (@h / 2)
    ctx.rotate @direction * (Math.PI / 180)
    ctx.translate -( @x + (@w / 2)), -( @y + (@h / 2))

    if @y % 2 is 0 and (@direction is 0 or @direction is 180)
      @type = 'player_move'
    else if @x % 2 is 0 and (@direction is 90 or @direction is 270)    
      @type = 'player_move'
    else
      @type = 'player'
    
    ctx.sprites.draw @type, @x, @y, @w, @h
    ctx.restore()
    ctx.lineWidth = 1  
    ctx.lineCap = 'butt'
    ctx.strokeStyle = "red"

    ctx.strokeRect @x, @y, @w, @h
    @update()
    
    if @bullet
      @bullet.draw ctx
      @bullet.fly()
  
  update: (time) ->
    window.PT.map_objects.middle.forEach (obj) =>
      
      #console.log 'Math.abs(%s - %s) * 2 < %s + %s and Math.abs(%s - %s) * 2 < %s + %s', obj.x, @x, obj.w, @w, obj.y, @y, obj.h, @h 
      if obj.intersects?(@) and not obj.health?
        ctx = PT.activeEngine.ctx
        ctx.strokeStyle = "red"
        ctx.strokeRect obj.x, obj.y, obj.w, obj.h

  moveUp: ->
    @direction = 0
    @y -= @speed

  moveDown: ->
    @direction = 180
    @y += @speed

  moveLeft: ->
    @direction = 270
    @x -= @speed    

  moveRight: ->
    @direction = 90
    @x += @speed

  die: ->
    #do animation    
    #set lives -1
    if @lives > 1
      @x = @birth_x
      @y = @birth_y
      @lives -= 1
    else     
      console.log 'must destroy'
      #no spawn
    
  shoot: ->
    unless @bullet
      x_b = @x + (@w / 2) - 8
      y_b = @y + (@h / 2) - 8
      switch @direction
        when 0   then y_b -= 16
        when 90  then x_b -= 16
        when 180 then y_b += 16
        else x_b += 16

      @bullet = new Bullet @, x_b, y_b

window.Player = Player