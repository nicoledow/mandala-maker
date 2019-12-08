import React from 'react';
import Canvas from './Canvas';
import { connect } from 'react-redux';


class ShapesContainer extends React.Component {

    render() {
        <Canvas shapes={this.props.shapes}
        selectedColor={this.props.selectedColor}
        currentShape={this.props.currentShape} />
    }
}

const mapStateToProps = state => {
    return { 
        selectedColor: state.selectedColor,
        currentShape: state.currentShape,
        shapes: state.shapes
    }
}

export default connect(mapStateToProps)(ShapesContainer);