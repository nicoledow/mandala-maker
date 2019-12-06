import React from 'react';
import EllipseButton from './EllipseButton';

export default class Toolbar extends React.Component {

    render() {
        return(
            <nav>
                <button><i class="fas fa-undo"></i></button>
                <EllipseButton />
                <button><i class="far fa-square"></i></button>
                <button><i class="fas fa-caret-up"></i></button>
            </nav>
        )
    }
}