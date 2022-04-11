import React from 'react'
import "./style.css"
import { NavLink } from 'react-router-dom'

export default function sidebar() {
    return (
        <div className="sidebar">
            <div className="side-form">
                <NavLink to={'/'}>
                    <div className="bar_01">
                        <img className="icon_01" src="././assets/images/dashboard.svg" alt=''></img>
                        <span className="bar-text">Báo cáo thống kê </span>
                    </div>
                </NavLink>
                <NavLink to={'/cates'}>
                    <div className="bar_02">
                        <img className="icon_01" src="././assets/images/qlydanhmuc.svg" alt=''></img>
                        <span className="bar-text">Danh mục </span>
                    </div>
                </NavLink>
                <NavLink to={'/ch_products'}>
                    <div className="bar_03">
                        <img className="icon_01" src="././assets/images/qlysp.svg" alt=''></img>
                        <span className="bar-text">Sản phẩm</span>
                    </div>
                </NavLink>
                <NavLink to={'/wc_orders'}>
                    <div className="bar_04">
                        <img className="icon_01" src="././assets/images/qlyorder.svg" alt=''></img>
                        <span className="bar-text">Đơn hàng</span>
                    </div>
                </NavLink>
                <NavLink to={'/rates'}>
                    <div className="bar_05">
                        <img className="icon_01" src="././assets/images/qlyrate.svg" alt=''></img>
                        <span className="bar-text">Đánh giá</span>
                    </div>
                </NavLink>
                <NavLink to={'/blogs'}>
                    <div className="bar_06">
                        <img className="icon_01" src="././assets/images/qlyblog.svg" alt=''></img>
                        <span className="bar-text">Blog</span>
                    </div>
                </NavLink>
                <NavLink to={'/users'}>
                    <div className="bar_07">
                        <img className="icon_01" src="././assets/images/qlyacc.svg" alt=''></img>
                        <span className="bar-text">Tài khoản</span>
                    </div>
                </NavLink>
                <div className="bar_08">
                    <img className="icon_01" src="././assets/images/goout.svg" alt=''></img>
                    <span className="bar-text">Đăng xuất</span>
                </div>
            </div>

        </div >
    )
}
