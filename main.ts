scene.setBackgroundColor(2)
let mySprite = sprites.create(img`
. . . . . . . . . . b b b . . . 
. . . . . . . . b e e 3 3 b . . 
. . . . . . b b e 3 2 e 3 a . . 
. . . . b b 3 3 e 2 2 e 3 3 a . 
. . b b 3 3 3 3 3 e e 3 3 3 a . 
b b 3 3 3 3 3 3 3 3 3 3 3 3 3 a 
b 3 3 3 d d d d 3 3 3 3 3 d d a 
b b b b b b b 3 d d d d d d 3 a 
b d 5 5 5 5 d b b b a a a a a a 
b 3 d d 5 5 5 5 5 5 5 d d d d a 
b 3 3 3 3 3 3 d 5 5 5 d d d d a 
b 3 d 5 5 5 3 3 3 3 3 3 b b b a 
b b b 3 d 5 5 5 5 5 5 5 d d b a 
. . . b b b 3 d 5 5 5 5 d d 3 a 
. . . . . . b b b b 3 d d d b a 
. . . . . . . . . . b b b a a . 
`, SpriteKind.Food)
let mySprite2 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . b 5 5 b . . . 
. . . . . . b b b b b b . . . . 
. . . . . b b 5 5 5 5 5 b . . . 
. b b b b b 5 5 5 5 5 5 5 b . . 
. b d 5 b 5 5 5 5 5 5 5 5 b . . 
. . b 5 5 b 5 d 1 f 5 d 4 f . . 
. . b d 5 5 b 1 f f 5 4 4 c . . 
b b d b 5 5 5 d f b 4 4 4 4 b . 
b d d c d 5 5 b 5 4 4 4 4 4 4 b 
c d d d c c b 5 5 5 5 5 5 5 b . 
c b d d d d d 5 5 5 5 5 5 5 b . 
. c d d d d d d 5 5 5 5 5 d b . 
. . c b d d d d d 5 5 5 b b . . 
. . . c c c c c c c c b b . . . 
`, SpriteKind.Player)
mySprite2.setPosition(134, 18)
