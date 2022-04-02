import React from 'react'
import "./style.css"
import Pl_orders from '../../Components/pl_orders/index'
import W_confirm from '../../Components/w_confirm/index'

export default function Orders() {
    return (
        <div className="orders-page">
            <Pl_orders /> 
            <W_confirm />
        </div>
    )
}
