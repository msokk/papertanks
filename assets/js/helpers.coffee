# Returns random decimal number in the range
# @param {Number} from
# @param {Number} to
# @return {Number}
Math.randRange = (from, to) -> from + Math.round Math.random() * (to - from)

# Polyfills for HTML5 requestAnimationFrame
window.cancelRequestAnimFrame = do ->
  window.cancelAnimationFrame              or
  window.webkitCancelRequestAnimationFrame or
  window.mozCancelRequestAnimationFrame    or
  window.oCancelRequestAnimationFrame      or
  window.msCancelRequestAnimationFrame     or
  window.clearTimeout

window.requestAnimFrame = do ->
  window.requestAnimationFrame       or
  window.webkitRequestAnimationFrame or
  window.mozRequestAnimationFrame    or
  window.oRequestAnimationFrame      or
  window.msRequestAnimationFrame     or
  (callback, element) -> window.setTimeout callback, 1000 / 60

# Simple cookie parser
window.getCookies = ->
  cookies = {}
  trim = (stringToTrim) -> stringToTrim.replace /^\s+|\s+$/g, ''
    
  list = document.cookie.split ';'
  for cookie in list
    cookie = cookie.split '='
    cookies[trim cookie[0]] = cookie[1]

  cookies