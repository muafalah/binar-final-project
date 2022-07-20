import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import { Container, Form, Button, Row, Col, Spinner } from 'react-bootstrap'
import ImageUploader from 'react-image-upload'
import 'react-image-upload/dist/index.css'
import style from './CompleteProfile.module.css'
import NavbarBlank from '../../../Components/Navbar/NavbarBlank/NavbarBlank'
import FooterDefault from '../../../Components/Footer/FooterDefault/FooterDefault'
import { dataCity } from '../../DataDummy'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { putUserEdit } from '../../../Redux/features/authUser'
import SweetAlert from 'react-bootstrap-sweetalert'

const CompleteProfile = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [StatusAlert, setStatusAlert] = useState({ alert: false, invalid: false, success: false })
    const [InputForm, setInputForm] = useState({ image: "", fullname: "", phone: "", city: "", address: "" })
    const { isLoading, isSuccess, isError, dataUserEdit, dataUserVerification } = useSelector(state => state.authUserReducer)

    useEffect(() => {
        if (isSuccess) {
            if (dataUserEdit) {
                if (dataUserEdit.status === 200) {
                    setStatusAlert({ success: true })
                }
            }
        }
    }, [isSuccess, dataUserEdit])

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (InputForm.image && InputForm.fullname && InputForm.phone && InputForm.city && InputForm.address) {
            // await dispatch(putUserEdit({ dataProfile: dataUserVerification.data, image: InputForm.image, fullname: InputForm.fullname, phone: InputForm.phone, city: InputForm.city, address: InputForm.address }))
            console.log(InputForm, "berhasil")
            console.log(dataUserVerification.data)
        } else {
            setStatusAlert({ invalid: true })
        }
    }

    const selectLocation = (data) => {
        const handleData = data ? data : "";
        const dataOption = []
        handleData?.map((value) => {
            const dataConvert =
            {
                value: value.id_city,
                label: value.name,
            }
            dataOption.push(dataConvert)
        })
        return dataOption
    }

    const defaultTheme = (theme) => ({ ...theme, colors: { ...theme.colors, primary25: '#E6E6E6', primary: '#1E1E1E', neutral20: '#ced4da' }, })

    const errorTheme = (theme) => ({ ...theme, colors: { ...theme.colors, primary25: '#E6E6E6', primary: '#1E1E1E', neutral20: '#dc3545' }, })

    return (
        <>
            <NavbarBlank />
            <Container fluid>
                <h1 className='text-center mt-4 mb-4'>Selamat Datang di <span style={{ color: "#fb374f" }}>SecondGadget</span></h1>
                <div className={'d-flex justify-content-center mt-3 mb-3'}>
                    <Row style={{ backgroundColor: "white", borderRadius: "5px", border: "1px solid #ced4da" }} className={'p-2 pt-3 pb-3 pt-md-4 pb-md-4 gap-2 m-2 ' + style.box_login}>
                        <Col md={12} className={'text-center'}>
                            <h2>Lengkapi Profil</h2>
                            <p style={{ color: "#8A8A8A" }}>Yuk lengkapi data dirimu dan mulai<br /> menjelajah berbagai fitur di SecondGadget!</p>
                        </Col>
                        <Col xs={12}>
                            {StatusAlert.success ? <SweetAlert success title="Selamat Datang!" confirmBtnBsStyle={'dark'} onConfirm={() => navigate("/dashboard")}></SweetAlert> : null}
                            <Form className={'d-grid gap '} onSubmit={handleSubmit}>
                                <div className="d-grid justify-content-center mb-3">
                                    <div className="mx-auto"><ImageUploader onFileAdded={(img) => setInputForm({ ...InputForm, image: img.file })} isInvalid={StatusAlert.invalid} /></div>
                                    {StatusAlert.invalid ? <div style={{ color: "#dc3545", fontSize: "0.875rem", marginTop: "5px" }} >Upload Foto kamu.</div> : null}
                                </div>
                                <Form.Group className="mb-3">
                                    <Form.Label>Nama Lengkap <span style={{ color: "red" }}>*</span></Form.Label>
                                    <Form.Control type="text" onChange={(e) => setInputForm({ ...InputForm, fullname: e.target.value })} isInvalid={StatusAlert.invalid} />
                                    <Form.Control.Feedback type="invalid">
                                        Masukkan nama lengkap kamu.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>No Handphone <span style={{ color: "red" }}>*</span></Form.Label>
                                    <Form.Control type="number" onChange={(e) => setInputForm({ ...InputForm, phone: e.target.value })} isInvalid={StatusAlert.invalid} />
                                    <Form.Control.Feedback type="invalid">
                                        Masukkan no handphone kamu.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Kota <span style={{ color: "red" }}>*</span></Form.Label>
                                    <Select options={selectLocation(dataCity)} theme={StatusAlert.invalid == false ? defaultTheme : errorTheme} placeholder="Kota / Kabupaten" onChange={(e) => setInputForm({ ...InputForm, city: e.value })} />
                                    {StatusAlert.invalid ? <div style={{ color: "#dc3545", fontSize: "0.875rem", marginTop: "5px" }}>Masukkan kota asal kamu.</div> : null}
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Alamat <span style={{ color: "red" }}>*</span></Form.Label>
                                    <Form.Control as="textarea" onChange={(e) => setInputForm({ ...InputForm, address: e.target.value })} isInvalid={StatusAlert.invalid} />
                                    <Form.Control.Feedback type="invalid">
                                        Masukkan alamat lengkap kamu.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <div className="d-flex gap-2 justify-content-end">
                                    {isLoading ?
                                        <Button variant="dark" disabled><Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" /> Loading...</Button>
                                        :
                                        <Button className="mt-2" variant="dark" type="submit">Simpan</Button>
                                    }
                                </div>
                            </Form>
                        </Col>
                    </Row>
                </div>
            </Container>
            <FooterDefault />
        </>
    )
}

export default CompleteProfile