import Aos from 'aos'
import React, { useEffect, useState } from 'react'
import { Button, Col, Row, Spinner, Table, } from 'react-bootstrap'
import { PencilSquare, PlusLg, Trash } from 'react-bootstrap-icons'
import SweetAlert from 'react-bootstrap-sweetalert'
import { useDispatch, useSelector } from 'react-redux'
import { delRemoveCategory, getAllCategory } from '../../../../Redux/features/categorySlice'
import DashboardAdmin from '../../DashboardAdmin/DashboardAdmin'
import style from './ListCategoryAdmin.module.css'

const ListCategoryAdmin = () => {

    const dispatch = useDispatch()
    const [Load, setLoad] = useState(false)
    const [RemoveCategory, setRemoveCategory] = useState({ alert: false, success: false, failed: false, idCategory: 0 })
    const { isLoading, isSuccess, isError, dataAllCategory, dataRemoveCategory } = useSelector(state => state.categoryReducer)

    useEffect(() => {
        if (isSuccess) {
            if (dataRemoveCategory) {
                if (dataRemoveCategory.status == 200) {
                    setLoad(false)
                    setRemoveCategory({ success: true })
                }
            }
        }
    }, [isSuccess, dataRemoveCategory])

    useEffect(() => {
        dispatch(getAllCategory())
        Aos.init({ duration: 1800 })
    }, [])

    const handleRemoveCategory = async (e) => {
        if (RemoveCategory.idCategory) {
            setLoad(true)
            await dispatch(delRemoveCategory({ idCategory: RemoveCategory.idCategory }))
        }
    }

    return (
        dataAllCategory ?
            <DashboardAdmin menu="category">
                {RemoveCategory.alert ? <SweetAlert danger showCancel confirmBtnText="Hapus" cancelBtnText="Batal" confirmBtnBsStyle="danger" cancelBtnBsStyle="outline-secondary" title="Apakah Kamu Yakin?" onConfirm={handleRemoveCategory} onCancel={() => setRemoveCategory({ ...RemoveCategory, alert: false })}>Kategori yang sudah dihapus tidak akan bisa dikembalikan lagi!</SweetAlert> : null}
                {Load ? <SweetAlert title="" onConfirm={handleRemoveCategory} confirmBtnText="" confirmBtnStyle={{ display: "none" }}><Spinner animation="border" size="lg" /></SweetAlert> : RemoveCategory.success ? <SweetAlert success title="Kategori Dihapus!" confirmBtnBsStyle={'dark'} onConfirm={() => window.location.reload()}></SweetAlert> : null}
                <Row className={'m-0 gap-3 p-3 ' + style.box_temp} data-aos="fade-up">
                    <Col xs={12} className="p-0">
                        <div className='d-flex'>
                            <div className='w-100 my-auto'><b style={{ fontSize: "1.25rem" }}>Kategori</b></div>
                            <div className='w-100 my-auto text-end'><Button size="sm" variant="dark" href="/admin/category/add"><PlusLg className='my-auto me-2' size={16} />Tambah Kategori</Button></div>
                        </div>
                        <hr className="mt-2 mb-1" />
                    </Col>
                    <Col xs={12} className="p-0">
                        <Table striped bordered hover responsive>
                            <thead>
                                <tr>
                                    <th className='text-center'>No</th>
                                    <th>Nama Kategori</th>
                                    <th className='text-center'>Gambar</th>
                                    <th colSpan={2} className='text-center'>Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {dataAllCategory.data?.map((value, index) => {
                                    return (
                                        <tr key={index}>
                                            <td className="text-center">{index + 1}</td>
                                            <td>{value.categoryName}</td>
                                            <td className="text-center"><img src={value.image} alt={value.categoryName} width="70rem" /></td>
                                            <td className={'text-center ' + style.width_table}>
                                                <Button size="sm" variant="success" href={'/admin/category/edit/' + value.categoryId}><PencilSquare className='me-2' size={14} />Edit</Button>
                                            </td>
                                            <td className={'text-center ' + style.width_table}>
                                                <Button size="sm" variant="outline-danger" value={value.categoryId} onClick={(e) => setRemoveCategory({ ...RemoveCategory, alert: true, idCategory: e.target.value })}><Trash className='my-auto me-2' size={14} />Hapus</Button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </DashboardAdmin>
            : null
    )
}

export default ListCategoryAdmin