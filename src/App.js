import React from 'react'

import './App.css';

import Admin from './Components/topbar/index'
import Sidebar from './Components/sidebar/index'
import Dashboard from './Pages/dashboard/index'
import UserData from './Pages/userData/index'
import BlogList from './Pages/bloglist/index'
import CateList from './Pages/cateList/index'
import RateList from './Pages/rateList/index'
import Ch_products from './Pages/ch_products/index'
import Hh_products from './Pages/hh_products/index'
import Orders from './Pages/orders/index'

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
          <Route path="/blogs" element={<BlogList />} />
          <Route path="/cates" element={<CateList />} />
          <Route path="/rates" element={<RateList />} />
          <Route path="/ch_products" element={<Ch_products />} />
          <Route path="/hh_products" element={<Hh_products />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
