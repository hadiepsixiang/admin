import React from 'react'
import "./style.css"


export default function rateList() {
    return (
        <div className="Rates-page">
            <div className="rates-thing">
                <div className="wrap">
                    <h6 className="db-text02">Tất cả</h6>
                </div>
                <div className="wrap1">
                    <h6 className="db-text03">5 sao</h6>
                </div>
                <div className="wrap1">
                    <h6 className="db-text03">4 sao</h6>
                </div>
                <div className="wrap1">
                    <h6 className="db-text03">3 sao</h6>
                </div>
                <div className="wrap1">
                    <h6 className="db-text03">2 sao</h6>
                </div>
                <div className="wrap1">
                    <h6 className="db-text03">1 sao</h6>
                </div>
            </div>
            <div className="rate-form">
                <div className="widgetLg">
                    <table className="widgetLgTable">
                        <tr className="widgetLgTr">
                            <th className="widgetLgTh">Hình ảnh</th>
                            <th className="widgetLgTh">Tên sản phẩm</th>
                            <th className="widgetLgTh">Đánh giá người mua</th>
                        </tr>
                        <tr className="widgetLgTr">
                            <td className="widgetLgSP">
                                <img
                                    src="././assets/images/rate1.png"
                                    alt=""
                                    className="widgetLgimg"
                                />
                            </td>
                            <td className="widgetLgRate">Ốp điện thoại OP 100</td>
                            <td className="widgetLgRate">
                                <div>
                                    <div className="rate1">
                                        <img src="././assets/images/avt_rate1.png" alt="" className="" />
                                        <span>x****n</span>
                                    </div>
                                    <div className="rate1_1">
                                        <img src="././assets/images/5sao.png" alt="" className="" />
                                    </div>
                                    <p>2022-01-06</p>
                                    <p>Ốp điện thoại đẹp, kiểu dáng giống mẫu, ủng hộ shop</p>
                                    <div className="rate1_2">
                                        <img src="././assets/images/rate1_1.png" alt="" className="" />
                                        <img src="././assets/images/rate1_2.png" alt="" className="" />
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <div></div>
                        <tr className="widgetLgTr">
                            <td className="widgetLgSP">
                                <img
                                    src="././assets/images/rate2.png"
                                    alt=""
                                    className="widgetLgimg"
                                />
                            </td>
                            <td className="widgetLgRate">Nhẫn bạc NB 86</td>
                            <td className="widgetLgRate">
                                <div>
                                    <div className="rate1">
                                        <img src="././assets/images/avt_rate2.png" alt="" className="" />
                                        <span>c****x</span>
                                    </div>
                                    <div className="rate1_1">
                                        <img src="././assets/images/4_5sao.png" alt="" className="" />
                                    </div>
                                    <p>2022-01-10</p>
                                    <p>Nhẫn xinh lấp lánh luôn, chưa đo kĩ nên hơi chật một chút</p>
                                    <div className="rate1_2">
                                        <img src="././assets/images/rate2_1.png" alt="" className="" />
                                        <img src="././assets/images/rate2_1.png" alt="" className="" />
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <div></div>
                        <tr className="widgetLgTr">
                            <td className="widgetLgSP">
                                <img
                                    src="././assets/images/rate3.png"
                                    alt=""
                                    className="widgetLgimg"
                                />
                            </td>
                            <td className="widgetLgRate">Lắc tay LT 620 </td>
                            <td className="widgetLgRate">
                                <div>
                                    <div className="rate1">
                                        <img src="././assets/images/avt_rate3.png" alt="" className="" />
                                        <span>t****g</span>
                                    </div>
                                    <div className="rate1_1">
                                        <img src="././assets/images/4sao.png" alt="" className="" />
                                    </div>
                                    <p>2022-01-10</p>
                                    <p>Lắc tay xinh lắm luôn, hơi rộng 1 xíu nhưng vẫn đẹp</p>
                                    <div className="rate1_2">
                                        <img src="././assets/images/rate3_1.png" alt="" className="" />
                                        <img src="././assets/images/rate3_2.png" alt="" className="" />
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <div className="rates_num"> 1 2 3 4 5</div>
                    </table>
                </div>
            </div>

        </div>
    )
}