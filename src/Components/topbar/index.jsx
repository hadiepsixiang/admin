import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./style.css";

const admintitle = {
    '': 'Báo cáo thống kê',
    'cates': 'Danh mục sản phẩm',
    'ch_products': 'Quản lý sản phẩm',
    'hh_products': 'Quản lý sản phẩm',
    'wc_orders': 'Quản lý đơn hàng',
    'wg_orders': 'Quản lý đơn hàng',
    'dl_orders': 'Quản lý đơn hàng',
    'dl1_orders': 'Quản lý đơn hàng',
    'cc_orders': 'Quản lý đơn hàng',
    'rf_orders': 'Quản lý đơn hàng',
    'rates': 'Quản lý đánh giá',
    'blogs': 'Quản lý blog',
    'users': 'Quản lý tài khoản',
    'blog_edit': 'Thêm bài viết',
    'product_edit': 'Thêm sản phẩm',
}

export default function topbar() {
    const location = useLocation();
    const [adminTitle, setAdminTitle] = useState(admintitle[location.pathname.split('/')[1]])
    useEffect(() => {
        setAdminTitle(admintitle[location.pathname.split('/')[1]])
    }, [location.pathname])

    return (
        <div className="nav-bar">
            <div className="nav-form">
                <div>
                    <div className="up">
                        <Link to={'/'} >
                            <img className="logo_1" src="././assets/images/logo.png" alt="" />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="top-form">
                <div>
                    <p className="admintitle">{adminTitle}</p>
                </div>
            </div>
        </div>
    )
}


