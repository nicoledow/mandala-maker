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
            //canvas.addEventListener('mousedown', this.drawEllipse);
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
    console.log('in createEllipse fn');
    const canvas = document.getElementById('canvas');
    let midpointX = (this.state.startX + this.state.endX) / 2;
    let midpointY = (this.state.startY + this.state.endY) / 2;
    let ctx = this.state.ctx;
    let radius = this.getRadius(this.state.startX, this.state.startY, this.state.endX, this.state.endY) 

    ctx.fillStyle = 'pink';
    ctx.beginPath();
    ctx.arc(midpointX, midpointY, radius, 0, Math.PI * 2.0);
    ctx.fill();
    console.log('startX', this.state.startX)
    console.log('startY', this.state.startY)
    console.log('midpointX', midpointX)
    console.log('midpointY', midpointY)
    this.props.addEllipse({ shapeType: 'ellipse', x: midpointX, y: midpointY, radius})
  }
  
  drawEllipse = e => {
    const canvas = document.getElementById('canvas');
    canvas.addEventListener('click', (e) => {
        console.log(this.props.selectedColor)
        let {x, y} = this.getMousePosition(canvas, e);
        let ctx = this.state.ctx;
        ctx.fillStyle = 'pink'; //is this bad because I'm mutating state directly (w/o setState)?
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, Math.PI * 2);
        ctx.fill();
        //this.props.addEllipse({ shapeType: 'ellipse', x, y, radius: 10})
    })
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