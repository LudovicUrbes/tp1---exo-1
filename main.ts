input.onButtonPressed(Button.A, function () {
    led.unplot(x, y)
    x += -1
    led.plot(x, y)
    if (x < 0) {
        x = 0
        led.plot(x, y)
        led.unplot(x, y)
    }
})
input.onButtonPressed(Button.B, function () {
    led.unplot(x, y)
    x += 1
    led.plot(x, y)
    if (x > 5) {
        x = 5
        led.plot(x, y)
        led.unplot(x, y)
    }
})
let y = 0
let x = 0
x = 0
y = 0
basic.forever(function () {
    led.plot(x, y)
    while (x > 0) {
        led.plot(x, y)
        basic.pause(1000)
        led.unplot(x, y)
        x += -1
        led.plot(x, y)
    }
    while (x < 4) {
        led.plot(x, y)
        basic.pause(1000)
        led.unplot(x, y)
        x += 1
        led.plot(x, y)
    }
})
