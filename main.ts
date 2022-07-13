input.onButtonPressed(Button.A, function () {
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.playTone(262, music.beat(BeatFraction.Whole))
})
input.onGesture(Gesture.LogoUp, function () {
    music.playMelody("F E F G - E D C ", 120)
})
input.onGesture(Gesture.ScreenDown, function () {
    music.playMelody("B A B C5 - A G F ", 120)
})
input.onGesture(Gesture.Shake, function () {
    music.playMelody("G F G A - F E D ", 120)
})
basic.showLeds(`
    # . # . #
    . # # # .
    # # # # #
    . # # # .
    # . # . #
    `)
