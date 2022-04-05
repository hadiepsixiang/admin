import React from 'react'
import "./style.css"

export default function P_sales() {
    return (
        <div className="p_sale">
            <h2 className="db-text02">Thông tin bán hàng</h2>
            <div className="bl_title">
                <p>Phân loại hàng</p>
                <input type="text" size="100" />
            </div>
            <div className="bl_title1">
                <p>Giá</p>
                <input type="text" />
            </div>
            <div className="bl_title">
                <p>Kho hàng</p>
                <input type="text" size="100" />
            </div>
            <div className="bl_title2">
                <p>Khoảng giá</p>
                <input type="text" />
            </div>
            <div className="bl_btn">
                <div className="edit_button">
                    <p className="text_03">Hủy</p>
                </div>
                <div className="edit_button1">
                    <p className="text_03">Đăng sản phẩm</p>
                </div>
            </div>
        </div>
    )
}
