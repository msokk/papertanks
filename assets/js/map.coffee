# e - enemy_spawnpoint
# g - grass
# b - bricks
# p - player_spawnpoint
# h - home
# s - steel
# w - water
# i - ice
class Map
  load: (map_data, ctx) ->
    home_rendered = false
    players_drawn = 0
    top = []    
    middle = []
    bottom = []
    obj = null
     
    map_data.forEach (element, index) ->        
      element.split('').forEach (character, position) ->    
        switch character
          when 'b'
            name = 'brick1'                    
            if position % 2 isnt 0 and index % 2 is 0
              name = 'brick2'
            else if position % 2 is 0 and index % 2 isnt 0
              name = 'brick2'
            obj = new PT.Brick name, position*8, index*8                    

          when 's'
            if index % 2 is 0 and position % 2 is 0
              obj = new PT.Steel position*8, index*8
            
          when 'h'
            if not home_rendered
              home_rendered = true
              obj = new PT.Home position*8, index*8                       
            
          when 'p'
            if not players_drawn 
              players_drawn = yes
              obj = new PT.Player position*8, index*8
              PT.player = obj
              kb = new PT.Keyboard
              kb.bindKey 'a', -> PT.player.moveLeft()
              kb.bindKey 'w', -> PT.player.moveUp()
              kb.bindKey 'd', -> PT.player.moveRight()
              kb.bindKey 's', -> PT.player.moveDown()
              kb.bindKey ' ', -> PT.player.shoot()
                
        middle.push obj if obj
        obj = null
    
    'top': top
    'middle': middle
    'bottom': bottom 

  @map_1 = [   
    "****                    ****                    ****",
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
    "                  ppppbbhhhhbbpppp                  "]

  @map_collision_test = [   
    "                                                    ",
    "                                                    ",
    "                                                    ",
    "                                                    ",
    "                                                    ",
    "                                                    ",
    "                                                    ",
    "                                                    ",
    "                                                    ",
    "                                                    ",
    "                                                    ",
    "                                                    ",
    "                                                    ",
    "                                                    ",
    "                                                    ",
    "                                                    ",
    "                                                    ",
    "                                                    ",
    "                                                    ",
    "                                                    ",
    "                                                    ",
    "                                                    ",
    "                                                    ",
    "                                                    ",
    "                                                    ",
    "                                                    ",
    "bbbb    bbbbbbbb    ssssssssssss    bbbb        bbbb",
    "bbbb    bbbbbbbb    ssssssssssss    bbbb        bbbb",
    "ssss    bbbbbbbb    ssssssssssss    bbbb        ssss",
    "ssss    bbbbbbbb    ssssssssssss    bbbb        ssss",
    "                                                    ",
    "                                                    ",
    "                                                    ",
    "                                                    ",
    "                                                    ",
    "                                                    ",
    "                                                    ",
    "                                                    ",
    "                                                    ",
    "                                                    ",
    "                                                    ",
    "                                                    ",
    "                                                    ",
    "                                                    ",
    "                                                    ",
    "                                                    ",
    "                                                    ",
    "                                                    ",
    "                  ppppbbhhhhbbpppp                  ",
    "                  ppppbbhhhhbbpppp                  ",
    "                  ppppbbhhhhbbpppp                  ",
    "                  ppppbbhhhhbbpppp                  "]

PT.Map = Map