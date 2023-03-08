const initialState = {counter:0}
function counterReducer(state = initialState, action){
    switch (action.type){
        case 'increment':
            console.log(state)
            return  {counter: state.counter + 1}
    }
}
export default counterReducer