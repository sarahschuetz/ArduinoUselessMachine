const five = require('johnny-five');
const board = new five.Board();

const time = 1000;

board.on('ready', function ready() {
  const leftServo = new five.Servo({
    pin: 9,
    center: true
  });
  const rightServo = new five.Servo({
    pin: 10,
    center: true
  });

  leftServo.to(35);
  rightServo.to(145);

  drawCircle(rightServo, leftServo);
});

const drawCircle = (rightServo, leftServo) => {

  rightServo.to(125, time);
  setTimeout(() => {
    leftServo.to(55, time);
    setTimeout(() => {
        rightServo.to(145, time);
        setTimeout(() => {
            leftServo.to(35, time);
            setTimeout(() => {drawCircle(rightServo, leftServo)}, time);
        }, time);
    }, time);
  }, time);

};