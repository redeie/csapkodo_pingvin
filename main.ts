let z = 0
led.enable(false)
let x = 0
let y = 130
ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P1, y)
basic.forever(function () {
    while (ModuleWorld_Digital.Ultrasonic(ModuleWorld_Digital.mwDigitalNum.P2P3) < 30) {
        for (let x = 0; x <= 45; x++) {
            y = x + 130
            z = Math.map(ModuleWorld_Digital.Ultrasonic(ModuleWorld_Digital.mwDigitalNum.P2P3), 0, 30, 0, 15)
            ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P1, y)
            basic.pause(z)
        }
        for (let x = 0; x <= 45; x++) {
            y = 175 - x
            z = Math.map(ModuleWorld_Digital.Ultrasonic(ModuleWorld_Digital.mwDigitalNum.P2P3), 0, 30, 0, 15)
        }
        ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P1, y)
        basic.pause(z)
    }
})
