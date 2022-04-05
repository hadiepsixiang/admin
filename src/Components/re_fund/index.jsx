import React from 'react'
import "./style.css"

export default function Yc_tra() {
    return (
        <div className="wc_form">
            <div className="hh_sth">
                <h2 className="db-text04">05 đơn hàng</h2>
            </div>
            <div className="hhp-form">
                <div className="widgetLg">
                    <table className="widgetLgTable">
                        <tr className="widgetLgTr">
                            <th className="widgetLgTh">Mã đơn hàng</th>
                            <th className="widgetLgTh">Sản phẩm</th>
                            <th className="widgetLgTh">Tổng tiền</th>
                            <th className="widgetLgTh">Vận chuyển</th>
                            <th className="widgetLgTh">Trạng thái</th>
                        </tr>
                        <tr className="widgetLgTr">
                            <td className="widgetLgRate">DG20220703001</td>
                            <td className="widgetLgSP">
                                <img
                                    src="././assets/images/chp1.png"
                                    alt=""
                                    className="widgetLgimg"
                                />
                                <div>
                                    <h3>Ốp điện thoại OP 100 </h3>
                                    <p>Phân loại: nâu bear, IP 11</p>
                                    <p>Số lượng: 02 </p>
                                </div>
                            </td>
                            <td className="widgetLgPrice">75.000 đ</td>
                            <td className="widgetLgCate">84VN07032000</td>
                            <td className="widgetLgAct">
                                <i>Chờ khách</i>
                                <div></div>
                                <i>gửi trả hàng</i>
                            </td>
                        </tr>
                        <tr className="widgetLgTr">
                            <td className="widgetLgRate">DG20220703002</td>
                            <td className="widgetLgSP">
                                <img
                                    src="././assets/images/chp2.png"
                                    alt=""
                                    className="widgetLgimg"
                                />
                                <div>
                                    <h3>Sổ tay Roy A5 YYDL  </h3>
                                    <p>Phân loại: sổ còng WY </p>
                                    <p>Số lượng: 03 </p>
                                </div>
                            </td>
                            <td className="widgetLgPrice">99.000 đ</td>
                            <td className="widgetLgCate">84VN07032001 </td>
                            <td className="widgetLgAct">
                                <i>Chờ khách</i>
                                <div></div>
                                <i>gửi trả hàng</i>
                            </td>
                        </tr>
                        <tr className="widgetLgTr">
                            <td className="widgetLgRate">DG20220703003</td>
                            <td className="widgetLgSP">
                                <img
                                    src="././assets/images/chp3.png"
                                    alt=""
                                    className="widgetLgimg"
                                />
                                <div>
                                    <h3>Lắc tay LT 620  </h3>
                                    <p></p>
                                    <p>Số lượng: 01 </p>
                                </div>
                            </td>
                            <td className="widgetLgPrice">140.000 đ</td>
                            <td className="widgetLgCate">84VN07032002 </td>
                            <td className="widgetLgAct">
                                <i>Chờ khách</i>
                                <div></div>
                                <i>gửi trả hàng</i>
                            </td>
                        </tr>
                        <tr className="widgetLgTr">
                            <td className="widgetLgRate">DG20220703004</td>
                            <td className="widgetLgSP">
                                <img
                                    src="././assets/images/chp4.png"
                                    alt=""
                                    className="widgetLgimg"
                                />
                                <div>
                                    <h3>Balo BL 100 </h3>
                                    <p></p>
                                    <p>Số lượng: 01 </p>
                                </div>
                            </td>
                            <td className="widgetLgPrice">190.000 đ</td>
                            <td className="widgetLgCate">84VN07032003</td>
                            <td className="widgetLgAct">
                                <i>Hoàn thành</i>
                            </td>
                        </tr>
                        <tr className="widgetLgTr">
                            <td className="widgetLgRate">DG20220703005</td>
                            <td className="widgetLgSP1">
                                <div className="widgetLgSP">
                                    <img
                                        src="././assets/images/chp6.png"
                                        alt=""
                                        className="widgetLgimg"
                                    />
                                    <div>
                                        <h3>Ốp điện thoại OP 28 </h3>
                                        <p>Phân loại: Smile, IP 11 </p>
                                        <p>Số lượng: 01 </p>
                                    </div>
                                </div>
                                <div className="widgetLgSP">
                                    <img
                                        src="././assets/images/chp5.png"
                                        alt=""
                                        className="widgetLgimg"
                                    />
                                    <div>
                                        <h3>Ốp điện thoại OP 28 </h3>
                                        <p>Phân loại: Bear, IP 11 </p>
                                        <p>Số lượng: 01 </p>
                                    </div>
                                </div>
                            </td>
                            <td className="widgetLgPrice">55.000 đ</td>
                            <td className="widgetLgCate">84VN07032004</td>
                            <td className="widgetLgAct">
                                <i>Hoàn thành</i>

                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}
