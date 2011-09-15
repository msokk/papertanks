PT = @PT

class Player extends PT.Entity
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
    @collides = false

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
    ctx.lineWidth = 1.0
    ctx.lineCap = 'butt'
    ctx.strokeStyle = "red"

    ctx.strokeRect @x - 0.5, @y - 0.5, @w, @h
    @update()
    
    if @bullet
      @bullet.draw ctx
      @bullet.fly()
  
  update: (time) ->
    @collides = false
    offset_x = 0
    offset_y = 0    
    switch @direction
      when 0 then offset_y = -@speed
      when 90 then offset_x = @speed
      when 180 then offset_y = @speed
      when 270 then offset_x = -@speed
    
    PT.map_objects.middle.forEach (obj) =>    
      if obj.intersects?(@, offset_x, offset_y) and not obj.health?
        @collides = true
        #ctx = PT.activeEngine.ctx
        #ctx.strokeStyle = "red"
        #ctx.strokeRect obj.x - 0.5, obj.y - 0.5, obj.w, obj.h

    @bullet?.update time

  moveUp: ->
    @direction = 0    
    @y -= @speed unless @collides

  moveDown: ->
    @direction = 180
    @y += @speed unless @collides

  moveLeft: ->
    @direction = 270
    @x -= @speed unless @collides

  moveRight: ->
    @direction = 90
    @x += @speed unless @collides

  die: ->
    #do animation    
    #set lives 1-
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
        when 90  then x_b += 16
        when 180 then y_b += 16
        else x_b -= 16

      @bullet = new PT.Bullet @, x_b, y_b

PT.Player = Player