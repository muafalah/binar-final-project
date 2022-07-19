import React from 'react'
import { Col, Row, Badge, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
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
                                <div className="my-auto"><img src={value.product.image} alt="Photo Product" height="90rem" width="90rem" /></div>
                                <div className="my-auto d-grid gap-1">
                                    <div>
                                        {type === "buyer" ?
                                            <div style={{ color: "#8A8A8A", fontWeight: "500" }} className="mb-2">
                                                {value.offer.status === "pending" ? "Penawaran sedang diproses" : null}
                                                {value.offer.status === "processed" ? "Produk berhasil ditawar" : null}
                                                {value.offer.status === "declined" ? "Penawaran kamu ditolak" : null}
                                                {value.offer.status === "accepted" ? "Produk Berhasil Dibeli" : null}
                                            </div>
                                            : null
                                        }
                                        {type === "seller" ?
                                            <div style={{ color: "#8A8A8A", fontWeight: "500" }} className="mb-2">
                                                {value.offer.status === "pending" ? "Penawaran baru" : null}
                                                {value.offer.status === "processed" ? "Penawaran diterima" : null}
                                                {value.offer.status === "declined" ? "Penawaran ditolak" : null}
                                                {value.offer.status === "accepted" ? "Produk telah terjual" : null}
                                            </div>
                                            : null
                                        }
                                        <div style={{ fontWeight: "500", color: "black" }}>{value.product.name}</div>
                                    </div>
                                    <div><span style={{ fontWeight: "400", color: "#8A8A8A", textDecoration: "line-through" }}>Rp. {formatRupiah(value.product.price)}</span>  <span style={{ fontWeight: "600", color: "#fb374f" }}>Rp. {formatRupiah(value.offer.price)}</span></div>
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
                                    {value.offer.status === "pending" ? <Badge style={{ fontSize: "0.875rem", fontWeight: "400" }} bg="secondary">Penawaran sedang diproses</Badge> : null}
                                    {value.offer.status === "processed" ? <Badge style={{ fontSize: "0.875rem", fontWeight: "400" }} bg="secondary">Produk berhasil ditawar</Badge> : null}
                                    {value.offer.status === "declined" ? <Badge style={{ fontSize: "0.875rem", fontWeight: "400" }} bg="secondary">Penawaran kamu ditolak</Badge> : null}
                                    {value.offer.status === "accepted" ? <Badge style={{ fontSize: "0.875rem", fontWeight: "400" }} bg="secondary">Produk Berhasil Dibeli</Badge> : null}
                                </div>
                                : null
                            }
                            {type === "seller" ?
                                <div style={{ color: "#8A8A8A" }} className="mb-2">
                                    {value.offer.status === "pending" ? <Badge style={{ fontSize: "0.875rem", fontWeight: "400" }} bg="secondary">Penawaran baru</Badge> : null}
                                    {value.offer.status === "processed" ? <Badge style={{ fontSize: "0.875rem", fontWeight: "400" }} bg="secondary">Penawaran diterima</Badge> : null}
                                    {value.offer.status === "declined" ? <Badge style={{ fontSize: "0.875rem", fontWeight: "400" }} bg="secondary">Penawaran ditolak</Badge> : null}
                                    {value.offer.status === "accepted" ? <Badge style={{ fontSize: "0.875rem", fontWeight: "400" }} bg="secondary">Produk berhasil terjual</Badge> : null}
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
                                <div className="my-auto"><img src={value.product.image} alt="Photo Product" height="90rem" width="90rem" /></div>
                                <div className="my-auto d-grid gap-1">
                                    <div>
                                        <div style={{ fontWeight: "500", color: "black" }}>{value.product.name}</div>
                                    </div>
                                    <div><span style={{ fontWeight: "400", color: "#8A8A8A", textDecoration: "line-through" }}>Rp. {formatRupiah(value.product.price)}</span>  <span style={{ fontWeight: "600", color: "#fb374f" }}>Rp. {formatRupiah(value.offer.price)}</span></div>
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
                <a href={'/dashboard/transaction/detail/' + value.offer.id_offer}>
                    {contentNotification()}
                </a>
                : null
            }
            {type === "seller" ?
                <a href={'/dashboard/offer/detail/' + value.offer.id_offer}>
                    {contentNotification()}
                </a>
                : null
            }
        </>
    )
}

export default CardNotification