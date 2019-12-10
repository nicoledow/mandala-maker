//has props: shapes, selectedColor, currentShape (received from parent container, ShapesContainer/store)

import React from 'react';
import { connect } from 'react-redux';

class Canvas extends React.Component {
  constructor() {
    super();
    this.state = {
      drawing: false,
    }
  }

  //when Canvas Component mounts, draw a circle in the middle as the mandala starting point
  componentDidMount() {
    //this.drawCenterCircle(); 
    let {x, y} = this.getCenter(document.getElementById('canvas'));
    this.setState({ center: {x, y} });
    //this.selectDrawingMode();   
  }

  //if state such as currentShape or selectedColor is updated (via toolbar or color palette buttons), drawingMode is verified/changed
  componentDidUpdate() {
    this.selectDrawingMode();
  }

  //returns coordinates of canvas center as {x: x-coordinate, y: y-coordinate}
  getCenter = canvas => {
    return { x: canvas.width / 2, y: canvas.height / 2 }
  }

  //draws stroked circle at center of canvas
  // drawCenterCircle = () => {
  //   let canvas = document.getElementById('canvas');
  //   let ctx = canvas.getContext('2d');
  //   const centerX = this.getCenter(canvas).x;
  //   const centerY = this.getCenter(canvas).y;

  //   ctx.beginPath();
  //   ctx.arc(centerX, centerY, 13, 0, Math.PI * 2)
  //   ctx.strokeStyle = 'black';
  //   ctx.stroke()
  // }

  //returns position of mouse (adjusted for canvas offset) as { x: value, y: value }
  getMousePosition = (canvas, evt) => {
    let rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
  }

  selectDrawingMode = () => {
    switch(this.props.currentShape) {
      case 'curve':
        this.getCurvePoints();
      default:
        return;
    }
  }

  //listens for a click and draws a quadratic curve that moves from center, to the click, and back to center
  getCurvePoints = () => {
    console.log('in getCurvePoints');
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');
    canvas.addEventListener('click', e => {
      //get x and y coordinates, use to make a quadratic curve stemming from center point
      let {x, y} = this.getMousePosition(canvas, e);
      ctx.beginPath();
      ctx.moveTo(this.state.center.x - 3, this.state.center.y - 3);
      ctx.quadraticCurveTo(x, y, this.state.center.x, this.state.center.y);
      ctx.lineWidth = 1;
      ctx.strokeStyle = 'black';
      ctx.stroke();
      console.log('did we draw a line?')
    })
  }

  render() {
    console.log(this.props)

    return (
      <canvas id="canvas" height={window.innerHeight * 0.8} width={window.innerWidth * 0.8} />
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addEllipse: ellipse => dispatch({ type: 'ADD_ELLIPSE', ellipse})
  }
}

export default connect(null, mapDispatchToProps)(Canvas);