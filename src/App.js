import React from 'react'

import './App.css';

import Admin from './Components/topbar/index'
import Sidebar from './Components/sidebar/index'
import Dashboard from './Pages/dashboard/index'

function App() {
  return (
    <div className="App">
      <Admin/>
      <div className="container">
        <Sidebar/>
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
