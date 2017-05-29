const five = require('johnny-five');
const board = new five.Board();

board.on('ready', function ready() {
  let switchFlipped = true;

  const servo = new five.Servo({
    pin: 8,
    center: true
  });

  this.analogRead(2, (data) => {

    if (switchFlipped !== data > 500) {
      switchFlipped = !switchFlipped;

      if(switchFlipped) {
        servo.to(180);
        setTimeout(() => {servo.to(0);}, 1000);
      }

      console.log('switch flipped!', switchFlipped ? 'On' : 'Off');
    }
  });

  servo.to(0);
});