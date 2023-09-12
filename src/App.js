import React from "react";
import{ Provider} from "react-redux";
import Counter from "./Counter";
import Todolist from "./Todolist";
import store from "./store/store";
function App (){
  return (
    <Provider store={store}>
      <div className="mybox">
        <Counter></Counter>
        <Todolist></Todolist>
      </div>
    </Provider>
    
  );
}
export default App;