import React from 'react';

export default class Canvas extends React.Component {
    
    render() {
        return(
            <canvas id="myCanvas" height={window.innerHeight * 0.66} width={window.innerWidth * 0.66 }></canvas>
        )
    }
}