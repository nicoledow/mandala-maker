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
              <button className="navy-box" id="#001f3f" onClick={e => this.pickColor(e)}>Navy Blue</button>
              <button className="blue-box" id="0074d9" onClick={e => this.pickColor(e)}>Blue</button>
              <button className="aqua-box" id="#7fdbff" onClick={e => this.pickColor(e)}>Aqua</button>
              <button className="olive-box" id="#3d9970" onClick={e => this.pickColor(e)}>Olive</button>
              <button className="green-box" id="#2ecc40" onClick={e => this.pickColor(e)}>Green</button>
              <button className="lime-box" id="#01ff70" onClick={e => this.pickColor(e)}>Lime</button>
              <button className="yellow-box" id="#ffdc00" onClick={e => this.pickColor(e)}>Yellow</button>
              <button className="orange-box" id="#ff8515b" onClick={e => this.pickColor(e)}>Orange</button>
              <button className="purple-box" id="#b10dc9" onClick={e => this.pickColor(e)}>Purple</button>
              <button className="fuschia-box" id="#f012be" onClick={e => this.pickColor(e)}>Fuschia</button>
              <button className="red-box" id="#ff4136" onClick={e => this.pickColor(e)}>Red</button>
              <button className="maroon-box" id="#85144b" onClick={e => this.pickColor(e)}>Maroon</button>
              <button className="gray-box" id="#aaaaaa" onClick={e => this.pickColor(e)}>Gray</button>
              <button className="black-box" id="#111111" onClick={e => this.pickColor(e)}>Black</button>
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