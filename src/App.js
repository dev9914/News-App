import './App.css';
import NavBar from './Components/NavBar';
import { Outlet } from 'react-router-dom';


import React from 'react'

const App = ()=> {
    return (
      <div>
        <NavBar/>
        
        <Outlet />
      </div>
    )
  
}

export default App;
