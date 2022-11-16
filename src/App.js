import React from "react";
import "./style.css";
import {Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Cart from './pages/Cart'
import About from './pages/About'
import Contact from './pages/Contact'
import Profile from './pages/Profile'
export default function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/Cart" element={<Cart/>}/>
        <Route exact path="/About" element={<About/>}/>
        <Route exact path="/Profile" element={<Profile/>}/>
        <Route exact path="/Contact" element={<Contact/>}/>

      </Routes>
    </div>
  );
}
