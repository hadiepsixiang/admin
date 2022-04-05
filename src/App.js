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
import Wc_orders from './Pages/wc_orders/index'
import Wg_orders from './Pages/wg_orders/index'
import Dl_orders from './Pages/dl_orders/index'
import Dl1_orders from './Pages/delivered/index'
import Cc_orders from './Pages/cc_orders/index'
import Rf_orders from './Pages/rf_orders/index'
import Bl_edit from './Pages/bl_edit/index'
import Pr_edit from './Pages/p_edit/index'
import Cc_detail from './Pages/cc_detail/index';
import Or_detail from './Pages/or_detail/index';
import Rf_detail from './Pages/rf_detail/index'

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
          <Route path="/wc_orders" element={<Wc_orders />} />
          <Route path="/wg_orders" element={<Wg_orders />} />
          <Route path="/dl_orders" element={<Dl_orders />} />
          <Route path="/dl1_orders" element={<Dl1_orders />} />
          <Route path="/cc_orders" element={<Cc_orders />} />
          <Route path="/rf_orders" element={<Rf_orders />} />
          <Route path="/blog_edit" element={<Bl_edit />} />
          <Route path="/product_edit" element={<Pr_edit />} />
          <Route path="/cc_detail" element={<Cc_detail />} />
          <Route path="/or_detail" element={<Or_detail />} />
          <Route path="/rf_detail" element={<Rf_detail />} />


        </Routes>
      </div>
    </Router>
  );
}

export default App;
