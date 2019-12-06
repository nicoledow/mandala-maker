import React from 'react';
import { connect } from 'react-redux';

class Canvas extends React.Component {
    constructor() {
        super();
        this.state = {
            ctx: {},
            drawing: false,
            clicks: []
        }
    }
    componentDidMount() {
      const canvas = this.refs.canvas
      this.setState({ctx: canvas.getContext('2d')})
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

    render() {
        console.log(this.props)
        return(
            <canvas ref="canvas" 
            height={window.innerHeight * 0.8} 
            width={window.innerWidth * 0.8}
            onMouseDown={e => this.startPosition(e)}
            onMouseUp={e => this.finishedPosition(e)}
            onMouseMove={e => this.draw(e)}
            >
            </canvas>
        )
    }
}

const mapStateToProps = state => {
  return { shapes: state.shapes }
}

const mapDispatchToProps = dispatch => {
    return {
      addShape: shape => dispatch({ type: 'ADD_SHAPE', shape }),
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Canvas);