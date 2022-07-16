import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { dataAdmin } from '../../../DataDummy'
import DashboardAdmin from '../../DashboardAdmin/DashboardAdmin'
import style from './EditProfileAdmin.module.css'

const EditProfileAdmin = () => {
    return (
        <DashboardAdmin menu="profile">
            <Row className={'m-0 ' + style.box_temp}>
                <Col xs={12} className='mt-3'>
                    <b style={{ fontSize: "1.25rem" }}>Ubah Profil</b>
                    <hr className="mt-2 mb-2" />
                </Col>
                <Col xs={12} className="p-0">
                    <Row className={'m-0'}>
                        <Col md={4} className='mt-3 mb-3'>
                            <div className={'p-3 ' + style.box_temp}>
                                <div className="d-flex justify-content-center"><img src={dataAdmin.image} alt="photo profile" width="210rem" height="200rem" style={{ borderRadius: "5px", overflow: "auto" }} /></div>
                                <Button className="w-100 mt-3" variant="outline-secondary" type="submit">Pilih Foto</Button>
                            </div>
                        </Col>
                        <Col md={8} className='mt-3 mb-3'>
                            <div>
                                <Form className={'d-grid gap w-100'}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Nama Lengkap <span style={{ color: "red" }}>*</span></Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Email <span style={{ color: "red" }}>*</span></Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Password <span style={{ color: "red" }}>*</span></Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                    <div className="d-flex gap-2 justify-content-end">
                                        <Button className="mt-2" variant="dark" type="submit">Simpan</Button>
                                    </div>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </DashboardAdmin>
    )
}

export default EditProfileAdmin