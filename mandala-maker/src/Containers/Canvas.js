// Free draw:
// mousedown - startPosition
// mouseup - finishedPosition
// mousemove - draw

import React from 'react';
import { connect } from 'react-redux';

class Canvas extends React.Component {
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
      this.chooseDrawingMode(this.props.currentShape);
    }

    componentDidUpdate() {
        // const canvas = this.refs.canvas;
        // switch(this.props.currentShape){
        //   case 'ellipse':
        //     canvas.addEventListener('mousedown', this.drawEllipse);
        //   default:
        //     canvas.addEventListener('mousedown', this.startPosition); //not working - why???
        //     canvas.addEventListener('mouseup', this.finishedPosition);
        //     canvas.addEventListener('mousemouve', this.draw);
        //     break;
        // }
        this.chooseDrawingMode(this.props.currentShape);
    }

    chooseDrawingMode = currentShape => {
        const canvas = this.refs.canvas;
        switch(currentShape){
            case 'ellipse':
                canvas.addEventListener('mousedown', this.drawEllipse);
                break;
            default:
                return;
                // canvas.addEventListener('mousedown', this.startPosition); //not working - why???
                // canvas.addEventListener('mouseup', this.finishedPosition);
                // canvas.addEventListener('mousemouve', this.draw);
                // break;
        }
    }


    // startPosition = e => {
    //     console.log('going to free draw');
    //     this.setState({drawing: true});
    //     this.draw(e);
    // }

    // finishedPosition = () => {
    //     this.setState({drawing: false});
    //     this.state.ctx.beginPath();
    // }

    // draw = e => {
    //    const canvas = this.refs.canvas;
    //    let {x, y} = this.getMousePosition(canvas, e);
    //    const ctx = this.state.ctx;
    //    if (this.state.drawing === true) {
    //        ctx.lineTo(x, y);
    //        ctx.stroke();
    //        ctx.beginPath();
    //        ctx.moveTo(x, y);
    //    }
    // }

    getMousePosition = (canvas, evt) => {
            let rect = canvas.getBoundingClientRect();
            return {
              x: evt.clientX - rect.left,
              y: evt.clientY - rect.top
            };
    }

    drawEllipse = e => {
        const canvas = this.refs.canvas;
        console.log('going to draw ellipse')
        canvas.addEventListener('click', (e) => {
            console.log(this.props.selectedColor)
            let {x, y} = this.getMousePosition(canvas, e);
            let ctx = this.state.ctx;
            ctx.fillStyle = 'purple'; //is this bad because I'm mutating state directly (w/o setState)?
            ctx.beginPath();
            ctx.arc(x, y, 50, 0, Math.PI * 2);
            ctx.fill();
        })
    }

    render() {
        return(
            <canvas ref="canvas" height={window.innerHeight * 0.8} width={window.innerWidth * 0.8} />
        )
    }
}

const mapStateToProps = state => {
    return { selectedColor: state.selectedColor }
}

export default connect(mapStateToProps)(Canvas);