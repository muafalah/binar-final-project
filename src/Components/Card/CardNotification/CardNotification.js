import React from 'react'
import { Col, Row, Badge } from 'react-bootstrap'
import { formatRupiah, formatTimestamp } from '../../../Utils/helper'
import style from './CardNotification.module.css'

const CardNotification = ({ value, type }) => {

    const contentNotification = () => {
        return <>
            <Row className={'m-0 ' + style.box_md}>
                <Col xs={12} className={'p-2 ' + style.box}>
                    <Row className={'m-0 '}>
                        <Col xs={9} className="p-0">
                            <div className="d-flex gap-3">
                                <div className="my-auto"><img src={value.bids.products.imageProductsSet[0].imageUrl} alt="Photo Product" height="90rem" width="90rem" /></div>
                                <div className="my-auto d-grid gap-1">
                                    <div>
                                        {type === "buyer" ?
                                            <div style={{ color: "#8A8A8A", fontWeight: "400" }} className="mb-1">
                                                {value.bids.bidStatus === "pending" ? "Penawaran sedang diproses" : null}
                                                {value.bids.bidStatus === "processed" ? "Produk berhasil ditawar" : null}
                                                {value.bids.bidStatus === "declined" ? "Penawaran kamu ditolak" : null}
                                                {value.bids.bidStatus === "accepted" ? "Produk berhasil dibeli" : null}
                                            </div>
                                            : null
                                        }
                                        {type === "seller" ?
                                            <div style={{ color: "#8A8A8A", fontWeight: "400" }} className="mb-1">
                                                {value.bids.bidStatus === "pending" ? "Penawaran baru" : null}
                                                {value.bids.bidStatus === "processed" ? "Penawaran diterima" : null}
                                                {value.bids.bidStatus === "declined" ? "Penawaran ditolak" : null}
                                                {value.bids.bidStatus === "accepted" ? "Produk telah terjual" : null}
                                            </div>
                                            : null
                                        }
                                        <div style={{ fontWeight: "500", color: "black", fontSize: "1.125rem" }}>{value.bids.products.productName}</div>
                                    </div>
                                    <div><span style={{ fontWeight: "500", color: "#8A8A8A", textDecoration: "line-through" }}>Rp. {formatRupiah(value.bids.products.price)}</span>  <span style={{ fontWeight: "600", color: "#fb374f" }}>Rp. {formatRupiah(value.bids.bidPrice)}</span></div>
                                </div>
                            </div>
                        </Col>
                        <Col xs={3} className="p-0">
                            <div className="d-flex m-1">
                                <span className="ms-auto" style={{ color: "#8A8A8A", fontSize: "0.875rem" }}>{formatTimestamp(value.updatedAt)}</span>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className={'m-0 ' + style.box_sm}>
                <Col xs={12} className={'p-2 ' + style.box}>
                    <Row className={'m-0 '}>
                        <Col xs={7} className="p-0">
                            {type === "buyer" ?
                                <div style={{ color: "#8A8A8A" }} className="mb-2">
                                    {value.bids.bidStatus === "pending" ? <Badge style={{ fontSize: "0.875rem", fontWeight: "400" }} bg="secondary">Penawaran sedang diproses</Badge> : null}
                                    {value.bids.bidStatus === "processed" ? <Badge style={{ fontSize: "0.875rem", fontWeight: "400" }} bg="secondary">Produk berhasil ditawar</Badge> : null}
                                    {value.bids.bidStatus === "declined" ? <Badge style={{ fontSize: "0.875rem", fontWeight: "400" }} bg="secondary">Penawaran kamu ditolak</Badge> : null}
                                    {value.bids.bidStatus === "accepted" ? <Badge style={{ fontSize: "0.875rem", fontWeight: "400" }} bg="secondary">Produk Berhasil Dibeli</Badge> : null}
                                </div>
                                : null
                            }
                            {type === "seller" ?
                                <div style={{ color: "#8A8A8A" }} className="mb-2">
                                    {value.bids.bidStatus === "pending" ? <Badge style={{ fontSize: "0.875rem", fontWeight: "400" }} bg="secondary">Penawaran baru</Badge> : null}
                                    {value.bids.bidStatus === "processed" ? <Badge style={{ fontSize: "0.875rem", fontWeight: "400" }} bg="secondary">Penawaran diterima</Badge> : null}
                                    {value.bids.bidStatus === "declined" ? <Badge style={{ fontSize: "0.875rem", fontWeight: "400" }} bg="secondary">Penawaran ditolak</Badge> : null}
                                    {value.bids.bidStatus === "accepted" ? <Badge style={{ fontSize: "0.875rem", fontWeight: "400" }} bg="secondary">Produk berhasil terjual</Badge> : null}
                                </div>
                                : null
                            }
                        </Col>
                        <Col xs={5} className="p-0">
                            <div className="d-flex">
                                <span className="ms-auto" style={{ color: "#8A8A8A" }}>{formatTimestamp(value.updatedAt)}</span>
                            </div>
                        </Col>
                        <Col xs={12} className="p-0">
                            <div className="d-flex gap-3">
                                <div className="my-auto"><img src={value.bids.products.imageProductsSet[0].imageUrl} alt="Photo Product" height="90rem" width="90rem" /></div>
                                <div className="my-auto d-grid gap-1">
                                    <div>
                                        <div style={{ fontWeight: "500", color: "black" }}>{value.bids.products.productName}</div>
                                    </div>
                                    <div><span style={{ fontWeight: "400", color: "#8A8A8A", textDecoration: "line-through" }}>Rp. {formatRupiah(value.bids.products.price)}</span>  <span style={{ fontWeight: "600", color: "#fb374f" }}>Rp. {formatRupiah(value.bids.bidPrice)}</span></div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    }

    return (
        <>
            {type === "buyer" ?
                <a href={'/dashboard/transaction/detail/' + value.bids.bidId}>
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

export default CardNotification