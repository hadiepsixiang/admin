import React from 'react'
import "./style.css"
import { Link } from 'react-router-dom'

export default function sidebar() {
    return (
        <div className="sidebar">
            <div className="side-form">

                <div className="bar_01">
                    <img className="icon_01" src="././assets/images/dashboard.svg"></img>
                    <span className="bar-text">Báo cáo thống kê </span>
                </div>

                <div className="bar_02">
                    <img className="icon_01" src="././assets/images/qlydanhmuc.svg"></img>
                    <span className="bar-text">Danh mục </span>
                </div>
                <div className="bar_03">
                    <img className="icon_01" src="././assets/images/qlysp.svg"></img>
                    <span className="bar-text">Sản phẩm</span>
                </div>
                <div className="bar_04">
                    <img className="icon_01" src="././assets/images/qlyorder.svg"></img>
                    <span className="bar-text">Đơn hàng</span>
                </div>
                <div className="bar_05">
                    <img className="icon_01" src="././assets/images/qlyrate.svg"></img>
                    <span className="bar-text">Đánh giá</span>
                </div>
                <div className="bar_06">
                    <img className="icon_01" src="././assets/images/qlyblog.svg"></img>
                    <span className="bar-text">Blog</span>
                </div>
                <Link to={'/users'}>
                    <div className="bar_07">
                        <img className="icon_01" src="././assets/images/qlyacc.svg"></img>
                        <span className="bar-text">Tài khoản</span>
                    </div>
                </Link>
                <div className="bar_08">
                    <img className="icon_01" src="././assets/images/goout.svg"></img>
                    <span className="bar-text">Đăng xuất</span>
                </div>
            </div>

        </div>
    )
}
