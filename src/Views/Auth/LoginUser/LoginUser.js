import { Col, Container, Row, Form, Button } from 'react-bootstrap'
import React from 'react'
import style from './LoginUser.module.css'
import logo from '../../../Assets/image/img-logo.png'

const LoginUser = () => {
    return (
      <>
        <Container fluid className={style.container_login}>
          <Row>
            <Col lg={6} className={style.image}>
            </Col>
            <Col lg={6} className={style.form_login}>

              <div className={style.field_login}>
                  <img src={logo} alt='' className={style.property_logo} />
                  <h3 className={style.title_login}>Selamat Datang!</h3>
              </div>

                <Form className={"d-grid gap " + style.Property_email_pass}>
                  <Form.Group className="mb-3">
                    <Form.Label>Email <span style={{color:"red"}}>*</span></Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Password <span style={{color:"red"}}>*</span></Form.Label>
                    <Form.Control type="password" placeholder="password" />
                  </Form.Group>
                  <Button variant="dark" type="submit" className={style.property_btn}>
                    Masuk
                  </Button>
                </Form>

              <h6 className={style.for_login}>Belum Punya Akun?  
                <a href='/register' className={style.for_href}> Daftar Disini!</a>
              </h6>
            </Col>
          </Row>
        </Container>
      </>
    );
}

export default LoginUser