import React from 'react'
import { Button, Card, Col, Row } from "react-bootstrap"
import { GeoAltFill, PersonFill } from "react-bootstrap-icons"
import style from "./CardProduct.module.css"

export const CardProductBuyer = ({ value }) => {
  return (
    <div>
        <a href={'/product/' + value.id_product} style={{ color: "black" }}>
      <Card className={'mt-1 mb-1 '}>
        <div className="d-grid justify-content-center pt-2 pb-2"><Card.Img variant="top" src={value.image} style={{ height: "10rem", width: "min-content" }} /></div>
        <Card.Body style={{ backgroundColor: "#FAFAFA" }}>
          <div style={{ fontSize: "1.125rem", fontWeight: "400" }}>{value.name}</div>
          <div style={{ fontSize: "1.25rem", fontWeight: "500", color: "#FB374F", paddingBottom: "5px" }}>Rp. {value.price}</div>
          <Row>
            <Col>
            <div style={{ fontSize: "0.875rem", fontWeight: "400", color: "#8c8c8c" }}><PersonFill size={12} /> {value.seller.username}</div>
          <div style={{ fontSize: "0.875rem", fontWeight: "400", color: "#8c8c8c" }}><GeoAltFill size={12} /> {value.seller.address.name}</div>
          </Col>

            <Col>          
            <Button variant='danger' style={{marginLeft: '12rem'}}>Status</Button>
          <Button variant='outline-danger' style={{marginLeft: '1rem'}}>Hubungi</Button>
          </Col>

          </Row>
        </Card.Body>
      </Card>
    </a>
    </div>
  )
}
