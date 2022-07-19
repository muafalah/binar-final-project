import React, { useEffect, useState } from 'react'
import { Alert, Container, Row, Col, Form, Button, Spinner } from 'react-bootstrap'
import SweetAlert from 'react-bootstrap-sweetalert'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { postUserRegister } from '../../../Redux/features/authUser'
import style from './RegisterUser.module.css'

const RegisterUser = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [StatusAlert, setStatusAlert] = useState({ alert: false, invalid: false, success: false })
    const [InputForm, setInputForm] = useState({ username: "", email: "", password: "", })
    const { isLoading, isSuccess, isError, dataUserRegister } = useSelector(state => state.authUserReducer)

    useEffect(() => {
        if (isSuccess) {
            if (dataUserRegister) {
                if (dataUserRegister.status === 200) {
                    setStatusAlert({ success: true })
                }
            }
        }
    }, [isSuccess, dataUserRegister])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const regexUsername = /^[a-z0-9_-]{6,16}$/igm
        const regexEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
        const regexPassword = /^(?=.{6,})/gm
        if (regexUsername.test(InputForm.username) && regexEmail.test(InputForm.email) && regexPassword.test(InputForm.password)) {
            await dispatch(postUserRegister({ username: InputForm.username, email: InputForm.email, password: InputForm.password }))
        } else {
            setStatusAlert({ invalid: true })
        }
    }

    return (
        <Container fluid>
            <Row style={{ height: "100vh" }}>
                <Col lg={7} md={6} sm={0} className={style.image}></Col>
                <Col lg={5} md={6} sm={12} className={'ps-md-5 pe-md-5 '} style={{ height: "100%" }}>
                    <Row className={'align-content-center'} style={{ height: "100%" }}>
                        <Col md={12} className={'text-center'}>
                            <h2>Daftar</h2>
                            <p style={{ color: "#8A8A8A" }}>Senang berkenalan denganmu, yuk daftar<br />sekarang dan bergabung bersama SecondGadget!</p>
                        </Col>
                        <Col md={12}>
                            <Form className={'d-grid gap '} onSubmit={handleSubmit}>
                                {StatusAlert.success ? <SweetAlert success title="Pendaftaran Berhasil!" confirmBtnBsStyle={'dark'} onConfirm={() => navigate("/login")}> Silahkan login dengan akun yang sudah didaftarkan! </SweetAlert> : null}
                                {StatusAlert.alert ? <Alert variant="danger">Email atau Kata Sandi Salah</Alert> : null}
                                <Form.Group className="mb-3">
                                    <Form.Label>Username <span style={{ color: "red" }}>*</span></Form.Label>
                                    <Form.Control type="text" name="username" placeholder="Contoh: johndee" onChange={(e) => setInputForm({ ...InputForm, username: e.target.value })} isInvalid={StatusAlert.invalid} />
                                    <Form.Control.Feedback type="invalid">
                                        Masukkan username yang valid.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Alamat Email <span style={{ color: "red" }}>*</span></Form.Label>
                                    <Form.Control type="email" name="email" placeholder="Contoh: johndee@gmail.com" onChange={(e) => setInputForm({ ...InputForm, email: e.target.value })} isInvalid={StatusAlert.invalid} />
                                    <Form.Control.Feedback type="invalid">
                                        Masukkan alamat email yang valid.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Kata Sandi <span style={{ color: "red" }}>*</span></Form.Label>
                                    <Form.Control type="password" name="password" placeholder="6+ karakter" onChange={(e) => setInputForm({ ...InputForm, password: e.target.value })} isInvalid={StatusAlert.invalid} />
                                    <Form.Control.Feedback type="invalid">
                                        Kata sandi setidaknya minimal 6 karakter.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                {isLoading ?
                                    <Button variant="dark" disabled><Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" /> Loading...</Button>
                                    :
                                    <Button className="mt-2" variant="dark" type="submit">Daftar</Button>
                                }
                            </Form>
                        </Col>
                        <Col md={12} className={'text-center'}>
                            <p className={'mt-3'}>Sudah mempunyai akun? <a href="/login" style={{ color: "#FB374F" }}>Masuk Disini!</a></p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default RegisterUser