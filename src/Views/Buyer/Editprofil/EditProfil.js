import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import FooterDefault from '../../../Components/Footer/FooterDefault/FooterDefault'
import Layout from '../../Layout'
import style from './EditProfil.module.css'

function EditProfil() {
  return (
    <Layout role='seller'>
      <Container fluid>
        <div className={style.conten_media}> <h3 className={'text-center'}>Edit Profil</h3>
          <Row className={'p-3 mx-auto ' + style.box_edit}>
            <Col xs={12} className={'text-center'}>
              <h4 style={{ color: '#1e1e1e' }}>Lengkapi Profil</h4>
              <img src={'data:image/jpeg;base64,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'}
                width="100px"
                height="100px"
                type="submit"
                className='p-1'
              />
            </Col>

            <Col xs={12} className={style.form_content}>
              <Form>
                <Form.Group className='mb-3'>
                  <Form.Label>Nama Lengkap</Form.Label>
                  <Form.Control type='text'/>
                </Form.Group>
                <Row className='mb-3'>
                  <Form.Group as={Col} md="6">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type='text'/>
                  </Form.Group>
                  <Form.Group as={Col} md="6">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='text'/>
                  </Form.Group>
                </Row>
                <Row className='mb-3'>
                  <Form.Group as={Col} md="6">
                    <Form.Label>Nama Bank</Form.Label>
                    <Form.Control type='text'/>
                  </Form.Group>
                  <Form.Group as={Col} md="6">
                    <Form.Label>Nomor Rekening</Form.Label>
                    <Form.Control type='text'/>
                  </Form.Group>
                </Row>
                <Row className='mb-3'>
                  <Form.Group as={Col} md="6">
                    <Form.Label>Kota</Form.Label>
                    <Form.Control type='text'/>
                  </Form.Group>
                  <Form.Group as={Col} md="6">
                    <Form.Label>No Handphone</Form.Label>
                    <Form.Control type='text'/>
                  </Form.Group>
                </Row>
                <Form.Group className='mb-3'>
                  <Form.Label>Alamat Lengkap</Form.Label>
                  <Form.Control
                    type='text'
                    as='textarea'
                    style={{ height: '65px'}}
                  />
                </Form.Group>
                <Form.Group className='mb-3'>
                  <Form.Label>Deskripsi</Form.Label>
                  <Form.Control
                    type='text'
                    as='textarea'
                    style={{ height: '65px'}}
                  />
                </Form.Group>
                <Row className={'justify-content-end gap-2'} style={{ borderRadius: '2px'}}>
                  <Button as={Col} md='2' sm='1' className={style.btn_batal} variant="outline-dark">Batal</Button>{' '}
                  <Button as={Col} md='2' sm='1' className={style.btn_simpan} variant="outline-dark">Simpan</Button>{' '}
                </Row>
              </Form>
            </Col>
          </Row>
        </div>
      </Container>
    </Layout>
  )
}

export default EditProfil