//has props: shape, selectedColor, currentShape (received from parent container, ShapesContainer/store)

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
    window.addEventListener('load', () => {
      const canvas = document.getElementById('canvas');
      this.setState({ ctx: canvas.getContext('2d')});
      this.chooseDrawingMode(this.props.currentShape);
    })
  }

  componentDidUpdate() {
    this.chooseDrawingMode(this.props.currentShape);
  }

  chooseDrawingMode = (currentShape = this.props.currentShape) => {
    const canvas = document.getElementById('canvas');

    switch(currentShape){
        case 'ellipse':
            canvas.addEventListener('mousedown', e => {
              let {x, y} = this.getMousePosition(canvas, e);
              this.setState({ startX: x, startY: y });
              this.beginEllipse();
            });
            break;
        default:
            return;
    }
  }

  beginEllipse = () => {
    const canvas = document.getElementById('canvas');
    document.addEventListener('mouseup', e => {
      let {x, y} = this.getMousePosition(canvas, e);
      this.setState({ endX: x, endY: y });
      this.createEllipse();
    })
  }

  createEllipse = () => {
    let midpointX = (this.state.startX + this.state.endX) / 2;
    let midpointY = (this.state.startY + this.state.endY) / 2;
    let ctx = this.state.ctx;
    let radius = this.getRadius(this.state.startX, this.state.startY, this.state.endX, this.state.endY) 

    ctx.fillStyle = 'pink';
    ctx.beginPath();
    ctx.arc(midpointX, midpointY, radius, 0, Math.PI * 2.0);
    ctx.fill();
    
    this.props.addEllipse({ shapeType: 'ellipse', x: midpointX, y: midpointY, radius})
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