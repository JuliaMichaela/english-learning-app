import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Table from './components/Table/Table';
import Footer from './components/Footer/Footer';
import WordCardMap from './components/WorldCardMap/WordCardMap';

import words from './assets/data.json';

function App() {
  return (
    <div className="App">
      <Header/>
      <Table/>
      <WordCardMap
      words={words}
      position={0}/>
      <Footer/>
    </div>
  );
}

export default App;
