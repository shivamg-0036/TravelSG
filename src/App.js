import React, {  useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home';

import About from './Components/About';
import Blog from './Components/Blog';
import Contact from './Components/Contact';
import Login from './Components/Login';
import Services from './Components/Services';
import Package from './Components/Package';


function App() {
  useEffect(() => {

   
    let progress = document.getElementById('progressbar');
    let totalheight = document.body.scrollHeight - window.innerHeight;


    const updateProgressBar = () => {
      let progressheight = (window.scrollY / totalheight) * 100;
      progress.style.height = progressheight + "%";
    }

    window.addEventListener('scroll', updateProgressBar);

    return () => {
      // Clean up the event listener when the component unmounts
      window.removeEventListener('scroll', updateProgressBar);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
   
    <div className="App">
      
        <div id='progressbar'></div>
        <div id='scrollbar'></div>
      

          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/service" element={<Services />}></Route>
            <Route path="/package" element={<Package />}></Route>
            <Route path="/blog" element={<Blog />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/login" element={<Login />}></Route>


          </Routes>

  

    </div>
  );
}

export default App;
