import React from 'react'
import "./style.css"
import PlOrders from '../../Components/pl_orders/index'
import WConfirm from '../../Components/w_confirm/index'

export default function Orders() {
    return (
        <div className="orders-page">
            <PlOrders />
            <WConfirm />
        </div>
    )
}
