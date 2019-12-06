const handleDrawings = (state = { shapes: []}, action) => {
    switch(action.type) {
        case 'ADD_SHAPE':
          return { ...state, shapes: [...state.shapes, action.shape]}
        default:
            return state;
    }
}



export default handleDrawings;