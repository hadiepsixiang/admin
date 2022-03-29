import React from 'react'

import './App.css';

import Admin from './Components/topbar/index'
import Sidebar from './Components/sidebar/index'
import Dashboard from './Pages/dashboard/index'
import UserData from './Pages/userData/index'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

function App() {
  return (
    <Router>
      <Admin />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<UserData />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
