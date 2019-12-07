import React from 'react';
import Toolbar from '../Components/Toolbar';
import Canvas from './Canvas';

export default class ShapesContainer extends React.Component {

    state = {
        drawingEllipse: false
    }

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