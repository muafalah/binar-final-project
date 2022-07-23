import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { formatRupiah } from '../../../Utils/helper'
import style from './CardNavbarFavorit.module.css'

const CardNavbarFavorit = ({ value }) => {

    return (
        <a href={'/product/' + value.products.productId}>
            <Row className='m-0'>
                <Col md={3} className='p-0'>
                    <img src={value.products.imageProductsSet[0].imageUrl} alt="Photo Product" height="70rem" width="70rem" />
                </Col>
                <Col md={9} className='p-0 ps-2'>
                    <div className="mb-1" style={{ fontSize: "0.875rem", color: "black" }}>{value.products.productName}</div>
                    <div style={{ fontSize: "0.875rem", color: "#fb374f", fontWeight: "600" }}>Rp. {formatRupiah(value.products.price)}</div>
                </Col>
            </Row>
        </a>
    )
}

export default CardNavbarFavorit