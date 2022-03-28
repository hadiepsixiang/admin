import React from 'react'
import "./style.css"

export default function Dashboard() {
    return (
        <div className="dashboard-pages">
            <div className="dashboard-form">
                <div className="list-task">
                    <div class="listtext">
                        <h2 className="db-subtext">Danh sách công việc cần làm</h2>
                        <div className="jobtask">
                            <div className="jobtask_01">
                                <div className="listnum">23</div>
                                <span>Đơn chờ xác nhận</span>
                            </div>
                            <div className="jobtask_01">
                                <div className="listnum">43</div>
                                <span>Đơn chờ lấy hàng</span>
                            </div>
                            <div className="jobtask_01">
                                <div className="listnum">06</div>
                                <span>Đơn hủy</span>
                            </div>
                            <div className="jobtask_01">
                                <div className="listnum">03</div>
                                <span>Yêu cầu hoàn trả</span>
                            </div>
                            <div className="jobtask_01">
                                <div className="listnum">10</div>
                                <span>Sản phẩm hết hàng</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="activity">
                    <div className="adchart">
                        <div className="ac-chart">
                            <h2 className="db-subtext">Hoạt động</h2>
                            
                        </div>
                        <div>
                        <div className="cc-chart">
                            <img src="././assets/images/cc-chart1.png" alt="" />
                        </div>
                        <div className="cc-chart">
                        <img src="././assets/images/cc-chart2.png" alt="" />

                        </div>
                        </div>
                    </div>
                </div>
                <div className="revenue">
                    <div>
                    <h2 className="db-subtext">Doanh thu</h2>

                    </div>

                </div>
                <div className="bsproducts">
                    <div>
                    <h2 className="db-subtext">Sản phẩm bán chạy nhất</h2>

                    </div>

                </div>
            </div>
        </div>
    )
}
