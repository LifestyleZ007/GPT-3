import React from "react";
import {Footer, Blog, Features, Posibility, Header, WhatGPT3} from './containers'
import { CTA, Brand, Navbar} from './components'
import './App.css'
const App = () => {
  return ( 
    <div className="app">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand/>
      <WhatGPT3/>
      <Features/>
      <Posibility/>
      <CTA/>
      <Blog/>
      <Footer/>
    </div>
   );
}

export default App;