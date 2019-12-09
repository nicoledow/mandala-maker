//has props: shapes, selectedColor, currentShape (received from parent container, ShapesContainer/store)

import React from 'react';
import { connect } from 'react-redux';

class Canvas extends React.Component {
  constructor() {
    super();
    this.state = {
      ctx: {},
      drawing: false
    }
  }

  componentDidMount () {
    console.log('componentDidMount');
    window.addEventListener('load', () => {
      const canvas = document.getElementById('canvas');
      this.setState({ ctx: canvas.getContext('2d')});
      this.chooseDrawingMode(this.props.currentShape);
    })
  }

  componentDidUpdate() {
    console.log('componentDidUpdate', this.props);
    this.chooseDrawingMode(this.props.currentShape);
  }

  chooseDrawingMode = (currentShape = this.props.currentShape) => {
    console.log('inside chooseDrawingMode');
    const canvas = document.getElementById('canvas');

    switch(currentShape){
        case 'line':
          console.log('going to draw a line')
          document.addEventListener('click', e => {
            this.setState({ click1: this.getMousePosition(canvas, e) });
            console.log('click1', this.state.click1)
            document.addEventListener('click', e => {
              this.setState({ click2: this.getMousePosition(canvas, e) });
              console.log('click2', this.state.click2)
              this.drawLine();
            })
          });
        default:
            return;
    }
  }

  drawLine = e => {
    console.log('made it to drawLine', this.state)
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');

    ctx.lineTo(this.state.click1.x, this.state.click1.y);
    ctx.lineTo(this.state.click2.x, this.state.click2.y);
    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 10;
    ctx.stroke();
    
    console.log('theoretically we drew a line');
  }

  getMousePosition = (canvas, evt) => {
    let rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
  }

  getRadius = (startX, startY, endX, endY) => {
    return Math.hypot(endX - startX, endY - startY)
  }

  render() {
    console.log('canvas rendering')
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