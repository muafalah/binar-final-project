import React from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import Layout from '../../../Layout'
import { PencilSquare, TagFill,Box2HeartFill,BadgeAdFill,PeopleFill } from 'react-bootstrap-icons'

import style from './AddCategory.module.css'

const AddCategory = () => {
  return (
    <Layout>
        <Container>
            <Row className={'pt-3 w-100 m-0-mt-4 mb-4'}>
                <Col xs={12} className={'p-0'}>
                    <Row className={'m-0 p-3 ' + style.box_profilAdmin}>
                        <Col lg={10} md={9} xs={12} className={'p-0'}>
                            <div className='d-flex gap-3 w-100'>
                                <img src={'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'} 
                                    alt='Foto Profil Admin'
                                    width="80px"
                                    heigth="80px"
                                />
                                <div className='d-grid align-content-center'>
                                    <div><h3>Admin</h3></div>
                                    <div style={{ color: '#6C757D'}}><h6>admin@mail.com</h6></div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={2} md={3} xs={12} className={'p-0 d-flex my-auto'}>
                            <div className='w-100 mt-3 mt-md-0'>
                            <Button variant="outline-secondary" className="w-100">
                                <PencilSquare className={'my-auto me-2 me-lg-2'}/>
                                Edit
                            </Button></div>
                        </Col>
                    </Row>
                </Col>
                <Col xs={12} className={'p-0'}>
                    <Row className={'m-0'}>
                        <Col lg={3} className={'p-0 mt-4 pe-lg-3'}>
                            <div className={'p-3 ' + style.box_profilAdmin}>
                                <h5 className='mb-3'>Menu</h5>
                                <div className='d-grid gap-2 w-100'>
                                    <Button variant='outline-secondary' className='w-100'>
                                        <TagFill  className={'my-auto me-2 me-lg-2'}/>
                                        Kategori
                                    </Button>
                                    <Button variant='outline-secondary' className='w-100'>
                                        <Box2HeartFill  className={'my-auto me-2 me-lg-2'} />
                                        Produk
                                    </Button>
                                    <Button variant='outline-secondary' className='w-100'>
                                        <BadgeAdFill  className={'my-auto me-2 me-lg-2'} />
                                        Iklan
                                    </Button>
                                    <Button variant='outline-secondary'>
                                        <PeopleFill  className={'my-auto me-2 me-lg-2'}/>
                                        Pengguna
                                    </Button>
                                </div>
                            </div>
                        </Col>
                        <Col xs={9} className='mt-3'>
                            <b style={{ fontSize: '1.25rem' }}>Tambah Kategori</b>
                            <hr className="mt-2 mb-2" />
                                <Row className='mt-3 mb-3'>
                                    <div>
                                        <Form className={'d-grid gap w-100'}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>ID Kategori <span style={{ color: "red" }}>*</span></Form.Label>
                                                <Form.Control type="text" />
                                            </Form.Group>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Nama Kategori<span style={{ color: "red" }}>*</span></Form.Label>
                                                <Form.Control type="text" />
                                            </Form.Group>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Gambar Kategori<span style={{ color: "red" }}>*</span></Form.Label>
                                                <Form.Control as="textarea" />
                                            </Form.Group>
                                            <div className="d-flex gap-2 justify-content-end">
                                                <Button className="mt-2" variant="outline-dark" type="submit">Reset</Button>
                                                <Button className="mt-2" variant="dark" type="submit">Simpan</Button>
                                            </div>
                                        </Form>
                                    </div>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </Layout>
  )
}

export default AddCategory