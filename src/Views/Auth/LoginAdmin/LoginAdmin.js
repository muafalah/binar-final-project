import React from 'react'
import { Col, Container, Form, Row, Button } from 'react-bootstrap'
import style from './LoginAdmin.module.css'

const LoginAdmin = () => {

    return (
        <Container fluid style={{ height: "100vh", backgroundColor: "#1E1E1E" }} className={'d-flex align-items-center justify-content-center'}>
            <Row style={{ backgroundColor: "white", borderRadius: "5px" }} className={'p-2 pt-3 pb-3 pt-md-4 pb-md-4 gap-2 m-2 ' + style.box_login}>
                <Col md={12} className={'text-center'}>
                    <h2>Login Admin</h2>
                    <p style={{ color: "#8A8A8A" }}>Selamat datang kembali Admin!</p>
                </Col>
                <Col xs={12}>
                    <Form className={'d-grid gap '}>
                        <Form.Group className="mb-3">
                            <Form.Label>Alamat Email <span style={{ color: "red" }}>*</span></Form.Label>
                            <Form.Control type="email" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Kata Sandi <span style={{ color: "red" }}>*</span></Form.Label>
                            <Form.Control type="password" />
                        </Form.Group>
                        <Button className="mt-2" variant="dark" type="submit">Masuk</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default LoginAdmin