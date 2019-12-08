import React from 'react';
import { connect } from 'react-redux';

class Toolbar extends React.Component {

    render() {
        return(
            <nav>
                <button id="undo" onClick={this.props.undo}><i class="fas fa-undo"></i></button>
                <button id="ellipse" onClick={this.props.changeSelectedShape('ellipse')}><i class="far fa-circle"></i></button>
                <button id="square" onClick={this.props.changeSelectedShape('square')}><i class="far fa-square"></i></button>
                <button id="triangle" onClick={this.props.changeSelectedShape('triangle')}>▲</button>
            </nav>
        )
    }
}

const mapStateToProps = state => {
    return { currentShape: state.currentShape }
}

const mapDispatchToProps = dispatch => {
    return {
        changeSelectedShape: shape => dispatch({ type: 'CHANGE_SELECTED_SHAPE', shape}),
        undo: () => dispatch({ type: 'UNDO' })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);