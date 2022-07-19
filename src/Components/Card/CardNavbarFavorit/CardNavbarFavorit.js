import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { XCircle } from 'react-bootstrap-icons'
import { formatRupiah } from '../../../Utils/helper'
import style from './CardNavbarFavorit.module.css'

const CardNavbarFavorit = ({ value }) => {
    return (
        <a href={'/product/' + value.id_product}>
            <Row className='m-0'>
                <Col md={3} className='p-0'>
                    <img src={value.image} alt="Photo Product" height="70rem" width="70rem" />
                </Col>
                <Col md={8} className='p-0'>
                    <div className="mb-1" style={{ fontSize: "0.875rem", color: "black" }}>{value.name}</div>
                    <div style={{ fontSize: "0.875rem", color: "#fb374f", fontWeight: "600" }}>Rp. {formatRupiah(value.price)}</div>
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

export default CardNavbarFavorit