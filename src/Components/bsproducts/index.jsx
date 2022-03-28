import React from 'react'
import "./style.css"

export default function bSproducts() {
    return (
        <div className="bsproducts">
            <div>
                <h2 className="db-subtext">Sản phẩm bán chạy nhất</h2>
                <div className="widgetLg">
                    <table className="widgetLgTable">
                        <tr className="widgetLgTr">
                            <th className="widgetLgTh">Sản phẩm</th>
                            <th className="widgetLgTh">Tên sản phẩm</th>
                            <th className="widgetLgTh">Giá</th>
                            <th className="widgetLgTh">Doanh số</th>
                            <th className="widgetLgTh">Kho</th>

                        </tr>
                        <tr className="widgetLgTr">
                            <td className="widgetLgImage">
                                <img
                                    src="././assets/images/Sp1.png"
                                    alt=""
                                    className="widgetLgImg"
                                />
                            </td>
                            <td className="widgetLgName">Ốp điện thoại OP 100</td>
                            <td className="widgetLgAmount">25.000 đ</td>
                            <td className="widgetLgRev">125</td>
                            <td className="widgetLgStock">45</td>
                        </tr>
                        <tr className="widgetLgTr">
                            <td className="widgetLgUser">
                                <img
                                    src="././assets/images/Sp2.png"
                                    alt=""
                                    className="widgetLgImg"
                                />
                            </td>
                            <td className="widgetLgDate">Sổ tay Roy A5 YYDL </td>
                            <td className="widgetLgAmount">28.000 đ</td>
                            <td className="widgetLgRev">118</td>
                            <td className="widgetLgStock">08</td>
                        </tr>
                        <tr className="widgetLgTr">
                            <td className="widgetLgUser">
                                <img
                                    src="././assets/images/Sp3.png"
                                    alt=""
                                    className="widgetLgImg"
                                />
                            </td>
                            <td className="widgetLgDate">Lắc tay LT 620 </td>
                            <td className="widgetLgAmount">125.000 đ</td>
                            <td className="widgetLgRev">98</td>
                            <td className="widgetLgStock">16</td>
                        </tr>
                        <tr className="widgetLgTr">
                            <td className="widgetLgUser">
                                <img
                                    src="././assets/images/Sp4.png"
                                    alt=""
                                    className="widgetLgImg"
                                />
                            </td>
                            <td className="widgetLgDate">Balo BL 100 </td>
                            <td className="widgetLgAmount">175.000 đ</td>
                            <td className="widgetLgRev">86</td>
                            <td className="widgetLgStock">24</td>
                        </tr>
                        <tr className="widgetLgTr">
                            <td className="widgetLgUser">
                                <img
                                    src="././assets/images/Sp5.png"
                                    alt=""
                                    className="widgetLgImg"
                                />
                            </td>
                            <td className="widgetLgDate">Ốp điện thoại OP 28 </td>
                            <td className="widgetLgAmount">21.000 đ</td>
                            <td className="widgetLgRev">84</td>
                            <td className="widgetLgStock">52</td>
                        </tr>
                    </table>
                </div>
            </div>

        </div>
    )
}
