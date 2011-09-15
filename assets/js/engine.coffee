# {Game} Engine
# @constructor
class Engine
  constructor: (@selector = 'canvas', @debug = false) ->
  
    @FPSSAMPLERATE = 10
    @FPS = 0
    
    @scale = yes
    
    @tileBaseSize = 8
    @fieldWidth = 52
    @fieldHeight = 52

    $canvas = $(@selector)
    $canvas.attr
      width: 52 * 8
      height: 52 * 8
  
    $canvas.click (e) ->
      console.log 'x: %s y: %s', e.offsetX, e.offsetY
      
    @ctx = $canvas[0].getContext '2d'
    @ctx.fillRect 0, 0, 52 * 8, 52 * 8    
    @sprites = PT.SpriteSheet.loadTankSheet @ctx
    map = new PT.Map
    PT.map_objects = @map_objects = map.load PT.Map.map_1, @ctx
    
    @start()
    
    @createFPSCounter() if @debug
  
  start: ->
    @oldTime = new Date().getTime() - 5
    @animFrameLoop = (time) =>
      @updateLoop time
      @drawLoop time
      frameFPS = 1000 / (time - @oldTime)
      @FPS += (frameFPS - @FPS) / @FPSSAMPLERATE
      @oldTime = time
      window.requestAnimFrame @animFrameLoop
    @animFrameLoop new Date().getTime()

  stop: ->
    if @animFrameLoop
      window.cancelRequestAnimFrame @animFrameLoop
      delete @animFrameLoop

  getFPS: -> @FPS.toFixed 1

  createFPSCounter: ->
    $('body').append '<div id="fpscounter"></div>'
    setInterval =>
      $('#fpscounter').html @getFPS() + ' FPS'
    , 250

  drawLoop: (time) ->
    @ctx.fillStyle = "black"
    @ctx.fillRect 0, 0, 52*8, 52*8    
    for el of @map_objects
      @map_objects[el].forEach (obj, pos) =>
        obj.draw @ctx

  updateLoop: (time) ->
    for el of @map_objects
      @map_objects[el].forEach (obj, pos) =>
        obj.update time
    
    

PT.Engine = Engine