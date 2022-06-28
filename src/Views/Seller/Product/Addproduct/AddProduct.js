import React from 'react'
import { Container, Row, Col, Form, Button, ButtonGroup } from 'react-bootstrap'
import { ArrowLeftShort } from 'react-bootstrap-icons'
import style from './AddProduct.module.css'

function AddProduct() {
  return (
    <Container fluid style={{ height: "100vh", backgroundColor: "#1e1e1e" }} className={"d-flex align-items-center justify-content-center " + style.container_fluid}>
      <Row className={style.icon_back}>
        <ArrowLeftShort className={style.icon_arrow} />
          <Row className={style.box_produk} style={{ color: 'black'}}>
            <Col md={12} className={"text-center " + style.Text_fluid}>
              <h4>Tambah Produk</h4>
            </Col>
            <Col md={12} xs={12}>
              <Form className={"d-grid gap "}>
                <Form.Group className="mb-3">
                  <Form.Label>Nama Produk</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Harga Produk</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Kategori</Form.Label>
                  {/* <select id="Pilih Kategori">

                  </select> */}
                  <Form.Select className={style.selected}>
                    <option value="1" className={style.option_1}>iPhone</option>
                    <option value="2" className={style.option_2}>iPad</option>
                    <option value="3" className={style.option_3}>Mac</option>
                    <option value="4" className={style.option_4}>AirPods</option>
                    <option value="5" className={style.option_5}>Watch</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Deskripsi</Form.Label>
                  <Form.Control
                    as="textarea"
                    style={{ height: "100px" }}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Foto Produk</Form.Label>
                  <Form.Control type="file"></Form.Control>
                </Form.Group>
                <ButtonGroup aria-label="Basic example" className={style.btn_go}>
                  <Button variant="outline-secondary" className={style.btn_preview}>
                    Preview
                  </Button>{" "}
                  <Button variant="outline-secondary" className={style.btn_terbit}>
                    Terbitkan
                  </Button>{" "}
                </ButtonGroup>
              </Form>
            </Col>
          </Row>
      </Row>
    </Container>
  );
}

export default AddProduct