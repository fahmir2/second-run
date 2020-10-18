import React from 'react';
import logo from './logo.svg';
import Img from './components/Img';
import Title from './components/Title';
import Link from './components/Link';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

import './App.css';

function App() {
  return (
    <div className="App">
    {/* 
     <header className="App-header">PP
        <Img />
        <Title/>
        <Link />
        <p>react is awesome</p>
      </header>
    */}
      <body>
        <Navbar />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Footer />
       </body>
    </div>
  );
}

export default App;
