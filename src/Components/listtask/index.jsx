import React from 'react'
import "./style.css"
import { Link } from 'react-router-dom'


export default function listtask() {
    return (
        <div className="list-task">
            <div className="listtext">
                <h2 className="db-subtext">Danh sách công việc cần làm</h2>
                <div className="jobtask">
                    <Link to={'/wc_orders'} style={{ textDecoration: 'none' }}>
                        <div className="jobtask_01">
                            <div className="listnum">23</div>
                            <span>Đơn chờ xác nhận</span>
                        </div>
                    </Link>
                    <Link to={'/wg_orders'} style={{ textDecoration: 'none' }}>
                        <div className="jobtask_01">
                            <div className="listnum">43</div>
                            <span>Đơn chờ lấy hàng</span>
                        </div>
                    </Link>
                    <Link to={'/cc_orders'} style={{ textDecoration: 'none' }}>
                        <div className="jobtask_01">
                            <div className="listnum">06</div>
                            <span>Đơn hủy</span>
                        </div>
                    </Link>
                    <Link to={'/rf_orders'} style={{ textDecoration: 'none' }}>
                        <div className="jobtask_01">
                            <div className="listnum">03</div>
                            <span>Yêu cầu hoàn trả</span>
                        </div>
                    </Link>
                    <Link to={'/hh_products'} style={{ textDecoration: 'none' }}>
                        <div className="jobtask_01">
                            <div className="listnum">10</div>
                            <span>Sản phẩm hết hàng</span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
