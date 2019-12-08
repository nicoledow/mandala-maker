//has props: shape, selectedColor, currentShape (received from parent container, ShapesContainer/store)

import React from 'react';

export default class Canvas extends React.Component {
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
    console.log('in chooseDrawingMode')
    console.log(this.props.currentShape)
    switch(currentShape){
        case 'ellipse':
            canvas.addEventListener('mousedown', this.drawEllipse);
            break;
        default:
            return;
    }
  }

  
  drawEllipse = e => {
    const canvas = document.getElementById('canvas');
    console.log('going to draw ellipse')
    canvas.addEventListener('click', (e) => {
        console.log(this.props.selectedColor)
        let {x, y} = this.getMousePosition(canvas, e);
        let ctx = this.state.ctx;
        ctx.fillStyle = 'pink'; //is this bad because I'm mutating state directly (w/o setState)?
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, Math.PI * 2);
        ctx.fill();
    })
  }

  getMousePosition = (canvas, evt) => {
    let rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
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