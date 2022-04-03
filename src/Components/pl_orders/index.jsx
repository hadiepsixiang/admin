import React from 'react'
import "./style.css"
import { Link } from 'react-router-dom'


export default function Phanloai() {
    return (
        <div className="pl_form">
            <div class="pl_list">
                <h2 className="db-subtext">Phân loại đơn hàng</h2>
                <div className="order_pllist">
                    <Link to={'/wc_orders'}>
                        Chờ xác nhận
                    </Link>
                    <Link to={'/wg_orders'}>
                        Chờ lấy hàng
                    </Link>
                    <Link to={'/dl_orders'}>
                        Đang giao
                    </Link>
                    <Link to={'/dl1_orders'}>
                        Đã giao
                    </Link>
                    <Link to={'/cc_orders'}>
                        Đơn hủy
                    </Link>
                    <Link to={'/rf_orders'}>
                        Yêu cầu hoàn trả
                    </Link>
                </div>
                <div class="form-group">
                    <select class="form-control">
                        <option value=""> Mã đơn hàng</option>
                        <option value=""> Tên sản phẩm</option>
                    </select>
                    <div className="search">
                        <img src="../../assets/images/search.svg" alt="" />
                        <input type="text" />
                    </div>
                    <div className="pl_button">
                        <p className="text_03">Tìm kiếm</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
