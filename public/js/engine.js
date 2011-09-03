/**
 * {Game} Engine
 * @constructor
 * @param {Object} Options
 */
var Engine = function(options) {
    var opt = {
        selector: 'canvas',
        debug: false
    };
    $.extend(opt, options);
    this.options = opt;

    var canvas = $(opt.selector);
    canvas.attr({
        width: 52*8, 
        height: 52*8
    });
  
    this.ctx = canvas[0].getContext('2d');
    this.ctx.fillRect(0,0,(52*8), (52*8));
    
    this.sprites = SpriteSheet.loadTankSheet(this.ctx);
    var map = new Map();
    this.map_objects = map.load(Map.map_1, this.ctx);    
    
    
    this.start();

    if(opt.debug) {
        this.createFPSCounter();
    }

};
var ep = Engine.prototype;

ep.FPSSAMPLERATE = 10;
ep.FPS = 0;


ep.start = function() {
    var that = this;
    this.oldTime = new Date().getTime() - 5;
    this.animFrameLoop = function(time) {
        that.updateLoop(time);
        that.drawLoop(time);
        var frameFPS = 1000 / (time - that.oldTime);
        that.FPS += (frameFPS - that.FPS) / that.FPSSAMPLERATE;
        that.oldTime = time;
        window.requestAnimFrame(that.animFrameLoop);
    };
    this.animFrameLoop(new Date().getTime());
};

ep.stop = function() {
    if(this.animFrameLoop) {
        window.cancelRequestAnimFrame(this.animFrameLoop);
        delete this.animFrameLoop;
    }
};

ep.getFPS = function() {
    return this.FPS.toFixed(1);
};

ep.createFPSCounter = function() {
    var that = this;
    $('body').append('<div id="fpscounter"></div>');
    var elem = $('#fpscounter');
    setInterval(function() {
        elem.html(that.getFPS() + ' FPS');
    }, 250);
};

ep.drawLoop = function(time) {
    var ctx = this.ctx;
    ctx.fillRect(0,0,(52*8), (52*8));
    for (var el in this.map_objects) {        
        this.map_objects[el].forEach(function(obj, pos) {
            obj.draw(ctx);
        });        
    }
    
};

ep.updateLoop = function(time) {
  
    };
