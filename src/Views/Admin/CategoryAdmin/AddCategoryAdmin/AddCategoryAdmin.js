import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Row, Spinner } from 'react-bootstrap'
import SweetAlert from 'react-bootstrap-sweetalert'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { postAddCategory } from '../../../../Redux/features/categorySlice'
import DashboardAdmin from '../../DashboardAdmin/DashboardAdmin'
import style from './AddCategoryAdmin.module.css'

const AddCategoryAdmin = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [StatusAlert, setStatusAlert] = useState({ success: false, failed: false })
    const [InputForm, setInputForm] = useState({ name: "", image: "" })
    const { isLoading, isSuccess, isError, dataAddCategory } = useSelector(state => state.categoryReducer)

    useEffect(() => {
        if (isSuccess) {
            if (dataAddCategory) {
                if (dataAddCategory.status == 201) {
                    setStatusAlert({ success: true })
                }
            }
        }
    }, [isSuccess, dataAddCategory])

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (InputForm.name && InputForm.image) {
            await dispatch(postAddCategory({ name: InputForm.name, image: InputForm.image }))
        }
    }

    return (
        <DashboardAdmin menu="category">
            {StatusAlert.success ? <SweetAlert success title="Kategori Ditambahkan!" confirmBtnBsStyle={'dark'} onConfirm={() => navigate("/admin/category/list")}></SweetAlert> : null}
            <Row className={'m-0 ' + style.box_temp}>
                <Col xs={12} className='mt-3'>
                    <b style={{ fontSize: "1.25rem" }}>Tambah Kategori</b>
                    <hr className="mt-2 mb-2" />
                </Col>
                <Col xs={12} className="p-0">
                    <Row className={'m-0'}>
                        <Col xs={12} className='mt-3 mb-3'>
                            <div>
                                <Form className={'d-grid gap w-100'} onSubmit={handleSubmit}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Nama Kategori <span style={{ color: "red" }}>*</span></Form.Label>
                                        <Form.Control type="text" onChange={(e) => setInputForm({ ...InputForm, name: e.target.value })} />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Upload Gambar <span style={{ color: "red" }}>*</span></Form.Label>
                                        <Form.Control type="file" onChange={(e) => setInputForm({ ...InputForm, image: e.target.files[0] })} />
                                    </Form.Group>
                                    <div className="d-flex gap-2 justify-content-end">
                                        {isLoading ?
                                            <Button variant="dark" disabled><Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" /> Loading...</Button>
                                            :
                                            InputForm.name && InputForm.image ? <Button className="mt-2" variant="dark" type="submit">Simpan</Button> : <Button className="mt-2" variant="dark" type="submit" disabled>Simpan</Button>
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

export default AddCategoryAdmin