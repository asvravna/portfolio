import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About'; // Ensure 'components' is spelled correctly
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ThisWebsite from './components/ThisWebsite';
import Footer from './components/Footer';


function App() {

  return (
    <>
     <Header />
     <About />
    </>
   
  );
}


export default App;
