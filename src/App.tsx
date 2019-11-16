import './App.scss';

import React from 'react';

import { TestComponent1, TestComponent2 } from './lib';

const App: React.FC = () => {
  return (
    <div className="App">
      <TestComponent1/>
      <TestComponent2/>
    </div>
  );
}

export default App;
