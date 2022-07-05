import React from 'react'
import Select from 'react-select'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import ImageUploader from 'react-image-upload'
import 'react-image-upload/dist/index.css'
import style from './CompleteProfile.module.css'
import NavbarBlank from '../../../Components/Navbar/NavbarBlank/NavbarBlank'
import FooterDefault from '../../../Components/Footer/FooterDefault/FooterDefault'
import { dataCity } from '../../DataDummy'

const CompleteProfile = () => {

    const getImageFileObject = (imageFile) => {
        console.log({ imageFile })
    }

    const runAfterImageDelete = (file) => {
        console.log({ file })
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

    const selectTheme = (theme) => ({ ...theme, colors: { ...theme.colors, primary25: '#E6E6E6', primary: '#1E1E1E', neutral20: '#ced4da' }, })

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
                            <Form className={'d-grid gap '}>
                                <div className="d-flex justify-content-center mb-3">
                                    <ImageUploader
                                        onFileAdded={(img) => getImageFileObject(img)} // function that runs to confirm that your image actually exists
                                        onFileRemoved={(img) => runAfterImageDelete(img)} // function runs on once you delete your image
                                    />
                                </div>
                                <Form.Group className="mb-3">
                                    <Form.Label>Nama Lengkap <span style={{ color: "red" }}>*</span></Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>No Handphone <span style={{ color: "red" }}>*</span></Form.Label>
                                    <Form.Control type="number" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Kota <span style={{ color: "red" }}>*</span></Form.Label>
                                    <Select options={selectLocation(dataCity)} theme={selectTheme} placeholder="Kota / Kabupaten" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Alamat <span style={{ color: "red" }}>*</span></Form.Label>
                                    <Form.Control as="textarea" />
                                </Form.Group>
                                <div className="d-flex gap-2 justify-content-end">
                                    <Button className="mt-2" variant="outline-secondary" type="submit">Hapus</Button>
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