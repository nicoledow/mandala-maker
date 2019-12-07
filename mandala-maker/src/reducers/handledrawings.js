const handleDrawings = (state = { shapes: [], selectedColor: '' }, action) => {
    switch(action.type) {
        case 'ADD_SHAPE':
          return { ...state, shapes: [...state.shapes, action.shape]}
        case 'CHANGE_SELECTED_COLOR':
          console.log('going to change selected color');
        default:
            return state;
    }
}



export default handleDrawings;