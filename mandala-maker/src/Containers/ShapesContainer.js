import React from 'react';
import Toolbar from '../Components/Toolbar';

export default class ShapesContainer extends React.Component {

    state = {
        drawingEllipse: false
    }

    chooseShape = e => {
        console.log(e)
    }

    render(){
        return(
            <Toolbar chooseShape={this.chooseShape}/>
        )
    }
}