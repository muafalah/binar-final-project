import React from "react"
import { Badge, Button, Card, Col, Row } from "react-bootstrap"
import { GeoAltFill, PencilSquare, PersonFill, Trash, GearFill } from "react-bootstrap-icons"
import { Link } from "react-router-dom"
import { formatRupiah } from "../../../Utils/helper"
import style from "./CardProduct.module.css"

const CardProduct = ({ value, type }) => {
  return (
    <>
      {type === "default" ?
        <a href={'/product/' + value.id_product} style={{ color: "black", borderRadius: "8px" }}>
          <Card className={`mt-1 mb-1 ${style.cardproduct}`}>
            <div className="d-grid justify-content-center pt-2 pb-2"><Card.Img variant="top" src={value.image} style={{ height: "10rem", width: "min-content" }} /></div>
            <Card.Body style={{ backgroundColor: "#FAFAFA" }} className="d-grid gap-1">
              <div style={{ fontSize: "1.125rem", fontWeight: "400" }}>{value.name}</div>
              {value.status === "sold" ? <div className="d-flex gap-2"><span style={{ fontSize: "1.25rem", fontWeight: "600", color: "#8A8A8A", paddingBottom: "5px", textDecoration: "line-through" }}>Rp. {formatRupiah(value.price)}</span><span><Badge style={{ fontSize: "0.75rem", fontWeight: "400" }} bg="danger">Habis</Badge></span></div> : <div style={{ fontSize: "1.25rem", fontWeight: "600", color: "#FB374F", paddingBottom: "5px" }}>Rp. {formatRupiah(value.price)}</div>}
              <div>
                <div style={{ fontSize: "0.825rem", fontWeight: "400", color: "#777777" }} className="w-100 d-flex"><PersonFill className='my-auto me-1 mb-1' size={14} /> {value.seller.fullname}</div>
                <div style={{ fontSize: "0.825rem", fontWeight: "400", color: "#777777" }} className="w-100 d-flex"><GeoAltFill className='my-auto me-1 mb-1' size={14} /> {value.seller.city.name}</div>
              </div>
            </Card.Body>
          </Card>
        </a>
        : null
      }
      {type === "available" ?
        <a href={'/product/' + value.id_product} style={{ color: "black", borderRadius: "8px" }}>
          <Card className={'mt-1 mb-1 '}>
            <div className="d-grid justify-content-center pt-2 pb-2"><Card.Img variant="top" src={value.image} style={{ height: "10rem", width: "min-content" }} /></div>
            <Card.Body style={{ backgroundColor: "#FAFAFA" }} className="d-grid gap-1">
              <div style={{ fontSize: "0.875rem", color: "#8a8a8a" }}>{value.category.name}</div>
              <div style={{ fontSize: "1.125rem", fontWeight: "400" }}>{value.name}</div>
              {value.status === "sold" ? <div className="d-flex gap-2"><span style={{ fontSize: "1.25rem", fontWeight: "600", color: "#8A8A8A", paddingBottom: "5px", textDecoration: "line-through" }}>Rp. {formatRupiah(value.price)}</span><span><Badge style={{ fontSize: "0.75rem", fontWeight: "400" }} bg="danger">Habis</Badge></span></div> : <div style={{ fontSize: "1.25rem", fontWeight: "600", color: "#FB374F", paddingBottom: "5px" }}>Rp. {formatRupiah(value.price)}</div>}
              <Row className="m-0 mt-2">
                <Col xs={6} className="p-0 pe-1">
                  <Button className="w-100 d-flex align-content-center justify-content-center" variant="success" href={'/dashboard/product/edit/' + value.id_product}><PencilSquare className='my-auto me-2' size={16} /> Edit</Button>
                </Col>
                <Col xs={6} className="p-0 ps-1">
                  <Button className="w-100 d-flex align-content-center justify-content-center" variant="outline-danger"><Trash className='my-auto me-2' size={16} /> Hapus</Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </a>
        : null
      }
      {type === "sold" ?
        <a href={'/product/' + value.id_product} style={{ color: "black", borderRadius: "8px" }}>
          <Card className={'mt-1 mb-1 '}>
            <div className="d-grid justify-content-center pt-2 pb-2"><Card.Img variant="top" src={value.image} style={{ height: "10rem", width: "min-content" }} /></div>
            <Card.Body style={{ backgroundColor: "#FAFAFA" }} className="d-grid gap-1">
              <div style={{ fontSize: "0.875rem", color: "#8a8a8a" }}>{value.category.name}</div>
              <div style={{ fontSize: "1.125rem", fontWeight: "400" }}>{value.name}</div>
              {value.status === "sold" ? <div className="d-flex gap-2"><span style={{ fontSize: "1.25rem", fontWeight: "600", color: "#8A8A8A", paddingBottom: "5px", textDecoration: "line-through" }}>Rp. {formatRupiah(value.price)}</span><span><Badge style={{ fontSize: "0.75rem", fontWeight: "400" }} bg="danger">Habis</Badge></span></div> : <div style={{ fontSize: "1.25rem", fontWeight: "600", color: "#FB374F", paddingBottom: "5px" }}>Rp. {formatRupiah(value.price)}</div>}
              <Row className="m-0 mt-2">
                <Col xs={6} className="p-0 pe-1">
                  <Button className="w-100 d-flex align-content-center justify-content-center" variant="success"><GearFill className='my-auto me-2' size={16} /> Status</Button>
                </Col>
                <Col xs={6} className="p-0 ps-1">
                  <Button className="w-100 d-flex align-content-center justify-content-center" variant="outline-danger"><Trash className='my-auto me-2' size={16} /> Hapus</Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </a>
        : null
      }
      {type === "archive" ?
        <a href={'/product/preview/' + value.id_product} style={{ color: "black", borderRadius: "8px" }}>
          <Card className={'mt-1 mb-1 '}>
            <div className="d-grid justify-content-center pt-2 pb-2"><Card.Img variant="top" src={value.image} style={{ height: "10rem", width: "min-content" }} /></div>
            <Card.Body style={{ backgroundColor: "#FAFAFA" }} className="d-grid gap-1">
              <div style={{ fontSize: "0.875rem", color: "#8a8a8a" }}>{value.category.name}</div>
              <div style={{ fontSize: "1.125rem", fontWeight: "400" }}>{value.name}</div>
              {value.status === "sold" ? <div className="d-flex gap-2"><span style={{ fontSize: "1.25rem", fontWeight: "600", color: "#8A8A8A", paddingBottom: "5px", textDecoration: "line-through" }}>Rp. {formatRupiah(value.price)}</span><span><Badge style={{ fontSize: "0.75rem", fontWeight: "400" }} bg="danger">Habis</Badge></span></div> : <div style={{ fontSize: "1.25rem", fontWeight: "600", color: "#FB374F", paddingBottom: "5px" }}>Rp. {formatRupiah(value.price)}</div>}
              <Row className="m-0 mt-2">
                <Col xs={6} className="p-0 pe-1">
                  <Button className="w-100 d-flex align-content-center justify-content-center" variant="success">Terbitkan</Button>
                </Col>
                <Col xs={6} className="p-0 ps-1">
                  <Button className="w-100 d-flex align-content-center justify-content-center" variant="outline-danger"><Trash className='my-auto me-2' size={16} /> Hapus</Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </a>
        : null
      }
      {type === "favorit" ?
        <a href={'/product/' + value.id_product} style={{ color: "black", borderRadius: "8px" }}>
          <Card className={'mt-1 mb-1 '}>
            <div className="d-grid justify-content-center pt-2 pb-2"><Card.Img variant="top" src={value.image} style={{ height: "10rem", width: "min-content" }} /></div>
            <Card.Body style={{ backgroundColor: "#FAFAFA" }} className="d-grid gap-1">
              <div style={{ fontSize: "1.125rem", fontWeight: "400" }}>{value.name}</div>
              {value.status === "sold" ? <div className="d-flex gap-2"><span style={{ fontSize: "1.25rem", fontWeight: "600", color: "#8A8A8A", paddingBottom: "5px", textDecoration: "line-through" }}>Rp. {formatRupiah(value.price)}</span><span><Badge style={{ fontSize: "0.75rem", fontWeight: "400" }} bg="danger">Habis</Badge></span></div> : <div style={{ fontSize: "1.25rem", fontWeight: "600", color: "#FB374F", paddingBottom: "5px" }}>Rp. {formatRupiah(value.price)}</div>}
              <div>
                <div style={{ fontSize: "0.825rem", fontWeight: "400", color: "#777777" }} className="w-100 d-flex"><PersonFill className='my-auto me-1 mb-1' size={14} /> {value.seller.fullname}</div>
                <div style={{ fontSize: "0.825rem", fontWeight: "400", color: "#777777" }} className="w-100 d-flex"><GeoAltFill className='my-auto me-1 mb-1' size={14} /> {value.seller.city.name}</div>
              </div>
              <Row className="m-0 mt-2">
                <Col xs={6} className="p-0 pe-1">
                  <Button className="w-100 d-flex align-content-center justify-content-center" variant="dark">Tawar</Button>
                </Col>
                <Col xs={6} className="p-0 ps-1">
                  <Button className="w-100 d-flex align-content-center justify-content-center" variant="outline-danger"><Trash className='my-auto me-2' size={16} /> Hapus</Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </a>
        : null
      }
    </>
  )
}

export default CardProduct
