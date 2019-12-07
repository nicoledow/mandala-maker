import React from 'react';
import Toolbar from '../Components/Toolbar';
import Canvas from './Canvas';
import { connect } from 'react-redux';

class ShapesContainer extends React.Component {
    constructor() {
        super();
        this.state = { currentShape: '' }
    }

    chooseShape = e => {
        this.setState({ currentShape: e.target.parentElement.id })
    }

    render(){
        return(
            <div>
                <Canvas currentShape={this.state.currentShape} addShape={this.props.addShape} selectedColor={this.props.selectedColor}/>
                <Toolbar chooseShape={this.chooseShape}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { shapes: state.shapes, selectedColor: state.selectedColor }
}

const mapDispatchToProps = dispatch => {
    return {
        addShape: shape => dispatch({ type: 'ADD_SHAPE', shape })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShapesContainer);