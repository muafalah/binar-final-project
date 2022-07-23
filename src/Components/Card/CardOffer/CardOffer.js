import React from 'react'
import { Badge, Button, Col, Row } from 'react-bootstrap'
import { formatCamelCase, formatRupiah, formatTimestamp } from '../../../Utils/helper'
import style from './CardOffer.module.css'

const CardOffer = ({ value }) => {
    return (
        <Row className="m-0">
            <Col xs={12} className={'p-0 pt-1 pb-1 ps-2 pe-2 ' + style.box_top}>
                <div className="d-flex">
                    <div className="w-100">
                        {value.bidStatus === "pending" ? <span style={{ fontSize: "0.875rem" }}>Ditawar Sejak : </span> : null}
                        {value.bidStatus === "processed" ? <span style={{ fontSize: "0.875rem" }}>Diterima Sejak : </span> : null}
                        {value.bidStatus === "declined" ? <span style={{ fontSize: "0.875rem" }}>Ditolak Sejak : </span> : null}
                        {value.bidStatus === "accepted" ? <span style={{ fontSize: "0.875rem" }}>Selesai Sejak : </span> : null}
                        <span style={{ fontSize: "0.875rem", color: "#6c757d" }}>{formatTimestamp(value.updatedAt)}</span>
                    </div>
                    <div>
                        {value.bidStatus === "pending" ? <Badge style={{ fontSize: "0.875rem", fontWeight: "400" }} bg="secondary">Belum Direspon</Badge> : null}
                        {value.bidStatus === "processed" ? <Badge style={{ fontSize: "0.875rem", fontWeight: "400" }} bg="success">Tawaran Diterima</Badge> : null}
                        {value.bidStatus === "declined" ? <Badge style={{ fontSize: "0.875rem", fontWeight: "400" }} bg="danger">Tawaran Ditolak</Badge> : null}
                        {value.bidStatus === "accepted" ? <Badge style={{ fontSize: "0.875rem", fontWeight: "400" }} bg="dark">Selesai</Badge> : null}
                    </div>
                </div>
            </Col>
            <Col xs={12} className={'p-2 ' + style.box_middle}>
                <Row className="m-0">
                    <Col md={8} xs={12} className="p-0">
                        <a href={'/product/' + value.products.productId} className="d-flex gap-3">
                            <div className="my-auto"><img src={value.products.imageProductsSet[0].imageUrl} alt="Photo Product" height="90rem" width="90rem" style={{ borderRadius: "8px" }} /></div>
                            <div className="my-auto d-grid gap-1">
                                <div>
                                    <div style={{ fontSize: "0.875rem", color: "#8A8A8A" }}>{value.products.categories.categoryName}</div>
                                    <div style={{ fontWeight: "500", color: "black" }}>{value.products.productName}</div>
                                </div>
                                <div><span style={{ fontWeight: "400", color: "#8A8A8A", textDecoration: "line-through" }}>Rp. {formatRupiah(value.products.price)}</span>  <span style={{ fontSize: "1.125rem", fontWeight: "600", color: "#fb374f" }}>Rp. {formatRupiah(value.bidPrice)}</span></div>
                            </div>
                        </a>
                        <hr className={'m-0 p-0 mt-3 mb-3 ' + style.line_horizontal} />
                    </Col>
                    <Col md={4} xs={12} className="p-0">
                        <div className="d-flex">
                            <div className={'my-auto me-3 ' + style.line_vertical}></div>
                            <div className="w-100 d-flex gap-3 mb-2 ps-2 pe-2 ps-md-0 pe-md-0">
                                <a href={'/seller/' + value.users.username} className="w-100 d-flex gap-3">
                                    <div className='my-auto'><img src={value.users.img} alt="Photo Product" height="50rem" width="50rem" style={{ borderRadius: "8px" }} /></div>
                                    <div className='my-auto w-100'>
                                        <div style={{ color: "black" }}><b>{formatCamelCase(value.users.fullName)}</b></div>
                                        <div><span style={{ fontSize: "0.875rem", color: "#8A8A8A" }}>{formatCamelCase(value.users.cities.cityName)}</span></div>
                                    </div>
                                </a>
                                <div className={'my-auto ' + style.button_user}><Button variant="outline-secondary" href={'/seller/' + value.users.username}>Lihat</Button></div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Col>
            <Col xs={12} className={'p-2 ' + style.box_bottom}>
                {value.bidStatus === "pending" ?
                    <div className="d-flex gap-2 justify-content-end">
                        <Button className={style.button_respon} variant="success">Beri Tanggapan</Button>
                        <Button href={'/dashboard/offer/detail/' + value.bidId} className={style.button_respon} variant="outline-dark">Detail Penawaran</Button>
                    </div>
                    : null
                }
                {value.bidStatus === "processed" ?
                    <div className="d-flex gap-2 justify-content-end">
                        <Button className={style.button_respon} variant="dark">Ubah Status</Button>
                        <Button href={'/dashboard/offer/detail/' + value.bidId} className={style.button_respon} variant="outline-dark">Detail Penawaran</Button>
                    </div>
                    : null
                }
                {value.bidStatus === "declined" ?
                    <div className="d-flex gap-2 justify-content-end">
                        <Button className={style.button_respon} variant="secondary">Perbarui Status</Button>
                        <Button href={'/dashboard/offer/detail/' + value.bidId} className={style.button_respon} variant="outline-dark">Detail Penawaran</Button>
                    </div>
                    : null
                }
                {value.bidStatus === "accepted" ?
                    <div className="d-flex gap-2 justify-content-end">
                        <Button className={style.button_respon} variant="success">Cetak Bukti</Button>
                        <Button href={'/dashboard/offer/detail/' + value.bidId} className={style.button_respon} variant="outline-dark">Detail Penawaran</Button>
                    </div>
                    : null
                }
            </Col>
        </Row>
    )
}

export default CardOffer