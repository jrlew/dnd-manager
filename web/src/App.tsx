import React from 'react';
import './App.css';
import { MonsterView } from './components/monster-view/MonsterView';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <ul className="menu">
          <li className="active"><span>Monster</span></li>
          <li><span>Menu 2</span></li>
          <li><span>Menu 3</span></li>
        </ul>
        <div className="body">
          <MonsterView />
        </div>
      </div>
    );
  }
}

export default App;
