import React from "react";
import Nav from "./components/Nav";
import Skills from "./components/Skills";
import Intro from "./components/Intro";
import FireBackground from "./components/FireBackground";
import Footer from "./components/Footer";
import './App.css'
import Form from "./components/Form";
function App() {
  return (
   

      <div className="">
        <Nav />
        <Intro/>
        <hr />
        <Skills />
        <hr />
        <Form/>
        <Footer/>
      </div>
  
  );
}

export default App;
