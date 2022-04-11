import React from 'react'

import './App.css';

import Admin from './Components/topbar/index'
import Sidebar from './Components/sidebar/index'
import Dashboard from './Pages/dashboard/index'
import UserData from './Pages/userData/index'
import BlogList from './Pages/bloglist/index'
import CateList from './Pages/cateList/index'
import RateList from './Pages/rateList/index'
import ChProducts from './Pages/ch_products/index'
import HhProducts from './Pages/hh_products/index'
import WcOrders from './Pages/wc_orders/index'
import WgOrders from './Pages/wg_orders/index'
import DlOrders from './Pages/dl_orders/index'
import Dl1Orders from './Pages/delivered/index'
import CcOrders from './Pages/cc_orders/index'
import RfOrders from './Pages/rf_orders/index'
import BlEdit from './Pages/bl_edit/index'
import PrEdit from './Pages/p_edit/index'
import CcDetail from './Pages/cc_detail/index';
import OrDetail from './Pages/or_detail/index';
import RfDetail from './Pages/rf_detail/index'

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
          <Route path="/ch_products" element={<ChProducts />} />
          <Route path="/hh_products" element={<HhProducts />} />
          <Route path="/wc_orders" element={<WcOrders />} />
          <Route path="/wg_orders" element={<WgOrders />} />
          <Route path="/dl_orders" element={<DlOrders />} />
          <Route path="/dl1_orders" element={<Dl1Orders />} />
          <Route path="/cc_orders" element={<CcOrders />} />
          <Route path="/rf_orders" element={<RfOrders />} />
          <Route path="/blog_edit" element={<BlEdit />} />
          <Route path="/product_edit" element={<PrEdit />} />
          <Route path="/cc_detail" element={<CcDetail />} />
          <Route path="/or_detail" element={<OrDetail />} />
          <Route path="/rf_detail" element={<RfDetail />} />


        </Routes>
      </div>
    </Router>
  );
}

export default App;
