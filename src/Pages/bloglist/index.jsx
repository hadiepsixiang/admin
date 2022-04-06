import React from 'react'
import "./style.css"
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom'

export default function bloglist() {
    return (
        <div className="Blogs-page">
            <div className="bl_sth">
                <h2 className="db-text02">50 bài viết</h2>
                <Link to={'/blog_edit'} >
                    <div className="btn-primary">
                        <img className="icon_03" src="././assets/images/plus.svg" alt="" />
                        <p className="text_03">Thêm bài viết</p>
                    </div>
                </Link>
            </div>
            <div className="blogform">
                <div className="widgetLg">
                    <table className="widgetLgTable">
                        <tr className="widgetLgTr">
                            <th className="widgetLgTh">Tiêu đề</th>
                            <th className="widgetLgTh">Danh mục</th>
                            <th className="widgetLgTh">Phân loại</th>
                            <th className="widgetLgTh">Thao tác</th>

                        </tr>
                        <tr className="widgetLgTr">
                            <td className="widgetLgName">Cách trang trí nội thất theo hướng tối giản</td>
                            <td className="widgetLgName">Trang trí nội thất</td>
                            <td className="widgetLgCate">6/3/2022</td>
                            <td className="widgetLgAct">
                                <img
                                    src="././assets/images/edit.svg"
                                    alt=""
                                    className="widgetLgActimg"
                                />
                                <img
                                    src="././assets/images/trash-2.svg"
                                    alt=""
                                    className="widgetLgActimg"
                                />
                            </td>
                        </tr>
                        <tr className="widgetLgTr">
                            <td className="widgetLgName">Cách dán màn hình điện thoại đơn giản</td>
                            <td className="widgetLgName">Phụ kiện điện thoại</td>
                            <td className="widgetLgCate">5/3/2022</td>
                            <td className="widgetLgAct">
                                <img
                                    src="././assets/images/edit.svg"
                                    alt=""
                                    className="widgetLgActimg"
                                />
                                <img
                                    src="././assets/images/trash-2.svg"
                                    alt=""
                                    className="widgetLgActimg"
                                />
                            </td>
                        </tr>
                        <tr className="widgetLgTr">
                            <td className="widgetLgName">Cách phối đồ với phụ kiện sang trọng</td>
                            <td className="widgetLgName">Phụ kiện thời trang</td>
                            <td className="widgetLgCate">4/3/2022</td>
                            <td className="widgetLgAct">
                                <img
                                    src="././assets/images/edit.svg"
                                    alt=""
                                    className="widgetLgActimg"
                                />
                                <img
                                    src="././assets/images/trash-2.svg"
                                    alt=""
                                    className="widgetLgActimg"
                                />
                            </td>
                        </tr>
                        <tr className="widgetLgTr">
                            <td className="widgetLgName">Cách chọn mua đồ dùng học tập</td>
                            <td className="widgetLgName">Văn phòng phẩm</td>
                            <td className="widgetLgCate">3/3/2022</td>
                            <td className="widgetLgAct">
                                <img
                                    src="././assets/images/edit.svg"
                                    alt=""
                                    className="widgetLgActimg"
                                />
                                <img
                                    src="././assets/images/trash-2.svg"
                                    alt=""
                                    className="widgetLgActimg"
                                />
                            </td>
                        </tr>
                        <tr className="widgetLgTr">
                            <td className="widgetLgName">Ý nghĩa của quà tặng vào những ngày đặc biệt</td>
                            <td className="widgetLgName">Quà tặng</td>
                            <td className="widgetLgCate">2/3/2022</td>
                            <td className="widgetLgAct">
                                <img
                                    src="././assets/images/edit.svg"
                                    alt=""
                                    className="widgetLgActimg"
                                />
                                <img
                                    src="././assets/images/trash-2.svg"
                                    alt=""
                                    className="widgetLgActimg"
                                />
                            </td>
                        </tr>
                        <tr className="widgetLgTr">
                            <td className="widgetLgName">Chọn nhẫn theo cung hoàng đạo </td>
                            <td className="widgetLgName">Phụ kiện thời trang </td>
                            <td className="widgetLgCate">1/3/2022</td>
                            <td className="widgetLgAct">
                                <img
                                    src="././assets/images/edit.svg"
                                    alt=""
                                    className="widgetLgActimg"
                                />
                                <img
                                    src="././assets/images/trash-2.svg"
                                    alt=""
                                    className="widgetLgActimg"
                                />
                            </td>
                        </tr>
                        <tr className="widgetLgTr">
                            <td className="widgetLgName">Cách chọn mua đồ dùng học tập</td>
                            <td className="widgetLgName">Văn phòng phẩm</td>
                            <td className="widgetLgCate">3/3/2022</td>
                            <td className="widgetLgAct">
                                <img
                                    src="././assets/images/edit.svg"
                                    alt=""
                                    className="widgetLgActimg"
                                />
                                <img
                                    src="././assets/images/trash-2.svg"
                                    alt=""
                                    className="widgetLgActimg"
                                />
                            </td>
                        </tr>
                        <tr className="widgetLgTr">
                            <td className="widgetLgName">Ý nghĩa của quà tặng vào những ngày đặc biệt</td>
                            <td className="widgetLgName">Quà tặng</td>
                            <td className="widgetLgCate">2/3/2022</td>
                            <td className="widgetLgAct">
                                <img
                                    src="././assets/images/edit.svg"
                                    alt=""
                                    className="widgetLgActimg"
                                />
                                <img
                                    src="././assets/images/trash-2.svg"
                                    alt=""
                                    className="widgetLgActimg"
                                />
                            </td>
                        </tr>
                        <tr className="widgetLgTr">
                            <td className="widgetLgName">Chọn nhẫn theo cung hoàng đạo </td>
                            <td className="widgetLgName">Phụ kiện thời trang </td>
                            <td className="widgetLgCate">1/3/2022</td>
                            <td className="widgetLgAct">
                                <img
                                    src="././assets/images/edit.svg"
                                    alt=""
                                    className="widgetLgActimg"
                                />
                                <img
                                    src="././assets/images/trash-2.svg"
                                    alt=""
                                    className="widgetLgActimg"
                                />
                            </td>
                        </tr>
                        
                    </table>
                </div>
            </div>
        </div>
    )
}
