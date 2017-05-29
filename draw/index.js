const five = require('johnny-five');
const board = new five.Board();
const WebSocket = require('ws');

const time = 1000;
let leftServo = null;
let rightServo = null;

board.on('ready', function ready() {
  leftServo = new five.Servo({
    pin: 9,
    center: true
  });
  rightServo = new five.Servo({
    pin: 10,
    center: true
  });

  leftServo.to(35);
  rightServo.to(145);

//   drawCircle(rightServo, leftServo);
});

const drawCircle = () => {

  rightServo.to(125, time);
  setTimeout(() => {
    leftServo.to(55, time);
    setTimeout(() => {
        rightServo.to(145, time);
        setTimeout(() => {
            leftServo.to(35, time);
            // setTimeout(() => {drawCircle(rightServo, leftServo)}, time);
        }, time);
    }, time);
  }, time);
};
 
  const ws = new WebSocket('ws://192.168.1.9');

  ws.on('message', function incoming(data) {
    drawCircle();
  });