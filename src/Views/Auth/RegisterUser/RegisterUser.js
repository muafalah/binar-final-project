import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import style from './RegisterUser.module.css'

const RegisterUser = () => {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col lg={6}>
                        Form Register
                    </Col>
                    <Col lg={6}>
                        Image
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default RegisterUser