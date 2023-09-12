import React , {useState} from 'react'
import {connect} from 'react-redux'
function Todolist(props){
    console.log("Todolist props::",props)
    var [nt,setNt]=React.useState('')
    return (
        <div className="mybox">
            <h1>Todolist</h1>
            <input type="text" onChange={(e)=>{setNt(e.target.value)}}/>
            <button onClick={()=>{props.dispatch({type:'ADDTODO',payload:nt})}}>Add todo</button>
            {props.t.todos.map((todo)=>{
                return <li>{todo}</li>
            })}
        </div>
    )
}
export default connect(function(Store){return Store})(Todolist)