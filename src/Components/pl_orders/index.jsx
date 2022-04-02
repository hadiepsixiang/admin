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
                        <p>Chờ xác nhận</p>
                    </Link>
                    <Link to={'/wg_orders'}>
                        <p>Chờ lấy hàng</p>
                    </Link>
                    <Link to={'/dl_orders'}>
                        <p>Đang giao</p>
                    </Link>
                    <Link to={'/dl1_orders'}>
                        <p>Đã giao</p>
                    </Link>
                    <Link to={'/cc_orders'}>
                        <p>Đơn hủy</p>
                    </Link>
                    <Link to={'/rf_orders'}>
                        <p>Yêu cầu hoàn trả</p>
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
