import '../src/css/style.css';
import Home from '../src/components/home/Home';
import React from 'react';
import HeritageState from './components/context/Heritage/HeritageState';


function App() {
  return (
    <HeritageState>
      <div className="App">
        <Home />
      </div>
    </HeritageState>
  );
}

export default App;
