let licht = 0
input.onButtonPressed(Button.A, function () {
    music.rest(music.beat(BeatFraction.Sixteenth))
    licht = input.lightLevel()
    if (licht < 25) {
        music.ringTone(262)
    } else if (licht < 50) {
        music.ringTone(294)
    } else if (licht < 100) {
        music.ringTone(330)
    } else if (licht < 150) {
        music.ringTone(349)
    } else if (licht < 180) {
        music.ringTone(392)
    } else {
        music.ringTone(440)
    }
})
