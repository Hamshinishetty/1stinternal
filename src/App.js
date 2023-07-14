import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Destination from "./components/Destination";
import Navbar from "./components/Navbar";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App (){
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element = {<Home />} />
      <Route path="/Destination" element = {<Destination />} />
      <Route path="/About" element = {<About />} />
      
      
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App