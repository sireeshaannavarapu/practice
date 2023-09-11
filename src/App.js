import React from 'react';
import {Outlet,Link} from 'react-router-dom';
import NavBar from './NavBar';
import Meals from "./Meals"


function App(){
  return (
    <div>
      <NavBar></NavBar>
      <Link to="/Meals">Meal</Link>
      <Outlet></Outlet>
    </div>
  )
}
export default App;