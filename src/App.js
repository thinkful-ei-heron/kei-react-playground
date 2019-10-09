import React from 'react';
import './App.css';
import RouletteGun from './state-drills/RouletteGun';

function App() {
  return (
    <main className='App'>
      <RouletteGun bulletInChamber={1} />
    </main>
  )
}

export default App;