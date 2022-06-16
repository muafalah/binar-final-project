import { Col, Container, Row } from 'react-bootstrap'
import React from 'react'
import style from './LoginUser.module.css'

const LoginUser = () => {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col lg={6}>
                        Image
                    </Col>
                    <Col lg={6}>
                        Form Login
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default LoginUser