import React from 'react'
import "./style.css"
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom'

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'title', headerName: 'Tiêu đề', width: 260 },
    { field: 'cate', headerName: 'Danh mục', width: 260 },
    {
        field: 'time',
        headerName: 'Thời gian đăng',
        width: 160,
        type: 'datetime',
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
    { id: 1, title: 'Cách trang trí nội thất theo hướng tối giản', cate: 'Trang trí nội thất', time: '28/03/2022' },
    { id: 2, title: 'Cách dán màn hình điện thoại đơn giản', cate: 'Phụ kiện điện thoại', time: '25/03/2022' },
    { id: 3, title: 'Cách phối đồ với phụ kiện sang trọng', cate: 'Phụ kiện thời trang', time: '23/03/2022' },
    { id: 4, title: 'Cách chọn mua đồ dùng học tập', cate: 'Văn phòng phẩm', time: '22/03/2022' },
    { id: 5, title: 'Ý nghĩa của quà tặng vào những ngày đặc biệt', cate: 'Quà tặng', time: '01/03/2022' },
    { id: 6, title: 'Cách trang trí phòng ngủ ấm cúng, đơn giản', cate: 'Trang trí nội thất', time: '21/03/2022' },
    { id: 7, title: 'Hướng dẫn đo size nhẫn chuẩn nhất', cate: 'Phụ kiện thời trang', time: '14/02/2022' },
    { id: 8, title: 'Ý nghĩa việc tặng quà cho người thân', cate: 'Quà tặng', time: '11/02/2022' },
    { id: 9, title: 'Cách chọn bàn học làm phù hợp cho phòng', cate: 'Trang trí nội thất', time: '18/01/2022' },
    { id: 10, title: 'Mách bạn cách chọn đèn ngủ đẹp lung linh', cate: 'Trang trí nội thất', time: '05/01/2022' },
    { id: 11, title: 'Ý tưởng trang trí phòng ngủ đẹp dễ thương', cate: 'Trang trí nội thất', time: '15/12/2021' },
    { id: 12, title: 'Trang trí phòng ngủ theo phong cách vintage', cate: 'Trang trí nội thất', time: '01/12/2021' },
];
export default function bloglist() {
    return (
        <div className="Blogs-page">
            <div className="bl_sth">
                <h2 className="db-text02">50 bài viết</h2>
                <Link to={'/blog_edit'} >
                    <div className="btn-primary">
                        <img className="icon_03" src="././assets/images/plus.svg" alt="" />
                        <p className="text_03">Thêm bài viết</p>
                    </div>
                </Link>
            </div>
            <div className="blogform">
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
        </div>
    )
}
