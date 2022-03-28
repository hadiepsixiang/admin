import React from 'react'
import "./style.css"
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from "recharts";

const data = [
    {
        name: "Jan",
        rev: 323.5,
    },
    {
        name: "Feb",
        rev: 278.0,
    },
    {
        name: "Mar",
        rev: 350.2,
    },
    {
        name: "Apr",
        rev: 432.6,
    },
    {
        name: "May",
        rev: 321.7,
    },
    {
        name: "Jun",
        rev: 683.2,
    },
    {
        name: "Jul",
        rev: 456.4,
    },
    {
        name: "Aug",
        rev: 878.3,
    },
    {
        name: "Sep",
        rev: 928.4,
    },
    {
        name: "Oct",
        rev: 565.0,
    },
    {
        name: "Nov",
        rev: 854.5,
    },
    {
        name: "Dec",
        rev: 881.9,
    },
];

export default function chart_rev() {
    return (
        <div className="revenue">
            <div className="choose-select">
                <div>
                    <h2 className="db-text01">Doanh thu</h2>
                    <h6 className="db-text">(đv: trăm triệu)</h6>
                </div>
                <div class="form-group">
                    <select class="form-control">
                        <option value=""> Tuần trước</option>
                        <option value=""> Tháng trước</option>
                        <option value=""> 6 tháng trước</option>
                        <option value=""> 1 năm trước</option>
                    </select>
                </div>
            </div>
            <div className="chart02">
                <LineChart
                    width={843.15}
                    height={310}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line
                        type="monotone"
                        dataKey="rev"
                        stroke="#E95324"
                    />
                </LineChart>
            </div>

        </div>
    )
}