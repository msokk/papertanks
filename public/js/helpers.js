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

