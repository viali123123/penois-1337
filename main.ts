basic.forever(function () {

    let distance = sonar.ping(
        DigitalPin.P13,
        DigitalPin.P14,
        PingUnit.Centimeters
    )

    // Если близко препятствие
    if (distance < 15 && distance != 0) {

        bitbot.stop()
        basic.pause(300)

        bitbot.go(BBDirection.Reverse, 40)
        basic.pause(400)

        bitbot.go(BBDirection.Right, 50)
        basic.pause(500)

    } else {

        let left = bitbot.readLine(BBLineSensor.Left)
        let right = bitbot.readLine(BBLineSensor.Right)

        if (left == 0 && right == 0) {
            bitbot.go(BBDirection.Forward, 50)

        } else if (left == 1 && right == 0) {
            bitbot.go(BBDirection.Left, 40)

        } else if (left == 0 && right == 1) {
            bitbot.go(BBDirection.Right, 40)

        } else {
            bitbot.stop()
        }
    }
})