import React from 'react'
import "./style.css"

export default function P_detail() {
    return (
        <div className="pr_detail">
            <h2 className="db-text02">Thông tin chi tiết</h2>
            <div className="pr_form"> 
                <div className="bl_title">
                    <p>Thương hiệu</p>
                    <input type="text" size="100" />
                </div>
                <div className="bl_title1">
                    <p>Giới tính</p>
                    <input type="text" className="pr_tx" />
                </div>
            </div>
            <div className="pr_form"> 
                <div className="bl_title">
                    <p>Hình dạng</p>
                    <input type="text" size="100" />
                </div>
                <div className="bl_title1">
                    <p>Phong cách</p>
                    <input type="text" className="pr_tx2" />
                </div>
            </div>
            <div className="pr_form"> 
                <div className="bl_title">
                    <p>Chất liệu</p>
                    <input type="text" size="100" />
                </div>
                <div className="bl_title1">
                    <p>Dịp</p>
                    <input type="text" className="pr_tx1" />
                </div>
            </div>
            
        </div>
    )
}
