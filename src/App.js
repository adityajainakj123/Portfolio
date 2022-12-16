// import Background from './components/background';
// import './App.css';
// import Hero from './components/Hero';
// import About from './components/about';
// import Skills from './components/skills';
// import Edu from './components/education';
// import Contact from './components/Contact' ;
// import Footer from './components/Footer';
// import Services1 from './components/Services1';

import React , {useState} from 'react'

import Loader from './components/Loader';
import Index1 from './Index1'
function App() {
  const [load , setload] = useState(true) ;
  setTimeout(function(){setload(false)}, 4000);
  return (
    <>
    {
      load ? <Loader/> : <Index1/>
    }
   
   
   </>
  );
}

export default App;
