import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { dataCity, dataUser } from '../../../DataDummy'
import Dashboard from '../../Dashboard/Dashboard'
import style from './EditProfile.module.css'
import { useSelector } from 'react-redux'

const EditProfile = () => {

    const { dataUserVerification } = useSelector(state => state.authUserReducer)
    const [InputForm, setInputForm] = useState({ fullname: "", username: "", email: "", address: "", phone: "", city: "", description: "" })

    useEffect(() => {
        setInputForm({ fullname: dataUserVerification.data.fullName, username: dataUserVerification.data.username, email: dataUserVerification.data.email, address: dataUserVerification.data.address, phone: dataUserVerification.data.phone, city: dataUserVerification.data.cities.idCity })
    }, [])

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
        <Dashboard menu="profile">
            {dataUserVerification ?
                <Row className={'m-0 ' + style.box_temp}>
                    <Col xs={12} className='mt-3'>
                        <b style={{ fontSize: "1.25rem" }}>Ubah Profil</b>
                        <hr className="mt-2 mb-2" />
                    </Col>
                    <Col xs={12} className="p-0">
                        <Row className={'m-0'}>
                            <Col md={4} className='mt-3 mb-3'>
                                <div className={'p-3 ' + style.box_temp}>
                                    <div className="d-flex justify-content-center"><img src={dataUser.image} alt="photo profile" width="210rem" height="200rem" style={{ borderRadius: "5px", overflow: "auto" }} /></div>
                                    <Button className="w-100 mt-3" variant="outline-secondary" type="submit">Pilih Foto</Button>
                                </div>
                                <div className="d-grid gap-2 mt-2 mb-2">
                                    <Button style={{ borderColor: "#CED4DA" }} className="w-100" variant="outline-secondary" type="submit">Ubah Kata Sandi</Button>
                                    <Button style={{ borderColor: "#CED4DA" }} className="w-100" variant="outline-secondary" type="submit">Ubah Email</Button>
                                </div>
                            </Col>
                            <Col md={8} className='mt-3 mb-3'>
                                <div>
                                    <Form className={'d-grid gap w-100'}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Nama Lengkap <span style={{ color: "red" }}>*</span></Form.Label>
                                            <Form.Control type="text" value={InputForm.fullname} />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Username <span style={{ color: "red" }}>*</span></Form.Label>
                                            <Form.Control type="text" value={InputForm.username} />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Email <span style={{ color: "red" }}>*</span></Form.Label>
                                            <Form.Control type="text" value={InputForm.email} readOnly />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label>No Handphone <span style={{ color: "red" }}>*</span></Form.Label>
                                            <Form.Control type="number" value={InputForm.phone} />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Kota <span style={{ color: "red" }}>*</span></Form.Label>
                                            <Select options={selectLocation(dataCity)} theme={selectTheme} placeholder="Kota / Kabupaten" />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Alamat <span style={{ color: "red" }}>*</span></Form.Label>
                                            <Form.Control as="textarea" value={InputForm.address} />
                                        </Form.Group>
                                        {dataUserVerification.data.roles.length > 1 ?
                                            <Form.Group className="mb-3">
                                                <Form.Label>Catatan <span style={{ color: "red" }}>*</span></Form.Label>
                                                <Form.Control as="textarea" value={InputForm.description} />
                                            </Form.Group>
                                            : null
                                        }
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
        </Dashboard>
    )
}

export default EditProfile