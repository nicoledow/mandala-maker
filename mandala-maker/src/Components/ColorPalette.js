import React from 'react';
import { connect } from 'react-redux';

class ColorPalette extends React.Component {
    
    pickColor = e => {
      this.props.changeSelectedColor(e.target.id)
    }

    render() {
      return (
          <div id="color-palette">
              <h4>Pick a color:</h4>
              <div className="navy-box" id="001f3f" onClick={e => this.pickColor(e)}>Navy Blue</div>
              <div className="blue-box" id="0074d9" onClick={e => this.pickColor(e)}>Blue</div>
              <div className="aqua-box" id="7fdbff" onClick={e => this.pickColor(e)}>Aqua</div>
              <div className="olive-box" id="3d9970" onClick={e => this.pickColor(e)}>Olive</div>
              <div className="green-box" id="2ecc40" onClick={e => this.pickColor(e)}>Green</div>
              <div className="lime-box" id="01ff70" onClick={e => this.pickColor(e)}>Lime</div>
              <div className="yellow-box" id="ffdc00" onClick={e => this.pickColor(e)}>Yellow</div>
              <div className="orange-box" id="ff8515b" onClick={e => this.pickColor(e)}>Orange</div>
              <div className="purple-box" id="b10dc9" onClick={e => this.pickColor(e)}>Purple</div>
              <div className="fuschia-box" id="f012be" onClick={e => this.pickColor(e)}>Fuschia</div>
              <div className="red-box" id="ff4136" onClick={e => this.pickColor(e)}>Red</div>
              <div className="maroon-box" id="85144b" onClick={e => this.pickColor(e)}>Maroon</div>
              <div className="gray-box" id="aaaaaa" onClick={e => this.pickColor(e)}>Gray</div>
              <div className="black-box" id="111111" onClick={e => this.pickColor(e)}>Black</div>
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