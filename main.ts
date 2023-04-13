let angle_du_servos_moteur = 0
let nombre_de_places = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A) && input.lightLevel() == 100 || input.pinIsPressed(TouchPin.P2)) {
        servos.P0.setAngle(180)
        angle_du_servos_moteur = 180
        basic.pause(5000)
        basic.pause(5000)
        basic.pause(5000)
        angle_du_servos_moteur = 90
        servos.P0.setAngle(90)
        servos.P0.stop()
    }
})
basic.forever(function () {
    basic.showString("" + (nombre_de_places))
})
basic.forever(function () {
    while (input.pinIsPressed(TouchPin.P1)) {
        nombre_de_places += 1
        basic.pause(1000)
        break;
    }
})
basic.forever(function () {
    let nombre_de_capteurs_activés = 0
    while (!(input.pinIsPressed(TouchPin.P1)) && nombre_de_capteurs_activés < nombre_de_places) {
        nombre_de_places += -1
        basic.pause(1000)
        break;
    }
})
