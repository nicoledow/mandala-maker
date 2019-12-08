const handleDrawings = (state = { shapes: [], selectedColor: '', currentShape: '' }, action) => {
    switch(action.type) {
        case 'ADD_CIRCLE':
          //return { ...state, shapes: {...state.shapes, circles: [...state.shapes.circles, action.circle]}}
          return {...state, shapes: [...state.shapes, action.circle]}
        case 'CHANGE_SELECTED_COLOR':
          return {...state, selectedColor: action.color }
        case 'UNDO':
          return {...state, shapes: state.shapes.splice(-1)}
        default:
            return state;
    }
}



export default handleDrawings;