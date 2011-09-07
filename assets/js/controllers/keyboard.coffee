class Keyboard
  constructor: (selector) ->
    @elem = $(selector or window)

  bindKey: (key, cb, delay = 50) ->   
    throw new Error 'Key is not a char' if key.length > 1
    keyCode = key.toUpperCase().charCodeAt 0
    isDown = false
    interval = null
    
    @elem.bind 'keydown', (e) ->      
      if e.which is keyCode and not isDown    
        isDown = true
        interval = setInterval -> 
          cb()
        , delay
    
    @elem.bind 'keyup', (e) ->
      if e.which is keyCode
        clearInterval interval
        isDown = false

  bindKeys: (map) ->
    return if not map and not map instanceof Array
    
    for binding in map
      @bindKey binding.key, binding.cb, binding.delay
      
window.Keyboard = Keyboard