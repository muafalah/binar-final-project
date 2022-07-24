import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { XCircle } from 'react-bootstrap-icons'
import { formatRupiah } from '../../../Utils/helper'

const CardNavbarNotification = ({ value, type }) => {

    const contentNotification = () => {
        return (
            <Row className='m-0'>
                <Col md={3} className='p-0 my-auto'>
                    <img src={value.bids.products.imageProductsSet[0].imageUrl} alt="Photo Product" height="70rem" width="70rem" />
                </Col>
                <Col md={9} className='p-0 my-auto ps-2'>
                    {type === "buyer" ?
                        <div style={{ fontSize: "0.875rem", color: "#8A8A8A", fontWeight: "400" }}>
                            {value.bids.bidStatus === "pending" ? "Penawaran sedang diproses" : null}
                            {value.bids.bidStatus === "processed" ? "Produk berhasil ditawar" : null}
                            {value.bids.bidStatus === "declined" ? "Penawaran kamu ditolak" : null}
                            {value.bids.bidStatus === "accepted" ? "Produk berhasil dibeli" : null}
                        </div>
                        : null
                    }
                    {type === "seller" ?
                        <div style={{ fontSize: "0.875rem", color: "#8A8A8A", fontWeight: "400" }}>
                            {value.bids.bidStatus === "pending" ? "Penawaran baru" : null}
                            {value.bids.bidStatus === "processed" ? "Penawaran diterima" : null}
                            {value.bids.bidStatus === "declined" ? "Penawaran ditolak" : null}
                            {value.bids.bidStatus === "accepted" ? "Produk telah terjual" : null}
                        </div>
                        : null
                    }
                    <div style={{ fontSize: "0.875rem", color: "black" }}>{value.bids.products.productName}</div>
                    <span style={{ fontSize: "0.75rem", color: "#8A8A8A", textDecoration: "line-through" }}>Rp. {formatRupiah(value.bids.products.price)}</span>
                    <span className="ms-2" style={{ fontSize: "0.875rem", color: "#fb374f", fontWeight: "600" }}>Rp. {formatRupiah(value.bids.bidPrice)}</span>
                </Col>
            </Row>
        )
    }

    return (
        <>
            {type === "buyer" ?
                <a href={'/dashboard/offer/detail/' + value.bids.bidId}>
                    {contentNotification()}
                </a>
                : null
            }
            {type === "seller" ?
                <a href={'/dashboard/offer/detail/' + value.bids.bidId}>
                    {contentNotification()}
                </a>
                : null
            }
        </>
    )
}

export default CardNavbarNotification