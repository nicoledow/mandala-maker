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
    this.drawCenterCircle();    
  }

  //returns coordinates of canvas center as [x, y]
  getCenter = canvas => {
    return [(canvas.width / 2), (canvas.height / 2)]
  }

  //draws stroked circle at center of canvas
  drawCenterCircle = () => {
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');
    const [centerX, centerY] = this.getCenter(canvas);

    ctx.beginPath();
    ctx.arc(centerX, centerY, 13, 0, Math.PI * 2)
    ctx.strokeStyle = 'black';
    ctx.stroke()
  }

  //returns position of mouse (adjusted for canvas offset) as { x: value, y: value }
  getMousePosition = (canvas, evt) => {
    let rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
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