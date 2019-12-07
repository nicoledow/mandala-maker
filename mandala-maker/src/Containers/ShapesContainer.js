import React from 'react';
import Toolbar from '../Components/Toolbar';
import Canvas from './Canvas';
import { connect } from 'react-redux';

class ShapesContainer extends React.Component {


    chooseShape = e => {
        console.log(e)
    }

    render(){
        return(
            <div>
                <Canvas />
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