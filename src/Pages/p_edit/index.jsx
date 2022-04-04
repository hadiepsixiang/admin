import React from 'react'
import "./style.css"
import P_detail from '../../Components/p_detail/index'
import P_sales from '../../Components/p_sales/index'

export default function Pr_edit() {
    return (
        <div>
            <div className="pr_edit">
                <h2 className="db-text02">Thông tin cơ bản</h2>
                <div className="bl_title">
                    <p>Hình ảnh sản phẩm</p>
                    <div>
                        <img src="././assets/images/a_img.png" alt="" />
                        <p>Ảnh 1</p>
                    </div>
                    <div>
                        <img src="././assets/images/a_img.png" alt="" />
                        <p>Ảnh 2</p>
                    </div>
                    <div>
                        <img src="././assets/images/a_img.png" alt="" />
                        <p>Ảnh 3</p>
                    </div>
                    <div>
                        <img src="././assets/images/a_img.png" alt="" />
                        <p>Ảnh 4</p>
                    </div>
                </div>
                <div className="bl_title1">
                    <p>Video sản phẩm</p>
                    <div>
                        <img src="././assets/images/a_img.png" alt="" />
                        <p className="img_text">Video</p>
                    </div>
                    <div className="vd_text">
                        <p>Kích thước: Max 30Mb, độ phân giải không quá 1280 x 1280px</p>
                        <p>Độ dài: 10-30s</p>
                        <p>Định dạng: mp4</p>
                    </div>
                </div>
                <div className="bl_title">
                    <p>Tên sản phẩm</p>
                    <textarea type="text" size="100" />
                </div>
                <div className="bl_title1">
                    <p>Mô tả sản phẩm</p>
                    <textarea type="text" />
                </div>
                <div className="bl_title1">
                    <p>Danh mục sản phẩm</p>
                    <select class="form-control">
                        <option value=""> Phụ kiện điện thoại</option>
                        <option value=""> Phụ kiện thời trang</option>
                        <option value=""> Quà tặng</option>
                        <option value=""> Trang trí nội thất</option>
                        <option value=""> Văn phòng phẩm</option>
                    </select>
                </div>
                <div className="bl_title">
                    <p>Phân loại sản phẩm   </p>
                    <select class="form-control">
                        <option value=""> Bảo vệ màn hình</option>
                        <option value=""> Dây sạc điện thoại</option>
                        <option value=""> Ốp điện thoại</option>
                        <option value=""> Tai nghe</option>
                        <option value=""> Thẻ nhớ</option>
                        <option value=""> Sạc dự phòng</option>
                    </select>
                </div>
            </div>
            <P_detail />
            <P_sales />
        </div>
    )
}
