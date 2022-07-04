import React from 'react'
import { Container, Row, Col, Button, Tap, Nav, Form, ButtonGroup, Table } from 'react-bootstrap'
import { Pencil, PencilSquare, ThunderboltFill } from 'react-bootstrap-icons'
import MenuAdmin from '../../../Components/Menuadmin/MenuAdmin'
import { Plus } from 'react-bootstrap-icons'
import ImageIphone from '../../../Assets/image/LandingPage/img-category-iphone.svg'
import ImageIpad from '../../../Assets/image/LandingPage/img-category-ipad.svg'
import ImageMac from '../../../Assets/image/LandingPage/img-category-mac.svg'
import ImageWatch from '../../../Assets/image/LandingPage/img-category-watch.svg'
import ImageAirpods from '../../../Assets/image/LandingPage/img-category-airpods.svg'
import { X } from 'react-bootstrap-icons'

import style from './ListProdukAdmin.module.css'
import Layout from '../../Layout'

function ListProdukAdmin() {

  return (
    <Layout role="admin">
      <Container>
        <Row lg={12}>
          <Col className='mt-3 mb-2'>
            <h3 className={style.title_admin}>Dashboard Admin</h3>
          </Col>

          <Row className={style.box_profilAdmin} style={{ backgroundColor: "white", borderRadius: "5px", padding: "1rem", border: "1px solid #e4e4e7" }}>
            <Col lg={2}>
              <img src={'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'} 
                height='70px'
                width='70px'
                type='submit'
              />
            </Col>
            <Col lg={8}>
              <h5>Admin</h5>
              <h6>admin@mail.com</h6>
            </Col>
            <Col lg={2}>
              <Button variant="outline-secondary" style={{ marginTop: "10px" }}>
                <PencilSquare/>
                  Edit
              </Button>
            </Col>
          </Row>
          
          <Row style={{ padding: "1rem" }}>
            <Col lg={2} className={style.menu_admin} style={{ marginTop: "1rem"}}>
              <MenuAdmin />
            </Col>
            <Col lg={10} className='mt-4' style={{ backgroundColor: "White", boderRadius: "5px", padding: '1rem' }}>
              <Button className='mb-3' variant="secondary" style={{ position:"relative", justifyContent: "end" }}>
                <Plus style={{ color: "white" }}/>
                Tambah Kategori
              </Button>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>ID Kategori</th>
                    <th>Nama Kategori</th>
                    <th>Gambar</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>00001</td>
                    <td>iPhone</td>
                    <td>
                      <img src={ImageIphone}
                        width= '50px'
                        height='50px'
                      />
                    </td>
                    <td>
                      <Button variant='outline-secondary'>
                      <Pencil />
                        Edit
                      </Button>
                      <Button variant='outline-secondary'>
                        <X />
                        Delete
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>00011</td>
                    <td>iPad</td>
                    <td>
                      <img src={ImageIpad}
                        width= '50px'
                        height='50px'
                      />
                    </td>
                    <td>
                      <Button variant='outline-secondary'>
                        {/* <PencilSquare/> */}
                        <Pencil />
                        Edit
                      </Button>
                      <Button variant='outline-secondary'>
                        <X />
                        Delete
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>00111</td>
                    <td>Mac</td>
                    <td>
                      <img src={ImageMac}
                        width= '50px'
                        height='50px'
                      />
                    </td>
                    <td>
                      <Button variant='outline-secondary'>
                        {/* <PencilSquare/> */}
                        <Pencil />
                        Edit
                      </Button>
                      <Button variant='outline-secondary'>
                        <X />
                        Delete
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>01111</td>
                    <td>AirPods</td>
                    <td>
                      <img src={ImageWatch}
                        width= '50px'
                        height='50px'
                      />
                    </td>
                    <td>
                      <Button variant='outline-secondary'>
                        {/* <PencilSquare/> */}
                        <Pencil />
                        Edit
                      </Button>
                      <Button variant='outline-secondary'>
                        <X />
                        Delete
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>11111</td>
                    <td>Watch</td>
                    <td>
                      <img src={ImageAirpods}
                        width= '50px'
                        height='50px'
                      />
                    </td>
                    <td>
                      <Button variant='outline-secondary'>
                        {/* <PencilSquare/> */}
                        <Pencil />
                        Edit
                      </Button>
                      <Button variant='outline-secondary'>
                        <X />
                        Delete
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Col> 
          </Row>
        </Row>
      </Container>
    </Layout>
  )
}

export default ListProdukAdmin
