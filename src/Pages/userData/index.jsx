import React from 'react'
import "./style.css"
import { DataGrid } from '@mui/x-data-grid';



const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'username', headerName: 'Tên đăng nhập', width: 200 },
    { field: 'email', headerName: 'Email', width: 260 },
    {
        field: 'status',
        headerName: 'Trạng thái',
        width: 160,
        renderCell: (params) => {
            return (
                <div className="userSt">
                    {params.row.status}
                </div>
            )
        }
    },
    {
        field: 'action',
        headerName: 'Thao tác',
        width: 160,
        renderCell: (params) => {
            return (
                <div >
                    <img className="userEdit" src="././assets/images/edit.svg" />
                    <img className="userDel" src="././assets/images/trash-2.svg" />
                </div>
            )
        }
    }
];
const row = [
    { id: 1, username: 'admin01', email: 'dungvu1404@gmail.com', status: 'admin' },
    { id: 2, username: 'admin02', email: 'nhatdiepchithu@gmail.com', status: 'admin' },
    { id: 3, username: 'huongnguyen2003', email: 'huong2003@gmail.com', status: 'user' },
    { id: 4, username: 'vannt2000', email: 'vannt2000@gmail.com', status: 'user' },
    { id: 5, username: 'admin03', email: 'lananh123@gmail.com', status: 'admin' },
    { id: 6, username: 'lanng678', email: 'lanng678@gmail.com', status: 'user' },
    { id: 7, username: 'hoalan120', email: 'hoalan120@gmail.com', status: 'user' },
    { id: 8, username: 'vyanh123', email: 'vyanh890@gmail.com', status: 'user' },
    { id: 9, username: 'huongnguyen2003', email: 'huongnguyen2003@gmail.com', status: 'user' },
    { id: 10, username: 'vannt2000', email: 'vannt2000@gmail.com', status: 'user' },
    { id: 11, username: 'lanng678', email: 'lanng678@gmail.com', status: 'user' },
    { id: 12, username: 'hoalan120', email: 'hoalan120@gmail.com', status: 'user' },
    { id: 13, username: 'vyanh123', email: 'vyanh123@gmail.com', status: 'user' },
  ];
export default function userData() {
    return (
        <div className="userList">
            <div style={{ height: 550, width: '100%' }}>
                <DataGrid
                    rows={row} disableSelectionOnClick 
                    columns={columns}
                    pageSize={8}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                />
            </div>
        </div>
    )
}
