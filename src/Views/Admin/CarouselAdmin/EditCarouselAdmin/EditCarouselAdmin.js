import React, { useEffect, useState } from 'react'
import DashboardAdmin from '../../DashboardAdmin/DashboardAdmin'
import { Button, Col, Form, Row, Spinner } from 'react-bootstrap'
import style from './EditCarouselAdmin.module.css'
import { getDetailCarousel, putEditCarousel } from '../../../../Redux/features/carouselSlice'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Aos from 'aos'
import SweetAlert from 'react-bootstrap-sweetalert'

const EditCarouselAdmin = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { id_carousel } = useParams()
    const [Load, setLoad] = useState(false)
    const [InputName, setInputName] = useState("")
    const [InputLink, setInputLink] = useState("")
    const [InputImage, setInputImage] = useState(null)
    const [StatusSuccess, setStatusSuccess] = useState(false)
    const { dataDetailCarousel, dataEditCarousel } = useSelector(state => state.carouselReducer)

    useEffect(() => {
        dispatch(getDetailCarousel({ idCarousel: id_carousel }))
        Aos.init({ duration: 1800 })
    }, [])

    useEffect(() => {
        if (dataDetailCarousel) {
            setInputName(dataDetailCarousel.data.carouselName)
            setInputLink(dataDetailCarousel.data.link)
        }
    }, [dataDetailCarousel])

    useEffect(() => {
        if (dataEditCarousel) {
            if (dataEditCarousel.status == 200) {
                setLoad(false)
                setStatusSuccess(true)
            }
        }
    }, [dataEditCarousel])

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoad(true)
        await dispatch(putEditCarousel({ idCarousel: id_carousel, name: InputName, link: InputName.link, image: InputImage }))
    }

    const handleConfirm = () => {
        navigate("/admin/carousel/list")
    }

    return (
        <DashboardAdmin menu="carousel">
            {StatusSuccess ? <SweetAlert success title="Carousel Diperbarui!" confirmBtnBsStyle={'dark'} onConfirm={handleConfirm}></SweetAlert> : null}
            {Load ? <SweetAlert title="" confirmBtnStyle={{ display: "none" }} onConfirm={() => null}><Spinner animation="border" size="lg" /></SweetAlert> : null}
            {dataDetailCarousel ?
                <Row className={'m-0 ' + style.box_temp} data-aos="fade-up">
                    <Col xs={12} className='mt-3'>
                        <b style={{ fontSize: "1.25rem" }}>Edit Carousel</b>
                        <hr className="mt-2 mb-2" />
                    </Col>
                    <Col xs={12} className="p-0">
                        <Row className={'m-0'} data-aos="fade-up">
                            <Col xs={12} className='mt-3 mb-3'>
                                <div>
                                    <Form className={'d-grid gap w-100'} onSubmit={handleSubmit}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Nama Carousel <span style={{ color: "red" }}>*</span></Form.Label>
                                            <Form.Control type="text" value={InputName} onChange={(e) => { setInputName(e.target.value) }} />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Link Tujuan <span style={{ color: "red" }}>*</span></Form.Label>
                                            <Form.Control type="text" value={InputLink} onChange={(e) => { setInputLink(e.target.value) }} />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Upload Gambar <span style={{ color: "red" }}>*</span></Form.Label>
                                            <Form.Control type="file" onChange={(e) => { setInputImage(e.target.files[0]) }} />
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
                : null
            }
        </DashboardAdmin>
    )
}

export default EditCarouselAdmin