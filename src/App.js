import React from 'react';
import LayoutComponent from './components';
import './style/dashboard.scss';

function App() {
  const role = 'container';
  return (
    <div className="App" role={role}>
      <LayoutComponent />
    </div>
  );
}

export default App;