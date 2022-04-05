import React from 'react'
import "./style.css"

export default function Cc_detail() {
    return (
        <div className="cc-detail">
            <div className="or_stt">
                <div >
                    <h2 className="db-text02">Trạng thái đơn hàng:</h2>
                    <h2 className="db-text02">Đã hủy</h2>
                </div>

                <div className="stt_detail">
                    <p>Mã đơn hàng: </p>
                    <p>DG20220703001</p>
                </div>
                <div className="stt_detail">
                    <p>Được hủy bởi:  </p>
                    <p>Dieptu529  </p>
                </div>

            </div>
            <div className="or_history">
                <div >
                    <h2 className="db-text02">Lịch sử mua hàng của người mua </h2>
                </div>

                <div className="stt_detail">
                    <p>Số đơn đã đặt: </p>
                    <p className="stt_num">04</p>
                </div>
                <div className="stt_detail">
                    <p>Tỉ lệ giao hàng thành công: </p>
                    <p>100% </p>
                </div>

            </div>
            <div className="info_line">
                <div >
                    <h2 className="db-text02">Thông tin đơn hàng </h2>
                </div>
                <div className="stt_detail">
                    <p>Thời gian đặt hàng: </p>
                    <p>23/02/2022 </p>
                    <p className="stt_time">21:28</p>
                </div>
                <div className="stt_detail">
                    <p>Thời gian hủy đơn: </p>
                    <p className="stt_time1">24/02/2022</p>
                    <p className="stt_time">09:21 </p>
                </div>
                <div className="stt_detail">
                    <p>Địa chỉ nhận hàng: </p>
                    <div className="info_line1">
                        <p>Phương Dung </p>
                        <p>(+84) 835478241 </p>
                        <p>17T8 Trung Hòa Nhân Chính </p>
                        <p>Phường Nhân Chính  </p>
                        <p>Quận Thanh Xuân </p>
                        <p>Hà Nội</p>
                    </div>
                </div>
                <div className="stt_detail">
                    <p>Sản phẩm: </p>
                    <div className="info_line2">
                        <img src="././assets/images/chp2.png" alt="" />
                        <div>
                            <h5>Sổ tay Roy A5 YYDL </h5>
                            <p>Phân loại: sổ còng WY </p>
                            <p>Số lượng: 03  </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="info_pay">
                <div >
                    <h2 className="db-text02">Thông tin thanh toán </h2>
                </div>
                <table className="widgetLgTable">
                    <tr className="widgetLgTr">
                        <th className="widgetLgTh">Hình ảnh</th>
                        <th className="widgetLgTh">Tên sản phẩm</th>
                        <th className="widgetLgTh">Giá</th>
                        <th className="widgetLgTh">Số lượng</th>
                        <th className="widgetLgTh">Thành tiền</th>
                    </tr>
                    <tr className="widgetLgTr">
                        <td className="widgetLgSP">
                            <img
                                src="././assets/images/chp1.png"
                                alt=""
                                className="widgetLgimg"
                            />
                        </td>
                        <td className="widgetLgRate">Sổ tay Roy A5 YYDL </td>
                        <td className="widgetLgPrice">28.000 đ</td>
                        <td className="widgetLgRevi">03</td>
                        <td className="widgetLgStock">84.000 đ</td>
                    </tr>
                </table>
                <div>
                    <div className="widget">
                        <div className="stt_detail">
                            <p>Giá sản phẩm:  </p>
                            <p className="stt_num1">84.000 đ </p>
                        </div>
                        <div className="stt_detail">
                            <p>Phí vận chuyển:  </p>
                            <p className="stt_num">25.000 đ </p>
                        </div>
                        <div className="stt_detail">
                            <p>Mã giảm giá:   </p>
                            <p className="stt_num2">10.000 đ </p>
                        </div>
                    </div>
                    <div className="widget1">
                        <h3>Tổng tiền:  </h3>
                        <h3 className="stt_num3">99.000 đ </h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
