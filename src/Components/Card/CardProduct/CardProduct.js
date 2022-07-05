import React from "react"
import { Card } from "react-bootstrap"
import { GeoAltFill, PersonFill } from "react-bootstrap-icons"
import { formatRupiah } from "../../../Utils/helper"
import style from "./CardProduct.module.css"

const CardProduct = ({ value }) => {
  return (
    <a href={'/product/' + value.id_product} style={{ color: "black", borderRadius: "8px" }}>
      <Card className={'mt-1 mb-1 '}>
        <div className="d-grid justify-content-center pt-2 pb-2"><Card.Img variant="top" src={value.image} style={{ height: "10rem", width: "min-content" }} /></div>
        <Card.Body style={{ backgroundColor: "#FAFAFA" }} className="d-grid gap-1">
          <div style={{ fontSize: "1.125rem", fontWeight: "400" }}>{value.name}</div>
          <div style={{ fontSize: "1.25rem", fontWeight: "600", color: "#FB374F", paddingBottom: "5px" }}>Rp. {formatRupiah(value.price)}</div>
          <div>
            <div style={{ fontSize: "0.825rem", fontWeight: "400", color: "#777777" }} className="w-100 d-flex"><PersonFill className='my-auto me-1 mb-1' size={14} /> {value.seller.fullname}</div>
            <div style={{ fontSize: "0.825rem", fontWeight: "400", color: "#777777" }} className="w-100 d-flex"><GeoAltFill className='my-auto me-1 mb-1' size={14} /> {value.seller.city.name}</div>
          </div>
        </Card.Body>
      </Card>
    </a>
  )
}

export default CardProduct
