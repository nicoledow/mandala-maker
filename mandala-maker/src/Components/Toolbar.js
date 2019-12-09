import React from 'react';
import { connect } from 'react-redux';

class Toolbar extends React.Component {

    render() {
        return(
            <nav>
                <button id="undo" onClick={this.props.undo}><i class="fas fa-undo"></i></button>
                <button id="ellipse" onClick={e => this.props.changeSelectedShape(e.target.parentElement.id)}><i class="far fa-circle"></i></button>
                <button id="square" onClick={e => this.props.changeSelectedShape(e.target.parentElement.id)}><i class="far fa-square"></i></button>
                <button id="triangle" onClick={e => this.props.changeSelectedShape(e.target.parentElement.id)}>▲</button>
                <button id="line" onClick={e => this.props.changeSelectedShape(e.target.parentElement.id)}><strong>/</strong></button>
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