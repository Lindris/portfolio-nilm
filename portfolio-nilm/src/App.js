import logo from './logo.svg';
import './App.css';

import React from "react";
import {Page1} from './Pages/Page1';
import {Page2} from './Pages/Page2';
import { Routes, Route } from "react-router-dom";
function App(){
  return(
    <Routes><Route path='/' element={<Page1/>}/>
    <Route path='about' element={<Page2/>}/>
    </Routes>
  )
}
export default App;
