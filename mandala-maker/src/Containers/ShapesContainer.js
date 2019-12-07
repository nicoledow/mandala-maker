import React from 'react';
import Toolbar from '../Components/Toolbar';
import Canvas from './Canvas';
import { connect } from 'react-redux';

class ShapesContainer extends React.Component {
    state = {
        currentDrawingShape: ''
    }


    chooseShape = e => {
        this.setState({ currentDrawingShape: e.target.parentElement.id })
    }

    drawEllipse = e => {
        console.log('drawing ellipse');
    }

    render(){
        console.log(this.state)
        return(
            <div>
                <Canvas currentDrawingShape={this.state.currentDrawingShape} />
                <Toolbar chooseShape={this.chooseShape}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { shapes: state.shapes }
}

const mapDispatchToProps = dispatch => {
    return {
        addShape: shape => dispatch({ type: 'ADD_SHAPE', shape })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShapesContainer);