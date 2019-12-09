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
    console.log('in componentDidUpdate', this.props);
    this.chooseDrawingMode(this.props.currentShape);
  }


  chooseDrawingMode = (currentShape = this.props.currentShape) => {
    console.log('chooseDrawingMode');
    const canvas = document.getElementById('canvas');

    switch(currentShape){
        case 'ellipse':
            console.log('adding event listener for ellipse')
            canvas.addEventListener('mousedown', e => {
              ('canvas heard mousedown')
              let {x, y} = this.getMousePosition(canvas, e);
              this.setState({ startX: x, startY: y });
              this.beginEllipse();
            });
        default:
            return;
    }
  }

  beginEllipse = () => {
    console.log('in beginEllipse')
    const canvas = document.getElementById('canvas');
    document.addEventListener('mouseup', e => {
      console.log('canvas heard mouseup')
      let {x, y} = this.getMousePosition(canvas, e);
      this.setState({ endX: x, endY: y });
      this.createEllipse();
    })
  }

  createEllipse = () => {
    console.log('in createEllipse fn');
    let midpointX = (this.state.startX + this.state.endX) / 2;
    let midpointY = (this.state.startY + this.state.endY) / 2;
    let ctx = this.state.ctx;
    let radius = this.getRadius(this.state.startX, this.state.startY, this.state.endX, this.state.endY) 

    ctx.beginPath();
    ctx.arc(midpointX, midpointY, radius, 0, Math.PI * 2.0);
    ctx.fillStyle = this.props.selectedColor;
    ctx.fill();
    
    this.props.addEllipse({ 
      shapeType: 'ellipse', 
      x: midpointX, 
      y: midpointY, 
      radius, 
      color: this.props.selectedColor
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