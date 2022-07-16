import React from 'react'
import DashboardAdmin from '../../DashboardAdmin/DashboardAdmin'
import { Button, Col, Form, Row } from 'react-bootstrap'
import style from './EditCarouselAdmin.module.css'

const EditCarouselAdmin = () => {
    return (
        <DashboardAdmin menu="carousel">
            <Row className={'m-0 ' + style.box_temp}>
                <Col xs={12} className='mt-3'>
                    <b style={{ fontSize: "1.25rem" }}>Edit Carousel</b>
                    <hr className="mt-2 mb-2" />
                </Col>
                <Col xs={12} className="p-0">
                    <Row className={'m-0'}>
                        <Col xs={12} className='mt-3 mb-3'>
                            <div>
                                <Form className={'d-grid gap w-100'}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Nama Kategori <span style={{ color: "red" }}>*</span></Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Link Tujuan <span style={{ color: "red" }}>*</span></Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Upload Gambar <span style={{ color: "red" }}>*</span></Form.Label>
                                        <Form.Control type="file" />
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

export default EditCarouselAdmin