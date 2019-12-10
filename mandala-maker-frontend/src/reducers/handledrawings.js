const handleDrawings = (state = { shapes: [], selectedColor: '', currentShape: '' }, action) => {
    switch(action.type) {
        case 'ADD_ELLIPSE':
          console.log('hit ADD_ELLIPSE in reducer', action)
          console.log('redux store state', state)
          return {...state, shapes: [...state.shapes, action.circle]}
        case 'CHANGE_SELECTED_COLOR':
          return {...state, selectedColor: action.color }
        case 'CHANGE_SELECTED_SHAPE':
          console.log('changing selected shape via reducer', action)
          return {...state, currentShape: action.shape }
        case 'UNDO':
          return {...state, shapes: state.shapes.splice(-1)}
        default:
            return state;
    }
}



export default handleDrawings;