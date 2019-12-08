import React from 'react';

const Canvas = props => {
    return (
      <canvas ref="canvas" height={window.innerHeight * 0.8} width={window.innerWidth * 0.8} />
    )
}

export default Canvas;