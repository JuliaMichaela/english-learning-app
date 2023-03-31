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
      <div className="card-container">
      <WordCardMap/>
      </div>
      
      <Footer/>
    </div>
  );
}

export default App;
