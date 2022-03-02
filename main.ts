let time = 9
basic.showString("Hello!")
basic.showLeds(`
    # . # # #
    # . # . #
    # . # . #
    # . # . #
    # . # # #
    `)
basic.pause(1000)
for (let index = 0; index < 10; index++) {
    basic.showNumber(time)
    basic.pause(1000)
    time += -1
}
