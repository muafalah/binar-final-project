import React, { useEffect } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import style from './RegisterUser.module.css'

const RegisterUser = () => {

    useEffect(() => {
        document.title = "Register";
    }, []);

    return (
        <Container fluid>
            <Row style={{ height: "100vh" }}>
                <Col lg={7} md={6} sm={0} className={style.image}></Col>
                <Col lg={5} md={6} sm={12} className={'ps-md-5 pe-md-5 '} style={{ height: "100%" }}>
                    <Row className={'align-content-center gap-4'} style={{ height: "100%" }}>
                        <Col md={12} className={'text-center'}>
                            <h2 className="mt-3">Daftar</h2>
                            <p style={{ color: "#8A8A8A" }}>Senang berkenalan denganmu, yuk daftar<br />sekarang dan bergabung bersama SecondGadget!</p>
                        </Col>
                        <Col md={12}>
                            <Form className={'d-grid gap '}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Nama Lengkap <span style={{ color: "red" }}>*</span></Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Alamat Email <span style={{ color: "red" }}>*</span></Form.Label>
                                    <Form.Control type="email" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Kata Sandi <span style={{ color: "red" }}>*</span></Form.Label>
                                    <Form.Control type="password" />
                                </Form.Group>
                                <Button className="mt-2" variant="dark" type="submit">Daftar</Button>
                            </Form>
                        </Col>
                        <Col md={12} className={'text-center'}>
                            <p>Sudah mempunyai akun? <a href="/login" style={{ color: "#FB374F" }}>Masuk Disini!</a></p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default RegisterUser