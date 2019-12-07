import React from 'react';

export default class Toolbar extends React.Component {

    render() {
        return(
            <nav>
                <button id="undo-btn"><i class="fas fa-undo"></i></button>
                <button id="ellipse-btn"><i class="far fa-circle"></i></button>
                <button id="square-btn"><i class="far fa-square"></i></button>
                <button id="triangle-btn"><i class="fas fa-caret-up"></i></button>
            </nav>
        )
    }
}