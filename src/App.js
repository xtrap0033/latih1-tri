import React, { Component } from 'react';
import Hero from './Components/hero';
import Story from './Components/story';
import Download from './Components/download';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css';
import Register from './Components/register';

function App() {
  return (
    <div>
      <div>
        <Hero/>
      </div>
      <div>
        <Story/>
      </div>
      <div>
        <Download/>
      </div>
      <div>
        <Register/>
      </div>
    </div>
  );
}

export default App;
