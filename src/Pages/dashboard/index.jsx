import React from 'react'
import "./style.css"
import Listtask from '../../Components/listtask/index'
import ChartAct from '../../Components/chart_act/index'
import ChartRev from '../../Components/chart_rev/index'
import Bsproducts from '../../Components/bsproducts/index'

export default function Dashboard() {
    return (
        <div className="dashboard-pages">
            <div className="dashboard-form">
                <Listtask />
                <ChartAct />
                <ChartRev />
                <Bsproducts />
            </div>
        </div>
    )
}
