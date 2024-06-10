import React from 'react';
import './index.css';
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';

function App() {
  return (
    <div className="app">
      <h1>Bot Battlr</h1>
      <div className="container">
        <BotCollection />
        <YourBotArmy />
      </div>
    </div>
  );
}

export default App;

