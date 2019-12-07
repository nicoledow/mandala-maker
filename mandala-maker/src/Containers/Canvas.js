import React from 'react';

export default class Canvas extends React.Component {
    constructor() {
        super();
        this.state = {
            ctx: {},
            drawing: false,
        }
    }

    componentDidMount() {
      const canvas = this.refs.canvas
      this.setState({ctx: canvas.getContext('2d')})
    }

    componentDidUpdate() {
        const canvas = this.refs.canvas;
        switch(this.props.currentShape){
          case 'ellipse':
            canvas.addEventListener('mousedown', this.drawEllipse);
          default:
            canvas.addEventListener('mousedown', this.startPosition);
            canvas.addEventListener('mouseup', this.finishedPosition);
            canvas.addEventListener('mousemouve', this.draw);
        }
    }

    startPosition = e => {
        this.setState({drawing: true});
        this.draw(e);
    }

    finishedPosition = () => {
        this.setState({drawing: false});
        this.state.ctx.beginPath();
    }

    draw = e => {
       const canvas = this.refs.canvas;
       let {x, y} = this.getMousePosition(canvas, e);
       const ctx = this.state.ctx;
       if (this.state.drawing === true) {
           ctx.lineTo(x, y);
           ctx.stroke();
           ctx.beginPath();
           ctx.moveTo(x, y);
       }
    }

    getMousePosition = (canvas, evt) => {
            let rect = canvas.getBoundingClientRect();
            return {
              x: evt.clientX - rect.left,
              y: evt.clientY - rect.top
            };
    }

    drawEllipse = e => {
        console.log('going to draw ellipse')
    }

    render() {
        console.log(this.props)
        return(
            <canvas ref="canvas" 
            height={window.innerHeight * 0.8} 
            width={window.innerWidth * 0.8}
            >
            </canvas>
        )
    }
}
