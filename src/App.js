import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Table from './components/Table/Table';
import Footer from './components/Footer/Footer';
import WordCardMap from './components/WorldCard/WordCardMap';

function App() {
  return (
    <div className="App">
      <Header/>
      <Table/>
      <WordCardMap/>
      <Footer/>
    </div>
  );
}

export default App;
