import React from 'react';
import './App.css';
import Header from './Header.js'
import MenuLeft from './MenuLeft.js'
import ScrollX from './ScrollX.js'
import ScrollY from './ScrollY.js'
import Pleer from './Pleer.js'

function App() {
  return (
    <div className="wrapper">
      <Header></Header>
      <MenuLeft></MenuLeft>
      <ScrollX></ScrollX>
      <ScrollY></ScrollY>
      <Pleer></Pleer>
    </div>
  );
}

export default App;
