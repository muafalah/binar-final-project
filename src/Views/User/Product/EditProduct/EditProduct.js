import React from 'react'
import Select from 'react-select'
import { Button, Col, Form, Row } from 'react-bootstrap'
import Dashboard from '../../Dashboard/Dashboard'
import style from './EditProduct.module.css'
import { dataCategory } from '../../../DataDummy'

const EditProduct = () => {
    const selectCategory = (data) => {
        const handleData = data ? data : "";
        const dataOption = []
        handleData?.map((value) => {
            const dataConvert =
            {
                value: value.id_category,
                label: value.name,
            }
            dataOption.push(dataConvert)
        })
        return dataOption
    }

    const selectTheme = (theme) => ({ ...theme, colors: { ...theme.colors, primary25: '#E6E6E6', primary: '#1E1E1E', neutral20: '#ced4da' }, })

    return (
        <Dashboard menu="product">
            <Row className={'m-0 ' + style.box_temp}>
                <Col xs={12} className='mt-3'>
                    <b style={{ fontSize: "1.25rem" }}>Edit Produk</b>
                    <hr className="mt-2 mb-2" />
                </Col>
                <Col xs={12} className="p-0">
                    <Row className={'m-0'}>
                        <Col xs={12} className='mt-3 mb-3'>
                            <div>
                                <Form className={'d-grid gap w-100'}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Nama Produk <span style={{ color: "red" }}>*</span></Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Kategori <span style={{ color: "red" }}>*</span></Form.Label>
                                        <Select options={selectCategory(dataCategory)} theme={selectTheme} placeholder="Pilih Kategori" />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Harga <span style={{ color: "red" }}>*</span></Form.Label>
                                        <Form.Control type="number" />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Serial Number <span style={{ color: "red" }}>*</span></Form.Label>
                                        <div className='d-flex'>
                                            <Form.Control className="w-100 me-2" type="text" />
                                            <Button variant="outline-success" type="submit">Periksa</Button>
                                        </div>
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Deskripsi <span style={{ color: "red" }}>*</span></Form.Label>
                                        <Form.Control as="textarea" />
                                    </Form.Group>
                                    <div className="d-flex gap-2 justify-content-end">
                                        <Button className="mt-2" variant="outline-dark" type="submit">Simpan & Preview</Button>
                                        <Button className="mt-2" variant="dark" type="submit">Terbitkan Produk</Button>
                                    </div>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Dashboard>
    )
}

export default EditProduct