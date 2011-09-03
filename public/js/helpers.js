/**
 * Returns random decimal number in the range
 * @param {Number} from
 * @param {Number} to
 * @return {Number}
 */
Math.randRange = function(from, to) {
  return from + Math.round(Math.random() * (to - from));
};

/**
 * Polyfills for HTML5 requestAnimationFrame
 */
window.cancelRequestAnimFrame = (function() {
  return window.cancelAnimationFrame         ||
    window.webkitCancelRequestAnimationFrame ||
    window.mozCancelRequestAnimationFrame    ||
    window.oCancelRequestAnimationFrame      ||
    window.msCancelRequestAnimationFrame     ||
    window.clearTimeout;
})();

window.requestAnimFrame = (function() {
  return window.requestAnimationFrame  ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame    ||
    window.oRequestAnimationFrame      ||
    window.msRequestAnimationFrame     ||
    function(callback, element) {
      return window.setTimeout(callback, 1000 / 60);
    };
})();

getCookies = function() {
  var cookies = {};
  var trim = function trim(stringToTrim) {
    return stringToTrim.replace(/^\s+|\s+$/g,"");
  };
  var processCookies = function(src, dst) {
    var list = src.split(';');
    for(var i = 0; i < list.length; i++) {
      var cookie = list[i].split('=');
      cookies[trim(cookie[0])] = cookie[1];
    }
  };


  if(document.cookie && document.cookie !== "") {
    processCookies(document.cookie, cookies);
  }

  return cookies;
};
