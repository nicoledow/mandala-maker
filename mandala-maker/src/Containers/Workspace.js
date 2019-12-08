import React from 'react';
import ColorPalette from '../Components/ColorPalette';
import Toolbar from '../Components/Toolbar';
import ShapesContainer from './ShapesContainer';

const Workspace = () => {
    return (
        <div>
          <ColorPalette />
          <Toolbar />
          <ShapesContainer />
        </div>
    )
}

export default Workspace;