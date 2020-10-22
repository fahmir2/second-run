import React from 'react';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';




import './App.css';

function App() {


  
  return (
    <div className="App">
        
        <Navbar />
        <ItemListContainer Title="Acción" />
          
   </div>
  );
}

export default App;
