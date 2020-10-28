import React from 'react';
import Navbar from './components/NavBar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

import ItemCount from './components/ItemCount/ItemCount';




import './App.css';

function App() {
 
  return (
    <div className="App">
        
        <Navbar />
        <ItemListContainer Title="Acción" />
        <ItemCount stockMax={8} initial={1} amount={1} />  
   </div>
  );
}

export default App;
