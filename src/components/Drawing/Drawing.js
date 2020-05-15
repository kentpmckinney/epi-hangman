import React from 'react';

class Drawing extends React.Component {

  componentDidMount() {
    this.drawHangman(this.props.bodyParts)
  }

  componentDidUpdate() {
    this.drawHangman(this.props.bodyParts)
  }

  drawHangman(bodyParts) {
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');

    // Clear the Canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the scaffold
    context.beginPath();
    context.lineWidth = 3;
    context.strokeStyle = 'black';
    context.moveTo(10, 290);
    context.lineTo(200, 290);
    context.lineTo(200, 10);
    context.lineTo(100, 10);
    context.lineTo(100, 60);
    context.stroke();

    if (bodyParts.find(item => item === 'head')) {
      context.beginPath();
      context.arc(100, 80, 20, 0, Math.PI * 2, true);
      context.closePath();
      context.lineWidth = 3;
      context.stroke();
    }

    if (bodyParts.find(item => item === 'torso')) {
      context.beginPath();
      context.lineWidth = 3;
      context.moveTo(100, 100);
      context.lineTo(100, 130);
      context.lineTo(93, 130);
      context.lineTo(93, 200);
      context.lineTo(107, 200);
      context.lineTo(107, 130);
      context.lineTo(100, 130);
      context.closePath();
      context.stroke();
    }

    if (bodyParts.find(item => item === 'left arm')) {
      context.beginPath();
      context.lineWidth = 3;
      context.moveTo(93, 130);
      context.lineTo(70, 180);
      context.closePath();
      context.stroke();
    }

    if (bodyParts.find(item => item === 'right arm')) {
      context.beginPath();
      context.lineWidth = 3;
      context.moveTo(107, 130);
      context.lineTo(130, 180);
      context.closePath();
      context.stroke();
    }

    if (bodyParts.find(item => item === 'left leg')) {
      context.beginPath();
      context.lineWidth = 3;
      context.moveTo(93, 200);
      context.lineTo(80, 260);
      context.closePath();
      context.stroke();
    }

    if (bodyParts.find(item => item === 'right leg')) {
      context.beginPath();
      context.lineWidth = 3;
      context.moveTo(107, 200);
      context.lineTo(120, 260);
      context.closePath();
      context.stroke();
    }
  }

  render() {
    return (
      <canvas id="canvas" width="210" height="300"> </canvas>
    );
  }

}

export default Drawing;