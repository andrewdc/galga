sprites.onDestroyed(SpriteKind.Player, function (sprite) {
    spacePlane = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 1 1 . . . . . . . 
. . . . . . 1 . 5 1 . . . . . . 
. . . . . 1 . b . 5 1 . . . . . 
. . . . . 1 . c . 5 1 . . . . . 
. . 8 8 9 9 9 9 9 9 9 9 8 8 . . 
. . . 8 6 6 6 6 6 6 6 6 8 . . . 
. . . . 8 8 8 8 8 8 8 8 . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
    spacePlane.setFlag(SpriteFlag.StayInScreen, true)
    controller.moveSprite(spacePlane, 200, 200)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 100)
    info.changeScoreBy(1)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    dart = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 4 . 1 8 1 1 8 . . . . . 
. . 4 4 5 2 1 1 8 1 1 8 8 . . . 
. . . . 4 . 1 8 1 1 8 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, spacePlane, 200, 0)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    spacePlane.destroy(effects.spray, 100)
    info.changeLifeBy(-1)
})
let bogey: Sprite = null
let dart: Sprite = null
let spacePlane: Sprite = null
spacePlane = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 1 1 . . . . . . . 
. . . . . . 1 . 5 1 . . . . . . 
. . . . . 1 . b . 5 1 . . . . . 
. . . . . 1 . c . 5 1 . . . . . 
. . 8 8 9 9 9 9 9 9 9 9 8 8 . . 
. . . 8 6 6 6 6 6 6 6 6 8 . . . 
. . . . 8 8 8 8 8 8 8 8 . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
spacePlane.setFlag(SpriteFlag.StayInScreen, true)
info.setLife(3)
controller.moveSprite(spacePlane, 200, 200)
game.onUpdateInterval(500, function () {
    bogey = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . 1 . . . . . 
. . . . . . . . 9 9 9 . . . . . 
. . . . 8 8 8 9 9 9 9 . . 4 . . 
. 8 8 8 8 8 1 1 8 8 8 . 2 5 4 4 
. . . . 8 8 8 6 6 6 6 . . 4 . . 
. . . . . . . . 6 6 6 . . . . . 
. . . . . . . . . . 6 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
    bogey.setVelocity(-100, 0)
    bogey.setPosition(180, Math.randomRange(0, 120))
})
