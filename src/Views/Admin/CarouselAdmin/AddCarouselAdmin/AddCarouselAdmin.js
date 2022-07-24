import React, { useEffect, useState } from 'react'
import DashboardAdmin from '../../DashboardAdmin/DashboardAdmin'
import { Button, Col, Form, Row, Spinner } from 'react-bootstrap'
import style from './AddCarouselAdmin.module.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Aos from 'aos'
import { postAddCarousel } from '../../../../Redux/features/carouselSlice'
import SweetAlert from 'react-bootstrap-sweetalert'

const AddCarouselAdmin = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [StatusAlert, setStatusAlert] = useState({ success: false, failed: false })
    const [InputForm, setInputForm] = useState({ name: "", link: "", image: "" })
    const { isLoading, isSuccess, isError, dataAddCarousel } = useSelector(state => state.carouselReducer)

    useEffect(() => {
        if (isSuccess) {
            if (dataAddCarousel) {
                if (dataAddCarousel.status == 200) {
                    setStatusAlert({ success: true })
                }
            }
        }
        Aos.init({ duration: 1800 })
    }, [isSuccess, dataAddCarousel])

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (InputForm.name && InputForm.image && InputForm.link) {
            await dispatch(postAddCarousel({ name: InputForm.name, link: InputForm.link, image: InputForm.image }))
        }
    }

    return (
        <DashboardAdmin menu="carousel">
            {StatusAlert.success ? <SweetAlert success title="Carousel Ditambahkan!" confirmBtnBsStyle={'dark'} onConfirm={() => navigate("/admin/carousel/list")}></SweetAlert> : null}
            <Row className={'m-0 ' + style.box_temp} data-aos="fade-up">
                <Col xs={12} className='mt-3'>
                    <b style={{ fontSize: "1.25rem" }}>Tambah Carousel</b>
                    <hr className="mt-2 mb-2" />
                </Col>
                <Col xs={12} className="p-0">
                    <Row className={'m-0'}>
                        <Col xs={12} className='mt-3 mb-3'>
                            <div>
                                <Form className={'d-grid gap w-100'} onSubmit={handleSubmit}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Nama Carousel <span style={{ color: "red" }}>*</span></Form.Label>
                                        <Form.Control type="text" onChange={(e) => setInputForm({ ...InputForm, name: e.target.value })} />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Link Tujuan <span style={{ color: "red" }}>*</span></Form.Label>
                                        <Form.Control type="text" onChange={(e) => setInputForm({ ...InputForm, link: e.target.value })} />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Upload Gambar <span style={{ color: "red" }}>*</span></Form.Label>
                                        <Form.Control type="file" onChange={(e) => setInputForm({ ...InputForm, image: e.target.files[0] })} />
                                    </Form.Group>
                                    <div className="d-flex gap-2 justify-content-end">
                                        {isLoading ?
                                            <Button variant="dark" disabled><Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" /> Loading...</Button>
                                            :
                                            InputForm.name && InputForm.image && InputForm.link ? <Button className="mt-2" variant="dark" type="submit">Simpan</Button> : <Button className="mt-2" variant="dark" type="submit" disabled>Simpan</Button>
                                        }
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