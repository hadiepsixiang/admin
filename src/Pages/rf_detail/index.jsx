import React from 'react'
import "./style.css"

export default function Th_order() {
    return (
        <div className="rf-detail">
            <div className="or_stt">
                <div >
                    <h2 className="db-text02">Trạng thái đơn hàng:</h2>
                    <h2 className="db-text02">Chờ người mua gửi hàng</h2>
                </div>

                <div className="stt_detail">
                    <p>Mã đơn hàng: </p>
                    <p>DG20220703001</p>
                </div>
                <div className="stt_detail">
                    <p>Được mua bởi:  </p>
                    <p className="st">Dieptu529  </p>
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
                    <p>Thời gian yêu cầu: </p>
                    <p className="st1">23/02/2022 </p>
                    <p className="stt_time">21:28</p>
                </div>
                <div className="stt_detail">
                    <p>Thời gian xử lý: </p>
                    <p className="stt_time1">24/02/2022</p>
                    <p className="stt_time">09:21 </p>
                </div>
                <div className="stt_detail">
                    <p>Thời gian kết thúc: </p>
                    <p className="st2">Tối đa 8 ngày kể từ thời gian xử lý </p>
                </div>
                <div className="stt_detail">
                    <p>Hình thức hoàn trả: </p>
                    <p className="st3">Trả hàng hoàn tiền</p>
                </div>
                <div className="stt_detail">
                    <p>Tài khoản</p>
                    <div className="info_line1">
                        <p>Ngân hàng TP bank chi nhánh Livebank tự động</p>
                        <p>Số tài khoản 0409 9076 601</p>
                        <p>Người nhận Dung Vũ </p>
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
                    <div className="widget2">
                        <h3>Hoàn trả:  </h3>
                        <h3 className="stt_num3">84.000 đ </h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
