import React from 'react'
import "./style.css"
import { Link } from 'react-router-dom'


export default function ch_products() {
    return (
        <div className="Ch-pages">
            <div className="Ch-form">
                <Link to={'/ch_products'}>
                    <h2 className="db-text02">Còn hàng</h2>
                </Link>
                <Link to={'/hh_products'}>
                    <h2 className="db-text03">Hết hàng</h2>
                </Link>
            </div>
            <div className="ch_sth">
                <h2 className="db-text04">50 sản phẩm</h2>
                <Link to={'/product_edit'} >
                    <div className="ch_button">
                        <img className="icon_03" src="././assets/images/plus.svg" alt="" />
                        <p className="text_03">Thêm sản phẩm</p>
                    </div>
                </Link>
            </div>
            <div className="chp-form">
                <div className="widgetLg">
                    <table className="widgetLgTable">
                        <tr className="widgetLgTr">
                            <th className="widgetLgTh">Hình ảnh</th>
                            <th className="widgetLgTh">Tên sản phẩm</th>
                            <th className="widgetLgTh">Danh mục</th>
                            <th className="widgetLgTh">Giá</th>
                            <th className="widgetLgTh">Doanh số</th>
                            <th className="widgetLgTh">Kho</th>
                            <th className="widgetLgTh">Thao tác</th>
                        </tr>
                        <tr className="widgetLgTr">
                            <td className="widgetLgSP">
                                <img
                                    src="././assets/images/chp1.png"
                                    alt=""
                                    className="widgetLgimg"
                                />
                            </td>
                            <td className="widgetLgRate">Ốp điện thoại OP 100</td>
                            <td className="widgetLgCate">Phụ kiện điện thoại</td>
                            <td className="widgetLgPrice">25.000 đ</td>
                            <td className="widgetLgRevi">125</td>
                            <td className="widgetLgStock">45</td>
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
                        <div></div>
                        <tr className="widgetLgTr">
                            <td className="widgetLgSP">
                                <img
                                    src="././assets/images/chp2.png"
                                    alt=""
                                    className="widgetLgimg"
                                />
                            </td>
                            <td className="widgetLgRate">Sổ tay Roy A5 YYDL </td>
                            <td className="widgetLgCate">Văn phòng phẩm</td>
                            <td className="widgetLgPrice">28.000 đ</td>
                            <td className="widgetLgRevi">118</td>
                            <td className="widgetLgStock">08</td>
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
                        <div></div>
                        <tr className="widgetLgTr">
                            <td className="widgetLgSP">
                                <img
                                    src="././assets/images/chp3.png"
                                    alt=""
                                    className="widgetLgimg"
                                />
                            </td>
                            <td className="widgetLgRate">Lắc tay LT 620 </td>
                            <td className="widgetLgCate">Phụ kiện thời trang</td>
                            <td className="widgetLgPrice">125.000 đ</td>
                            <td className="widgetLgRevi">98</td>
                            <td className="widgetLgStock">16</td>
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
                        <div></div>
                        <tr className="widgetLgTr">
                            <td className="widgetLgSP">
                                <img
                                    src="././assets/images/chp4.png"
                                    alt=""
                                    className="widgetLgimg"
                                />
                            </td>
                            <td className="widgetLgRate">Balo BL 100 </td>
                            <td className="widgetLgCate">Văn phòng phẩm</td>
                            <td className="widgetLgPrice">175.000 đ</td>
                            <td className="widgetLgRevi">86</td>
                            <td className="widgetLgStock">24</td>
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
                        <div></div>
                        <tr className="widgetLgTr">
                            <td className="widgetLgSP">
                                <img
                                    src="././assets/images/chp5.png"
                                    alt=""
                                    className="widgetLgimg"
                                />
                            </td>
                            <td className="widgetLgRate">Ốp điện thoại OP 28 </td>
                            <td className="widgetLgCate">Phụ kiện điện thoại</td>
                            <td className="widgetLgPrice">21.000 đ</td>
                            <td className="widgetLgRevi">84</td>
                            <td className="widgetLgStock">52</td>
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
                        <div></div>
                        <div className="rates_num"> 1 2 3 4 5</div>
                    </table>
                </div>
            </div>
        </div>
    )
}
