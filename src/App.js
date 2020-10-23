import React from 'react';
import Navbar from './components/NavBar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';




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
