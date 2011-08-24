/*
 * e - enemy_spawnpoint
 * g - grass
 * b - bricks
 * p - player_spawnpoint
 * h - home
 * s - steel
 * w - water
 * i - ice
 * 
 */
var Map = function() {};
Map.prototype.load = function(map_data, ctx) {
    var home_rendered = false;
    var players_drawn = 0;
    var top = [];    
    var middle = [];
    var bottom = [];
    var obj;
    map_data.forEach(function(element, index) {        
        element.split('').forEach(function(character, position) {       
            switch(character) {
                case "b":
                    var name = 'brick1';                    
                    if (position % 2 != 0 && index % 2 == 0) {
                        name = 'brick2';
                    } else if (position % 2 == 0 && index % 2 != 0) {
                        name = 'brick2';
                    }
                    obj = new Brick(name, position*8, index*8);                    
                    break;
                case "s":
                    if (index % 2 == 0 && position % 2 == 0) {
                        obj = new Steel(position*8, index*8);                    
                    }
                    break;
                case "h":
                    if (!home_rendered) {
                        home_rendered = true;
                        obj = new Home(position*8, index*8);                        
                    }
                    break;
                case "p":
                    if (players_drawn == 0) {
                        players_drawn = 1;
                        obj = new Player(position*8, index*8);
                        window.player = obj;
                        var kb = new Keyboard();
                        kb.bindKey("a", function() {
                            window.player.moveLeft()
                        });
                        kb.bindKey("w", function() {
                            window.player.moveUp()
                        });
                        kb.bindKey("d", function() {
                            window.player.moveRight()
                        });
                        kb.bindKey("s", function() {
                            window.player .moveDown()
                        });
                    }
                    break;
                default:
                    break;                    
            }
            if (obj)
                middle.push(obj);
            obj = null;
        })
    });
    return {
        'top' : top, 
        'middle' : middle, 
        'bottom':bottom
    }
}



Map.map_1 = [   
    "****                    ****                    ****", //52x52
    "****                    ****                    ****",
    "****                    ****                    ****",
    "****                    ****                    ****",
    "    bbbb    bbbb    bbbb    bbbb    bbbb    bbbb    ",
    "    bbbb    bbbb    bbbb    bbbb    bbbb    bbbb    ",
    "    bbbb    bbbb    bbbb    bbbb    bbbb    bbbb    ",
    "    bbbb    bbbb    bbbb    bbbb    bbbb    bbbb    ",
    "    bbbb    bbbb    bbbb    bbbb    bbbb    bbbb    ",
    "    bbbb    bbbb    bbbb    bbbb    bbbb    bbbb    ",
    "    bbbb    bbbb    bbbb    bbbb    bbbb    bbbb    ",
    "    bbbb    bbbb    bbbb    bbbb    bbbb    bbbb    ",
    "    bbbb    bbbb    bbbbssssbbbb    bbbb    bbbb    ",
    "    bbbb    bbbb    bbbbssssbbbb    bbbb    bbbb    ",
    "    bbbb    bbbb    bbbbssssbbbb    bbbb    bbbb    ",
    "    bbbb    bbbb    bbbbssssbbbb    bbbb    bbbb    ",
    "    bbbb    bbbb    bbbb    bbbb    bbbb    bbbb    ",
    "    bbbb    bbbb    bbbb    bbbb    bbbb    bbbb    ",
    "    bbbb    bbbb                    bbbb    bbbb    ",
    "    bbbb    bbbb                    bbbb    bbbb    ",
    "    bbbb    bbbb                    bbbb    bbbb    ",
    "    bbbb    bbbb                    bbbb    bbbb    ",
    "                    bbbb    bbbb                    ",
    "                    bbbb    bbbb                    ",
    "                    bbbb    bbbb                    ",
    "                    bbbb    bbbb                    ",
    "bbbb    bbbbbbbb                    bbbbbbbb    bbbb",
    "bbbb    bbbbbbbb                    bbbbbbbb    bbbb",
    "ssss    bbbbbbbb                    bbbbbbbb    ssss",
    "ssss    bbbbbbbb                    bbbbbbbb    ssss",
    "                    bbbb    bbbb                    ",
    "                    bbbb    bbbb                    ",
    "                    bbbbbbbbbbbb                    ",
    "                    bbbbbbbbbbbb                    ",
    "    bbbb    bbbb    bbbbbbbbbbbb    bbbb    bbbb    ",
    "    bbbb    bbbb    bbbbbbbbbbbb    bbbb    bbbb    ",
    "    bbbb    bbbb    bbbb    bbbb    bbbb    bbbb    ",
    "    bbbb    bbbb    bbbb    bbbb    bbbb    bbbb    ",
    "    bbbb    bbbb    bbbb    bbbb    bbbb    bbbb    ",
    "    bbbb    bbbb    bbbb    bbbb    bbbb    bbbb    ",
    "    bbbb    bbbb    bbbb    bbbb    bbbb    bbbb    ",
    "    bbbb    bbbb    bbbb    bbbb    bbbb    bbbb    ",
    "    bbbb    bbbb                    bbbb    bbbb    ",
    "    bbbb    bbbb                    bbbb    bbbb    ",
    "    bbbb    bbbb                    bbbb    bbbb    ",
    "    bbbb    bbbb                    bbbb    bbbb    ",
    "    bbbb    bbbb      bbbbbbbb      bbbb    bbbb    ",
    "    bbbb    bbbb      bbbbbbbb      bbbb    bbbb    ",
    "                  ppppbbhhhhbbpppp                  ",
    "                  ppppbbhhhhbbpppp                  ",
    "                  ppppbbhhhhbbpppp                  ",
    "                  ppppbbhhhhbbpppp                  "
    ];