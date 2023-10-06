const initialState={
    todo:['clean car','get veggies']
}
function todoReducer(){
    if(action.type==='ADDTODO'){
        return {...state,todo:[...state.todo,action.payload]}
    }
    if(action.type==='DELETETODO'){
        var temp = [...state.todo]
        temp.splice(action.payload,1)
        return{...state,todo:[...temp]}
    }
    return state
}
export default todoReducer;
