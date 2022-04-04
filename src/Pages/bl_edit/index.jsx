import React from 'react'
import "./style.css"

export default function bl_edit() {
  return (
    <div>
      <div className="edit_form">
        <h2 className="db-text02">Thông tin bài viết</h2>
        <div className="bl_title">
          <p>Tiêu đề bài viết</p>
          <textarea type="text" size="100" />
        </div>
        <div className="bl_title">
          <p>Hình ảnh bài viết</p>
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
          <p>Nội dung bài viết</p>
          <textarea type="text" />
        </div>
        <div className="bl_title">
          <p>Danh mục bài viết</p>
          <select class="form-control">
            <option value=""> Phụ kiện điện thoại</option>
            <option value=""> Phụ kiện thời trang</option>
            <option value=""> Quà tặng</option>
            <option value=""> Trang trí nội thất</option>
            <option value=""> Văn phòng phẩm</option>
          </select>
        </div>
        <div className="bl_btn">
          <div className="edit_button">
            <p className="text_03">Hủy</p>
          </div>
          <div className="edit_button1">
            <p className="text_03">Đăng bài viết</p>
          </div>
        </div>


      </div>
    </div>
  )
}
