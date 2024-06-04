import React from 'react';
import './App.css';
import Relogiofunc from './components/Relogio/Relogio';

const App = () => {
  return (
    <div className="App">
      <h1>Hora atual:</h1>
      <Relogiofunc/>
    </div>
  );
};

export default App;