import React from 'react';

export default class EllipseButton extends React.Component {
    state = {
        backgroundColor: '#FF8A5B'
    }

    handleOnClick = e => {
        console.log('will draw ellipse');
        this.setState({backgroundColor: '#25CED1'})
        document.querySelector('canvas').addEventListener('click', (e) => {
            this.drawEllipse(e)
        });
    }

    drawEllipse = e => {
        console.log('e in drawEllipse', e);

    }

    render() {
        return (
            <button onClick={e => this.handleOnClick(e)} style={{backgroundColor: this.state.backgroundColor}}><i class="far fa-circle"></i></button>
        )
    }
}