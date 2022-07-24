import Aos from 'aos'
import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Row, Spinner } from 'react-bootstrap'
import SweetAlert from 'react-bootstrap-sweetalert'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { getDetailCategory, putEditCategory } from '../../../../Redux/features/categorySlice'
import DashboardAdmin from '../../DashboardAdmin/DashboardAdmin'
import style from './EditCategoryAdmin.module.css'

const EditCategoryAdmin = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { id_category } = useParams()
    const [Load, setLoad] = useState(false)
    const { isLoading, isSuccess, isError, dataDetailCategory, dataEditCategory } = useSelector(state => state.categoryReducer)
    const [InputName, setInputName] = useState("")
    const [InputImage, setInputImage] = useState(null)
    const [StatusSuccess, setStatusSuccess] = useState(false)

    useEffect(() => {
        dispatch(getDetailCategory({ idCategory: id_category }))
        Aos.init({ duration: 1800 })
    }, [])

    useEffect(() => {
        if (dataDetailCategory) {
            setInputName(dataDetailCategory.data.categoryName)
        }
    }, [dataDetailCategory])

    useEffect(() => {
        if (dataEditCategory) {
            if (dataEditCategory.status == 200) {
                setLoad(false)
                setStatusSuccess(true)
            }
        }
    }, [dataEditCategory])

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoad(true)
        await dispatch(putEditCategory({ idCategory: dataDetailCategory.data.categoryId, name: InputName, image: InputImage }))
    }

    return (
        <DashboardAdmin menu="category">
            {StatusSuccess ? <SweetAlert success title="Kategori Diperbarui!" confirmBtnBsStyle={'dark'} onConfirm={() => navigate("/admin/category/list")}></SweetAlert> : null}
            {Load ? <SweetAlert title="" confirmBtnStyle={{ display: "none" }} onConfirm={() => null}><Spinner animation="border" size="lg" /></SweetAlert> : null}
            {dataDetailCategory ?
                <Row className={'m-0 ' + style.box_temp} data-aos="fade-up">
                    <Col xs={12} className='mt-3'>
                        <b style={{ fontSize: "1.25rem" }}>Edit Carousel</b>
                        <hr className="mt-2 mb-2" />
                    </Col>
                    <Col xs={12} className="p-0">
                        <Row className={'m-0'}>
                            <Col xs={12} className='mt-3 mb-3'>
                                <div>
                                    <Form className={'d-grid gap w-100'} onSubmit={handleSubmit}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Nama Kategori <span style={{ color: "red" }}>*</span></Form.Label>
                                            <Form.Control type="text" value={InputName} onChange={(e) => { setInputName(e.target.value) }} />
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

export default EditCategoryAdmin