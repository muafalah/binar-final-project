import React from 'react'
import DashboardAdmin from '../../DashboardAdmin/DashboardAdmin'
import { Button, Col, Row, Table } from 'react-bootstrap'
import style from './ListCarouselAdmin.module.css'
import { dataCarousel } from '../../../DataDummy'
import { PencilSquare, PlusLg, Trash } from 'react-bootstrap-icons'

const ListCarouselAdmin = () => {
  return (
    <DashboardAdmin menu="carousel">
      <Row className="m-0 gap-3">
        <Col xs={12} className="p-0">
          <div className='d-flex'>
            <div className='w-100 my-auto'><b style={{ fontSize: "1.25rem" }}>Carousel</b></div>
            <div className='w-100 my-auto text-end'><Button size="sm" variant="dark" href="/admin/carousel/add"><PlusLg className='my-auto me-2' size={16} />Tambah Carousel</Button></div>
          </div>
          <hr className="mt-2 mb-1" />
        </Col>
        <Col xs={12} className="p-0">
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th className='text-center'>No</th>
                <th>Nama Kategori</th>
                <th className='text-center'>Gambar</th>
                <th colSpan={2} className='text-center'>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {dataCarousel?.map((value, index) => {
                return (
                  <tr>
                    <td className="text-center">{index + 1}</td>
                    <td><a href={value.link} style={{ color: "black", textDecoration: "underline" }}>{value.name}</a></td>
                    <td className="text-center"><img src={value.image} alt={value.name} width="200rem" /></td>
                    <td className={'text-center ' + style.width_table}>
                      <Button size="sm" variant="success" href={'/admin/carousel/edit/' + value.id_category}><PencilSquare className='me-2' size={14} />Edit</Button>
                    </td>
                    <td className={'text-center ' + style.width_table}>
                      <Button size="sm" variant="outline-danger"><Trash className='my-auto me-2' size={14} />Hapus</Button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
        </Col>
      </Row>
    </DashboardAdmin>
  )
}

export default ListCarouselAdmin