import React, { useState } from 'react'
import Select from 'react-select'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import ImageUploader from 'react-image-upload'
import 'react-image-upload/dist/index.css'
import style from './CompleteProfile.module.css'
import NavbarBlank from '../../../Components/Navbar/NavbarBlank/NavbarBlank'
import FooterDefault from '../../../Components/Footer/FooterDefault/FooterDefault'
import { dataCity } from '../../DataDummy'

const CompleteProfile = () => {

    const [StatusAlert, setStatusAlert] = useState({ alert: false, invalid: false, success: false })
    const [InputForm, setInputForm] = useState({ image: "", fullname: "", phone: "", city: "", address: "" })

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (InputForm.image && InputForm.fullname && InputForm.phone && InputForm.city && InputForm.address) {
            // await dispatch(postUserLogin({ email: InputForm.email, password: InputForm.password }))
            console.log("ini")
        } else {
            console.log(InputForm)
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
                            <Form className={'d-grid gap '} onSubmit={handleSubmit}>
                                <div className="d-flex justify-content-center mb-3">
                                    <ImageUploader onFileAdded={(img) => setInputForm({ ...InputForm, image: img.file })} isInvalid={StatusAlert.invalid} />
                                    <Form.Control.Feedback type="invalid">
                                        Masukkan nama lengkap kamu.
                                    </Form.Control.Feedback>
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
                                    <Select options={selectLocation(dataCity)} theme={StatusAlert.invalid == true ? defaultTheme : errorTheme} placeholder="Kota / Kabupaten" onChange={(e) => setInputForm({ ...InputForm, city: e.value })} />
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
                                    <Button className="mt-2" variant="dark" type="submit">Simpan</Button>
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