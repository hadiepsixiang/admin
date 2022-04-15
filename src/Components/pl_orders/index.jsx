import React from 'react'
import "./style.css"
import { NavLink } from 'react-router-dom'

export default function Phanloai() {
    return (
        <div className="pl_form">
            <div className="pl_list">
                <h2 className="db-subtext">Phân loại đơn hàng</h2>
                <div className="order_pllist">
                    <NavLink to={'/wc_orders'}>
                        Chờ xác nhận
                    </NavLink>
                    <NavLink to={'/wg_orders'}>
                        Chờ lấy hàng
                    </NavLink>
                    <NavLink to={'/dl_orders'}>
                        Đang giao
                    </NavLink>
                    <NavLink to={'/dl1_orders'}>
                        Đã giao
                    </NavLink>
                    <NavLink to={'/cc_orders'}>
                        Đơn hủy
                    </NavLink>
                    <NavLink to={'/rf_orders'}>
                        Yêu cầu hoàn trả
                    </NavLink>
                </div>
                <div className="form-group">
                    <select className="form-control">
                        <option value=""> Mã đơn hàng</option>
                        <option value=""> Tên sản phẩm</option>
                    </select>
                    <div className="search">
                        <img src="../../assets/images/search.svg" alt="" />
                        <input type="text" />
                    </div>
                    <button className="pl_button">Tìm kiếm</button>
                </div>
            </div>

        </div>
    )
}
