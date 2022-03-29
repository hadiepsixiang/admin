import React from 'react'
import "./style.css"
import { Link } from 'react-router-dom'


export default function topbar() {
    return (
        <div className="nav-bar">
            <div className="nav-form">
                <div>
                    <div className="up">
                        <Link to={'/'} >
                        <img className="logo_1" src="././assets/images/logo.png" alt="" />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="top-form">
                <div>
                    <p className="admintitle">Báo cáo thống kê </p>
                </div>
            </div>
        </div>
    )
}


