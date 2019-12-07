const handleDrawings = (state = { shapes: { circles: [] }, selectedColor: '' }, action) => {
    switch(action.type) {
        case 'ADD_CIRCLE':
          console.log(action)
          return { ...state, shapes: {...state.shapes, circles: [...state.shapes.circles, action.circle]}}
        case 'CHANGE_SELECTED_COLOR':
          console.log('made it to reducer')
          return {...state, selectedColor: action.color }
        default:
            return state;
    }
}



export default handleDrawings;