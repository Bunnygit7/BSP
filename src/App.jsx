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
    <div className="relative">
      {/* <FireBackground /> */}

      <div className="relative z-10">
        <Nav />
        <Intro />
        <Skills />
        <Form/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
