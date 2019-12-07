import React from 'react';
import { connect } from 'react-redux';

class ColorPalette extends React.Component {
    
    render() {
      return (
          <div id="color-palette">
              <h4>Pick a color:</h4>
              <div className="navy-box">Navy Blue</div>
              <div className="blue-box">Blue</div>
              <div className="aqua-box">Aqua</div>
              <div className="olive-box">Olive</div>
              <div className="green-box">Green</div>
              <div className="lime-box">Lime</div>
              <div className="yellow-box">Yellow</div>
              <div className="orange-box">Orange</div>
              <div className="purple-box">Purple</div>
              <div className="fuschia-box">Fuschia</div>
              <div className="red-box">Red</div>
              <div className="maroon-box">Maroon</div>
              <div className="gray-box">Gray</div>
              <div className="black-box">Black</div>
          </div>
      )
    }
}

const mapDispatchToProps = dispatch => {
  return { 
      changeSelectedColor: color => dispatch({ type: 'CHANGE_SELECTED_COLOR', color})
  }
}

export default connect(null, mapDispatchToProps)(ColorPalette);