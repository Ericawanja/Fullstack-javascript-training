const initialState = { count: 0, products:{} };
function counterReducer(state = initialState, action) {
  //logic to update the state
  switch(action.type){
    case 'increment':
        return {count: state.count + 1}
    case 'decrement':
        return {count: state.count - 1} 
    case 'incrementBy':
        console.log(action)
        return {count: state.count + action.payload.input}    
    default:
        return state    
  }
}

export default counterReducer;
