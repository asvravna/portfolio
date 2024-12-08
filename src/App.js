import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Profile from './components/Profile'; 
import About from './components/About';
import Experience from './components/Experience';
import './App.css';
// import Experience from './components/Experience';
// import Projects from './components/Projects';
// import Contact from './components/Contact';
// import ThisWebsite from './components/ThisWebsite';
// import Footer from './components/Footer';


function App() {

  return (
    <>
     <Header />
     <Profile />
     <About />
     <Experience />

    </>
   
  );
}


export default App;
