###
{Game} Engine
@constructor
@param {Object} Options
###
class Engine 
  constructor: (options) ->
    @opt =
      selector: 'canvas'
      debug: false

    $.extend @opt, options
    
    @FPSSAMPLERATE = 10
    @FPS = 0

    canvas = $(@opt.selector)
    canvas.attr({
      width: 52*8, 
      height: 52*8
    })
  
    @ctx = canvas[0].getContext '2d'
    @ctx.fillRect 0, 0, 52*8, 52*8
    
    @sprites = SpriteSheet.loadTankSheet @ctx
    map = new Map
    @map_objects = map.load Map.map_1, @ctx   
    
    
    @start()

    @createFPSCounter() if @opt.debug

  start: ->
    @oldTime = new Date().getTime() - 5
    @animFrameLoop = (time) =>
      @updateLoop(time)
      @drawLoop(time)
      frameFPS = 1000 / (time - @oldTime)
      @FPS += (frameFPS - @FPS) / @FPSSAMPLERATE
      @oldTime = time
      window.requestAnimFrame @animFrameLoop
    @animFrameLoop new Date().getTime()

  stop: ->
    if @animFrameLoop
      window.cancelRequestAnimFrame(@animFrameLoop)
      delete @animFrameLoop

  getFPS: ->
    @FPS.toFixed 1

  createFPSCounter: ->
    $('body').append '<div id="fpscounter"></div>'
    setInterval =>
      $('#fpscounter').html(@getFPS() + ' FPS')
    , 250

  drawLoop: (time) ->
    @ctx.fillRect 0, 0, 52*8, 52*8
    for el in @map_objects        
      @map_objects[el].forEach (obj, pos) =>
        obj.draw(@ctx)

  updateLoop: (time) ->
  
