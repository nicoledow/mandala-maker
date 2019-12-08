import React from 'react';
import Toolbar from '../Components/Toolbar';
import Canvas from './Canvas';
import { connect } from 'react-redux';
import ColorPalette from '../Components/ColorPalette';


class ShapesContainer extends React.Component {
    constructor() {
        super();
        this.state = { currentShape: '' }
    }

    chooseShape = e => {
        this.setState({ currentShape: e.target.parentElement.id })
    }

    render(){
        console.log(this.props)
        return(
            <div>
                <Canvas 
                currentShape={this.state.currentShape} 
                addCircle={this.props.addCircle} 
                undo={this.props.undo}/>
                <ColorPalette />
                <Toolbar 
                chooseShape={this.chooseShape}
                undo={this.props.undo} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { shapes: state.shapes }
}

const mapDispatchToProps = dispatch => {
    return {
        addCircle: circle => dispatch({ type: 'ADD_CIRCLE', circle }),
        undo: () => dispatch({ type: 'UNDO' })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShapesContainer);