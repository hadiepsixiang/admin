import React from 'react'
import "./style.css"
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";

const data = [
    {
        name: "Mon",
        accesstimes: 95,
        orders: 23,
    },
    {
        name: "Tue",
        accesstimes: 64,
        orders: 33,
    },
    {
        name: "Wed",
        accesstimes: 83,
        orders: 30,
    },
    {
        name: "Thu",
        accesstimes: 72,
        orders: 18,
    },
    {
        name: "Fri",
        accesstimes: 106,
        orders: 38,
    },
    {
        name: "Sat",
        accesstimes: 131,
        orders: 63,
    },
    {
        name: "Sun",
        accesstimes: 118,
        orders: 43,
    }
];

export default function chart_act() {
    return (
        <div className="activity">
            <div className="adchart">
                <div className="ac-chart">
                    <h2 className="db-subtext">Hoạt động</h2>
                    <div className="chart01">
                        <BarChart
                            width={623.35}
                            height={319.3}
                            data={data}
                        >
                            <CartesianGrid strokeDasharray="6 6" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="accesstimes" fill="#E95324" border-radius='15px' />
                            <Bar dataKey="orders" fill="#376CE0" />
                        </BarChart>
                    </div>
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
    )
}
