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
                    ctx.sprites.draw(
                        name, 
                        position*8,
                        index*8,
                        8, 8
                        );
                    break;
                case "s":
                    if (index % 2 == 0 && position % 2 == 0) {
                        ctx.sprites.draw(
                            'steel', 
                            position*8,
                            index*8,
                            16, 16
                            );
                    }
                    break;
                case "h":
                    if (!home_rendered) {
                        home_rendered = true;
                        ctx.sprites.draw(
                            'home', 
                            position*8,
                            index*8,
                            32, 32
                            );
                    }
                    break;
                default:
                    break;
            }
        })
    });
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