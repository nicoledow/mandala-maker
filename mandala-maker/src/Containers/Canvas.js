import React from 'react';

export default class Canvas extends React.Component {
    constructor() {
        super();
        this.state = {
            ctx: {},
            drawing: false
        }
    }
    componentDidMount() {
      const canvas = this.refs.canvas
      this.setState({ctx: canvas.getContext('2d')})

      canvas.addEventListener('mousedown', this.startPosition);
      canvas.addEventListener('mouseup', this.finishedPosition);
      canvas.addEventListener('mousemove', this.draw)
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
       const ctx = this.state.ctx;
       if (this.state.drawing === true) {
           ctx.lineTo(e.clientX, e.clientY);
           ctx.stroke();
           ctx.beginPath();
           ctx.moveTo(e.clientX, e.clientY);
       }
    }

    render() {
        return(
            <canvas ref="canvas" height={window.innerHeight * 0.75} width={window.innerWidth * 0.75} >
            </canvas>
        )
    }
}