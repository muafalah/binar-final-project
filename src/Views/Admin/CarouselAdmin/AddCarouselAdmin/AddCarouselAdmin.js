import React from 'react'
import DashboardAdmin from '../../DashboardAdmin/DashboardAdmin'
import Select from 'react-select'
import { Button, Col, Form, Row } from 'react-bootstrap'
import style from './AddCarouselAdmin.module.css'


    const selectTheme = (theme) => ({ ...theme, colors: { ...theme.colors, primary25: '#E6E6E6', primary: '#1E1E1E', neutral20: '#ced4da' }, })

const AddCarouselAdmin = () => {
    return (
        <DashboardAdmin menu="carousel">
             <Row className={'m-0 ' + style.box_temp}>
                <Col xs={12} className='mt-3'>
                    <b style={{ fontSize: "1.25rem" }}>Add Carousel</b>
                    <hr className="mt-2 mb-2" />
                </Col>
                <Col xs={12} className="p-0">
                    <Row className={'m-0'}>
                        <Col xs={12} className='mt-3 mb-3'>
                            <div>
                                <Form className={'d-grid gap w-100'}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>ID Carousel <span style={{ color: "red" }}>*</span></Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Nama <span style={{ color: "red" }}>*</span></Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Gambar <span style={{ color: "red" }}>*</span></Form.Label>
                                        <Form.Control as="textarea" />
                                    </Form.Group>
                                    <div className="d-flex gap-2 justify-content-end">
                                        <Button className="mt-2" variant="outline-dark" type="submit">Reset</Button>
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



export default AddCarouselAdmin