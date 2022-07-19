import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { XCircle } from 'react-bootstrap-icons'
import { formatRupiah } from '../../../Utils/helper'

const CardNavbarNotification = ({ value }) => {
    return (
        <a href={'/dashboard/offer/detail/' + value.offer.id_offer}>
            <Row className='m-0'>
                <Col md={3} className='p-0'>
                    <img src={value.product.image} alt="Photo Product" height="70rem" width="70rem" />
                </Col>
                <Col md={8} className='p-0'>
                    <div style={{ fontSize: "0.875rem", color: "#8A8A8A", fontWeight: "400" }}>
                        {value.offer.status === "pending" ? "Penawaran Baru" : null}
                        {value.offer.status === "processed" ? "Penawaran Diterima" : null}
                        {value.offer.status === "declined" ? "Penawaran Ditolak" : null}
                        {value.offer.status === "accepted" ? "Produk Berhasil Dijual" : null}
                    </div>
                    <div style={{ fontSize: "0.875rem", color: "black" }}>{value.product.name}</div>
                    <span style={{ fontSize: "0.75rem", color: "#8A8A8A", textDecoration: "line-through" }}>Rp. {formatRupiah(value.product.price)}</span>
                    <span className="ms-2" style={{ fontSize: "0.875rem", color: "#fb374f", fontWeight: "600" }}>Rp. {formatRupiah(value.offer.price)}</span>
                </Col>
                <Col md={1} className='p-0' >
                    <div className="d-flex align-content-center justify-content-center">
                        <XCircle className='m-0 p-0' style={{ color: "#8A8A8A" }} size={18} />
                    </div>
                </Col>
            </Row>
        </a>
    )
}

export default CardNavbarNotification