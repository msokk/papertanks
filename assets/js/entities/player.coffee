class Player
  constructor: (x, y) ->
    @type = 'player'
    @x = x
    @y = y
    @direction = 0 #0 - north 
    @height = 32
    @width = 32
    @health = 1
    @lives = 1
    @birth_x = @x
    @birth_y = @y
    @bullet = null
    @speed = 3

  draw: (ctx) ->
    ctx.save()
    ctx.translate @x + (@width / 2) , @y + (@height / 2)
    ctx.rotate @direction * (Math.PI / 180)
    ctx.translate -( @x + (@width / 2)), -( @y + (@height / 2))

    if @y % 2 is 0 and (@direction is 0 or @direction is 180)
      @type = 'player_move'
    else if @x % 2 is 0 and (@direction is 90 or @direction is 270)    
      @type = 'player_move'
    else
      @type = 'player'
        
    ctx.sprites.draw @type, @x, @y, 32, 32
    ctx.restore()
    if @bullet
      @bullet.draw ctx
      @bullet.fly()

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
      x_b = @x + (@width / 2) - 8
      y_b = @y + (@height / 2) - 8
      switch @direction
        when 0   then y_b -= 16
        when 90  then x_b -= 16
        when 180 then y_b += 16
        else x_b += 16

      @bullet = new Bullet @, x_b, y_b

window.Player = Player