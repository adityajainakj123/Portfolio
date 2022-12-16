import React from 'react'
import Background from './components/background';
import './App.css';
import Hero from './components/Hero';
import About from './components/about';
import Skills from './components/skills';
import Edu from './components/education';
import Contact from './components/Contact' ;
import Footer from './components/Footer';
import Services1 from './components/Services1';


function Index1(){
return(
  <>
   <Background/>
    <Hero/>
    <About/>
    <Edu/>
    <Skills/>
    <Services1/>
    <Contact/>
    <Footer/>
  </>
);
}

export default Index1;