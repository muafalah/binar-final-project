import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import { Button, Col, Form, Row, Modal, Spinner } from 'react-bootstrap'
import ImageUploader from 'react-image-upload'
import Dashboard from '../../Dashboard/Dashboard'
import style from './EditProfile.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { getUserByUsername, putEditUserImage, putEditUserNoImage } from '../../../../Redux/features/authUser'
import { getAllCity } from '../../../../Redux/features/citySlice'
import SweetAlert from 'react-bootstrap-sweetalert'
import Aos from 'aos'

const EditProfile = () => {

    const dispatch = useDispatch()
    const { dataUserVerification, dataUserByUsername, dataEditUserNoImage, dataEditUserImage } = useSelector(state => state.authUserReducer)
    const [InputForm, setInputForm] = useState({ fullname: "", username: "", email: "", address: "", phone: "", city: "", description: "" })
    const [StatusAlert, setStatusAlert] = useState({ modal: false, invalid: false, success: false, loading: false })
    const [ChangeImage, setChangeImage] = useState({ modal: false, invalid: false, loading: false, file: null })
    const [ChangePassword, setChangePassword] = useState({ modal: false, invalid: false, loading: false, newPassword: null, oldPassword: null })
    const { dataAllCity } = useSelector(state => state.cityReducer)

    useEffect(() => {
        dispatch(getAllCity())
        if (dataUserVerification) {
            dispatch(getUserByUsername({ username: dataUserVerification.data.username }))
        }
        Aos.init({ duration: 1800 })
    }, [dataUserVerification])

    useEffect(() => {
        if (dataUserByUsername) {
            setInputForm({ fullname: dataUserByUsername.data.fullName, username: dataUserByUsername.data.username, email: dataUserByUsername.data.email, address: dataUserByUsername.data.address, phone: dataUserByUsername.data.phone, city: dataUserByUsername.data.cities.idCity, description: dataUserByUsername.data.description })
        }
    }, [dataUserByUsername])

    useEffect(() => {
        if (dataEditUserNoImage) {
            if (dataEditUserNoImage.status == 200) {
                setStatusAlert({ modal: false, invalid: false, success: true, loading: false })
            }
        }
    }, [dataEditUserNoImage])

    useEffect(() => {
        if (dataEditUserImage) {
            if (dataEditUserImage.status == 200) {
                setChangeImage({ modal: false, invalid: false, loading: false, success: true, file: null })
            }
        }
    }, [dataEditUserImage])

    const selectLocation = (data) => {
        const dataOption = []
        data?.map((value) => {
            const dataConvert =
            {
                value: value.idCity,
                label: value.cityName,
            }
            dataOption.push(dataConvert)
        })
        return dataOption
    }

    const defaultTheme = (theme) => ({ ...theme, colors: { ...theme.colors, primary25: '#E6E6E6', primary: '#1E1E1E', neutral20: '#ced4da' }, })

    const errorTheme = (theme) => ({ ...theme, colors: { ...theme.colors, primary25: '#E6E6E6', primary: '#1E1E1E', neutral20: '#dc3545' }, })

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (InputForm.fullname && InputForm.username && InputForm.email && InputForm.address && InputForm.phone && InputForm.city) {
            setStatusAlert({ ...StatusAlert, modal: false, loading: true })
            await dispatch(putEditUserNoImage({ idUser: dataUserByUsername.data.userId, username: InputForm.username, fullname: InputForm.fullname, email: InputForm.email, address: InputForm.address, phone: InputForm.phone, city: InputForm.city, description: InputForm.description }))
        } else {
            setStatusAlert({ ...StatusAlert, invalid: true })
        }
    }

    const handleChangeImage = async (e) => {
        e.preventDefault()
        if (ChangeImage.file) {
            setChangeImage({ ...ChangeImage, modal: false, loading: true })
            await dispatch(putEditUserImage({ idUser: dataUserByUsername.data.userId, username: InputForm.username, fullname: InputForm.fullname, email: InputForm.email, address: InputForm.address, phone: InputForm.phone, city: InputForm.city, description: InputForm.description, image: ChangeImage.file }))
        } else {
            setChangeImage({ ...ChangeImage, invalid: true })
        }
    }

    const handleChangePassword = async (e) => {
        e.preventDefault()
        if (ChangePassword.newPassword && ChangePassword.oldPassword) {
            setChangePassword({ ...ChangePassword, modal: false, loading: true })
            console.log(ChangePassword)
        } else {
            setChangePassword({ ...ChangeImage, modal: true, invalid: true })
        }
    }

    return (
        <Dashboard menu="profile">
            {StatusAlert.success || ChangeImage.success ? <SweetAlert success title="Profil Berhasil Diperbarui!" confirmBtnBsStyle={'dark'} onConfirm={() => window.location.reload()}></SweetAlert> : null}
            {dataUserVerification && dataUserByUsername && dataAllCity ?
                <Row className={'m-0 ' + style.box_temp} data-aos="fade-up">
                    <Col xs={12} className='mt-3'>
                        <b style={{ fontSize: "1.25rem" }}>Ubah Profil</b>
                        <hr className="mt-2 mb-2" />
                    </Col>
                    <Modal show={StatusAlert.loading || ChangeImage.loading} size="sm" centered>
                        <Modal.Body className="text-center pt-5 pb-5"><Spinner animation="border" size="lg" /></Modal.Body>
                    </Modal>
                    <Modal show={ChangeImage.modal} onHide={StatusAlert.success} centered size="sm">
                        <Modal.Header>
                            <Modal.Title>Ubah Foto Profil</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="d-grid justify-content-center">
                                <div className="mx-auto"><ImageUploader onFileAdded={(img) => setChangeImage({ ...ChangeImage, file: img.file })} /></div>
                                {ChangeImage.invalid ? <div className="mx-auto" style={{ color: "#dc3545", fontSize: "0.875rem", marginTop: "10px" }} >Foto belum dipilih.</div> : null}
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="outline-secondary" onClick={() => setChangeImage({ modal: false, file: null, invalid: false, success: false, loading: false })}>
                                Batal
                            </Button>
                            <Button variant="success" onClick={handleChangeImage}>
                                Simpan
                            </Button>
                        </Modal.Footer>
                    </Modal>
                    <Modal show={ChangePassword.modal} centered>
                        <Modal.Header>
                            <Modal.Title>Modal heading</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>Kata Sandi Lama</Form.Label>
                                    <Form.Control type="password" onChange={(e) => { setChangePassword({ ...ChangePassword, oldPassword: e.target.value }) }} isInvalid={ChangePassword.invalid} />
                                    <Form.Control.Feedback type="invalid">
                                        Masukkan kata sandi lama kamu.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Kata Sandi Baru</Form.Label>
                                    <Form.Control type="password" onChange={(e) => { setChangePassword({ ...ChangePassword, newPassword: e.target.value }) }} isInvalid={ChangePassword.invalid} />
                                    <Form.Control.Feedback type="invalid">
                                        Masukkan kata sandi baru kamu.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="outline-secondary" onClick={() => setChangePassword({ modal: false, invalid: false, loading: false, newPassword: null, oldPassword: null })}>
                                Batal
                            </Button>
                            <Button variant="success" onClick={handleChangePassword}>
                                Simpan
                            </Button>
                        </Modal.Footer>
                    </Modal>
                    <Col xs={12} className="p-0">
                        <Row className={'m-0'}>
                            <Col md={4} className='mt-3 mb-3'>
                                <div className={'p-3 ' + style.box_temp}>
                                    <div className="d-flex justify-content-center"><img src={dataUserByUsername.data.img} alt="photo profile" width="210rem" height="200rem" style={{ borderRadius: "5px", overflow: "auto" }} /></div>
                                    <Button className="w-100 mt-3" variant="outline-secondary" onClick={() => setChangeImage({ ...ChangeImage, modal: true })}>Pilih Foto</Button>
                                </div>
                                <div className="d-grid gap-2 mt-2 mb-2">
                                    <Button style={{ borderColor: "#CED4DA" }} className="w-100" variant="outline-secondary" onClick={() => setChangePassword({ ...ChangePassword, modal: true })}>Ubah Kata Sandi</Button>
                                </div>
                            </Col>
                            <Col md={8} className='mt-3 mb-3'>
                                <div>
                                    <Form className={'d-grid gap w-100'} onSubmit={handleSubmit}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Nama Lengkap <span style={{ color: "red" }}>*</span></Form.Label>
                                            <Form.Control type="text" value={InputForm.fullname} onChange={(e) => { setInputForm({ ...InputForm, fullname: e.target.value }) }} isInvalid={StatusAlert.invalid} />
                                            <Form.Control.Feedback type="invalid">
                                                Masukkan nama lengkap kamu.
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Username <span style={{ color: "red" }}>*</span></Form.Label>
                                            <Form.Control type="text" value={InputForm.username} onChange={(e) => { setInputForm({ ...InputForm, username: e.target.value }) }} isInvalid={StatusAlert.invalid} />
                                            <Form.Control.Feedback type="invalid">
                                                Masukkan username kamu.
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Email <span style={{ color: "red" }}>*</span></Form.Label>
                                            <Form.Control type="text" value={InputForm.email} onChange={(e) => { setInputForm({ ...InputForm, email: e.target.value }) }} isInvalid={StatusAlert.invalid} />
                                            <Form.Control.Feedback type="invalid">
                                                Masukkan alamat email kamu.
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label>No Handphone <span style={{ color: "red" }}>*</span></Form.Label>
                                            <Form.Control type="number" value={InputForm.phone} onChange={(e) => { setInputForm({ ...InputForm, phone: e.target.value }) }} isInvalid={StatusAlert.invalid} />
                                            <Form.Control.Feedback type="invalid">
                                                Masukkan no handphone kamu.
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        {InputForm.city > 0 ?
                                            <Form.Group className="mb-3">
                                                <Form.Label>Kota <span style={{ color: "red" }}>*</span></Form.Label>
                                                <Select options={selectLocation(dataAllCity.data)} theme={StatusAlert.invalid == false ? defaultTheme : errorTheme} defaultValue={selectLocation(dataAllCity.data).filter(option => option.value === InputForm.city)} placeholder="Kota / Kabupaten" onChange={(e) => setInputForm({ ...InputForm, city: e.value })} />
                                                {StatusAlert.invalid ? <div style={{ color: "#dc3545", fontSize: "0.875rem", marginTop: "5px" }}>Masukkan kota asal kamu.</div> : null}
                                            </Form.Group>
                                            : null
                                        }
                                        <Form.Group className="mb-3">
                                            <Form.Label>Alamat <span style={{ color: "red" }}>*</span></Form.Label>
                                            <Form.Control as="textarea" value={InputForm.address} onChange={(e) => { setInputForm({ ...InputForm, address: e.target.value }) }} isInvalid={StatusAlert.invalid} />
                                            <Form.Control.Feedback type="invalid">
                                                Masukkan alamat lengkap kamu.
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        {dataUserVerification.data.roles.length > 1 ?
                                            <Form.Group className="mb-3">
                                                <Form.Label>Catatan <span style={{ color: "red" }}>*</span></Form.Label>
                                                <Form.Control as="textarea" value={InputForm.description} onChange={(e) => { setInputForm({ ...InputForm, description: e.target.value }) }} isInvalid={StatusAlert.invalid} />
                                                <Form.Control.Feedback type="invalid">
                                                    Masukkan deskripsi toko kamu.
                                                </Form.Control.Feedback>
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