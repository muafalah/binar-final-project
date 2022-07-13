import React from 'react'
import DashboardAdmin from '../../DashboardAdmin/DashboardAdmin'
import { Button, Col, Form, Row, Table } from 'react-bootstrap'
import style from './ListCarouselAdmin.module.css'

const ListCarouselAdmin = () => {
    return (
        <DashboardAdmin menu="carousel">
            <Row className={'m-0 ' + style.box_temp}>
                <Col xs={12} className='mt-3'>
                    <b style={{ fontSize: "1.25rem" }}>Add Carousel</b>
                    <hr className="mt-2 mb-2" />
                </Col>
                <Col xs={12} className="p-0">
                    <Row className={'m-0'}>
                        <Col xs={12} className='mt-3 mb-3'>
                            <div>
                            <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>ID Carousel</th>
      <th>Nama</th>
      <th>Gambar</th>
      <th>Aksi</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>001</td>
      <td>Carousel 1</td>
      <td>image</td>
      <td>
      <div className="d-flex gap-2 justify-content-center">
            <Button className="mt-2" variant="outline-dark" type="submit">Hapus</Button>
            <Button href='/admin/carousel/list/editcarousel' className="mt-2" variant="dark" type="submit">Edit</Button>
        </div>
     </td>
    </tr>
    <tr>
    <td>2</td>
      <td>002</td>
      <td>Carousel 2</td>
      <td>image</td>
      <td>
      <div className="d-flex gap-2 justify-content-center">
            <Button className="mt-2" variant="outline-dark" type="submit">Hapus</Button>
            <Button href='/admin/carousel/list/editcarousel' className="mt-2" variant="dark" type="submit">Edit</Button>
        </div>
     </td>
    </tr>
    <tr>
    <td>3</td>
      <td>003</td>
      <td>Carousel 3</td>
      <td>image</td>
      <td>
      <div className="d-flex gap-2 justify-content-center">
            <Button className="mt-2" variant="outline-dark" type="submit">Hapus</Button>
             <Button href='/admin/carousel/list/editcarousel' className="mt-2" variant="dark" type="submit">Edit</Button>
        </div>
     </td>
    </tr>
  </tbody>
</Table>
<div className='d-flex justify-content-end'>
                                        <Button href='/admin/carousel/list/addcarousel' className="mt-2" variant="dark" type="submit">Tambah Carousel</Button>
                                    </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </DashboardAdmin>
    )
}

export default ListCarouselAdmin