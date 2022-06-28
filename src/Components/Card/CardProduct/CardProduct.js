import React from "react"
import { Card } from "react-bootstrap"
import { GeoAltFill, PersonFill } from "react-bootstrap-icons"
import style from "./CardProduct.module.css"

const CardProduct = ({ value }) => {
  return (
    <a href={'/product/' + value.id_product} style={{ color: "black" }}>
      <Card className={'mt-1 mb-1 '}>
        <div className="d-grid justify-content-center pt-2 pb-2"><Card.Img variant="top" src={value.image} style={{ height: "10rem", width: "min-content" }} /></div>
        <Card.Body style={{ backgroundColor: "#FAFAFA" }}>
          <div style={{ fontSize: "1.125rem", fontWeight: "400" }}>{value.name}</div>
          <div style={{ fontSize: "1.25rem", fontWeight: "500", color: "#FB374F", paddingBottom: "5px" }}>Rp. {value.price}</div>
          <div style={{ fontSize: "0.875rem", fontWeight: "400", color: "#8c8c8c" }}><PersonFill size={12} /> {value.seller.username}</div>
          <div style={{ fontSize: "0.875rem", fontWeight: "400", color: "#8c8c8c" }}><GeoAltFill size={12} /> {value.seller.address.name}</div>
        </Card.Body>
      </Card>
    </a>
  )
}

export default CardProduct
