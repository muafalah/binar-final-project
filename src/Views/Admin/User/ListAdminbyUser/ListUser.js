import React from 'react'
import { Button, Col, Row, Table } from 'react-bootstrap'
import { PencilSquare, PlusLg, Trash } from 'react-bootstrap-icons'
import { dataAdminByUser } from '../../../DataDummy'
import DashboardAdmin from '../../DashboardAdmin/DashboardAdmin'
import style from './User.module.css'

function ListUser() {
  return (
    <DashboardAdmin menu="User">
        <Row className='m-0 gap-3'>
            <Col xs={12} className='p-0'>
                <div className='d-flex'>
                    <div className='w-100 my-auto'><b style={{ fontSize: "1.25rem" }}>User</b></div>
                    <div className='w-100 my-auto text-end'><Button size="sm" variant="dark" href='/admin/user/add'><PlusLg className='my-auto me-2' size={16} />Tambah User</Button></div>
                </div>
                <hr className='mt-2 mb-1' />
            </Col>
            <Col xs={12} className='p-0'>
                <Table striped bordered hover reponsive>
                    <thead>
                        <tr>
                            <th className='text-center'>No</th>
                            <th className='text-center'>Foto Profil</th>
                            <th className='text-center'>Nama Lengkap</th>
                            <th className='text-center'>User Name</th>
                            <th className='text-center'>Kota</th>
                            <th colSpan={2} className='text-center'>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataAdminByUser?.map((value, index) => {
                            return (
                                <tr>
                                    <td className="text-center">{index + 1}</td>
                                    <td className='text center'><img src={value.image} alt={value.username} width='65rem' /></td>
                                    <td className='text center'>{value.namalengkap}</td>
                                    <td className='text-center'>{value.username}</td>
                                    <td className='text-center'>{value.kota}</td>
                                    <td className={'text-center ' + style.width_table}>
                                        <Button size="sm" variant="success" href={'/admin/user/edit/' + value.id_category}><PencilSquare className='me-2' size={14} />Edit</Button>
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

export default ListUser