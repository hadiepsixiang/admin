import React from 'react'
import "./style.css"
import { Link } from 'react-router-dom'


export default function Hh_products() {
    return (
        <div className="Hh-pages">
            <div className="Hh-form">
                <Link to={'/ch_products'}>
                    <h2 className="db-text03">Còn hàng</h2>
                </Link>
                <Link to={'/hh_products'}>
                    <h2 className="db-text02">Hết hàng</h2>
                </Link>
            </div>
            <div className="hh_sth">
                <h2 className="db-text04">10 sản phẩm</h2>
            </div>
            <div className="hhp-form">
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
                                    src="././assets/images/hhp1.png"
                                    alt=""
                                    className="widgetLgimg"
                                />
                            </td>
                            <td className="widgetLgRate">Ốp điện thoại OT 100 </td>
                            <td className="widgetLgCate">Phụ kiện điện thoại</td>
                            <td className="widgetLgPrice">25.000 đ</td>
                            <td className="widgetLgRevi">40</td>
                            <td className="widgetLgStock"><i>hết hàng</i></td>
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
                                    src="././assets/images/hhp2.png"
                                    alt=""
                                    className="widgetLgimg"
                                />
                            </td>
                            <td className="widgetLgRate">Mũ len MT 26  </td>
                            <td className="widgetLgCate">Phụ kiện thời trang</td>
                            <td className="widgetLgPrice">28.000 đ</td>
                            <td className="widgetLgRevi">70</td>
                            <td className="widgetLgStock"><i>hết hàng</i></td>
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
                                    src="././assets/images/hhp3.png"
                                    alt=""
                                    className="widgetLgimg"
                                />
                            </td>
                            <td className="widgetLgRate">Bông tai BT 20</td>
                            <td className="widgetLgCate">Phụ kiện thời trang</td>
                            <td className="widgetLgPrice">265.000 đ</td>
                            <td className="widgetLgRevi">35</td>
                            <td className="widgetLgStock"><i>hết hàng</i></td>
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
                                    src="././assets/images/hhp4.png"
                                    alt=""
                                    className="widgetLgimg"
                                />
                            </td>
                            <td className="widgetLgRate">Sổ tay ST 12</td>
                            <td className="widgetLgCate">Văn phòng phẩm</td>
                            <td className="widgetLgPrice">75.000 đ</td>
                            <td className="widgetLgRevi">23</td>
                            <td className="widgetLgStock"><i>hết hàng</i></td>
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
                                    src="././assets/images/hhp5.png"
                                    alt=""
                                    className="widgetLgimg"
                                />
                            </td>
                            <td className="widgetLgRate">Thắt lưng TL 90</td>
                            <td className="widgetLgCate">Phụ kiện thời trang</td>
                            <td className="widgetLgPrice">201.000 đ</td>
                            <td className="widgetLgRevi">87</td>
                            <td className="widgetLgStock"><i>hết hàng</i></td>
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
