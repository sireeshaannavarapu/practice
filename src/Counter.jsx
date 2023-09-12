import Rect from 'react'
import {connect} from 'react-redux'
function Counter(props){
    console.log("Counter Props::",props)
    return (
        <div className="mybox">
            <h1>Counter:{props.c.count}</h1>
            <button onClick={()=>{props.dispatch({type:"INC"})}}>Increment</button>
            <button onClick={()=>{props.dispatch({type:"DEC"})}}>Decrement</button>
            <button onClick={()=>{props.dispatch({type:"RESET"})}}>RESET</button>
        </div>
    )
    }
export default connect(function(Store){return Store})(Counter)