import React from 'react'
import { Col, Container, Row, Form, Button } from 'react-bootstrap'
import style from './RegisterUser.module.css'
import logo from '../../../Assets/image/img-logo.png'

const RegisterUser = () => {
    return (
      <>
        <Container fluid className={style.container_regis}>
          <Row>
            <Col lg={6} className={style.form_regis}>
            <div className={style.field_login}>
                <img src={logo} alt='' className={style.property_logo} />
                <h3 className={style.title_login}>Buat Akun Baru!</h3>
            </div>
              <Form  className={"d-grid gap " + style.Property_email_pass}>
                <Form.Group className="mb-3">
                    <Form.Label>Nama Panjang <span style={{color:"red"}}>*</span></Form.Label>
                    <Form.Control type="text" placeholder='masukkan nama' />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email <span style={{color:"red"}}>*</span></Form.Label>
                  <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Password <span style={{color:"red"}}>*</span></Form.Label>
                  <Form.Control type="password" placeholder="password" />
                </Form.Group>
                <Button variant="dark" type="submit" className={style.property_btn}>
                  Daftar
                </Button>
              </Form>

              <h6 className={style.for_regis}>Sudah Punya Akun?    
                <a href='/login' className={style.for_href}> Masuk Disini!</a>
              </h6>
            </Col>
            <Col lg={6} className={style.image_bg}></Col>
          </Row>
        </Container>
      </>
    );
}

export default RegisterUser