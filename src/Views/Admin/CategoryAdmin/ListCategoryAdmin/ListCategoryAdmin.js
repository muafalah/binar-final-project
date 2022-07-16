import React from 'react'
import { Button, Col, Row, Table, } from 'react-bootstrap'
import { PencilSquare, PlusLg, Trash } from 'react-bootstrap-icons'
import { dataCategory } from '../../../DataDummy'
import DashboardAdmin from '../../DashboardAdmin/DashboardAdmin'
import style from './ListCategoryAdmin.module.css'

const ListCategoryAdmin = () => {
    return (
        <DashboardAdmin menu="category">
            <Row className="m-0 gap-3">
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
                            {dataCategory?.map((value, index) => {
                                return (
                                    <tr>
                                        <td className="text-center">{index + 1}</td>
                                        <td>{value.name}</td>
                                        <td className="text-center"><img src={value.image} alt={value.name} width="70rem" /></td>
                                        <td className={'text-center ' + style.width_table}>
                                            <Button size="sm" variant="success" href={'/admin/category/edit/' + value.id_category}><PencilSquare className='me-2' size={14} />Edit</Button>
                                        </td>
                                        <td className={'text-center ' + style.width_table}>
                                            <Button size="sm" variant="outline-danger"><Trash className='my-auto me-2' size={14} />Hapus</Button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </DashboardAdmin>
    )
}

export default ListCategoryAdmin