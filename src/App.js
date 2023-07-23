import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import Challenges from './components/Challenges';
import Solutions from './components/Solutions';
import CommunityEngagement from './components/CommunityEngagement';
import Resources from './components/Resources';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
  
    <BrowserRouter>
    <Routes>
      <Route element={<Header/>} path='header' exact/>
      <Route element={<Footer/>} path='/footer' exact/>
      <Route element={<Home/>} path='/' exact/>
      <Route element={<About/>} path='/about' exact/>
      <Route element={<Challenges/>} path='/challenges' exact/>
      <Route element={<Solutions/>} path='/solutions' exact/>
      <Route element={<CommunityEngagement/>} path='/communityengagement' exact/>
      <Route element={<Resources/>} path='/resources' exact/>
      <Route element={<Contact/>} path='/contact' exact/>
     
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
