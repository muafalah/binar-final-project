import React from 'react'
import { Badge, Button, Col, Row } from 'react-bootstrap'
import { Link } from 'react-bootstrap-icons'
import { formatRupiah, formatTimestamp } from '../../../Utils/helper'
import style from './CardTransaction.module.css'

const CardTransaction = ({ value }) => {
    return (
        <Row className="m-0">
            <Col xs={12} className={'p-0 pt-1 pb-1 ps-2 pe-2 ' + style.box_top}>
                <div className="d-flex">
                    <div className="w-100">
                        {value.status === "pending" ? <span style={{ fontSize: "0.875rem" }}>Ditawar Sejak : </span> : null}
                        {value.status === "processed" ? <span style={{ fontSize: "0.875rem" }}>Diterima Sejak : </span> : null}
                        {value.status === "declined" ? <span style={{ fontSize: "0.875rem" }}>Ditolak Sejak : </span> : null}
                        {value.status === "accepted" ? <span style={{ fontSize: "0.875rem" }}>Selesai Sejak : </span> : null}
                        <span style={{ fontSize: "0.875rem", color: "#6c757d" }}>{formatTimestamp(value.updatedAt)}</span>
                    </div>
                    <div>
                        {value.status === "pending" ? <Badge style={{ fontSize: "0.875rem", fontWeight: "400" }} bg="secondary">Belum Direspon</Badge> : null}
                        {value.status === "processed" ? <Badge style={{ fontSize: "0.875rem", fontWeight: "400" }} bg="success">Tawaran Diterima</Badge> : null}
                        {value.status === "declined" ? <Badge style={{ fontSize: "0.875rem", fontWeight: "400" }} bg="danger">Tawaran Ditolak</Badge> : null}
                        {value.status === "accepted" ? <Badge style={{ fontSize: "0.875rem", fontWeight: "400" }} bg="dark">Selesai</Badge> : null}
                    </div>
                </div>
            </Col>
            <Col xs={12} className={'p-2 ' + style.box_middle}>
                <Row className="m-0">
                    <Col md={8} xs={12} className="p-0">
                        <a href={'/product/' + value.product.id_product} className="d-flex gap-3">
                            <div className="my-auto"><img src={value.product.image} alt="Photo Product" height="90rem" width="90rem" /></div>
                            <div className="my-auto d-grid gap-1">
                                <div>
                                    <div style={{ fontSize: "0.875rem", color: "#8A8A8A" }}>{value.product.category.name}</div>
                                    <div style={{ fontWeight: "500", color: "black" }}>{value.product.name}</div>
                                </div>
                                <div><span style={{ fontWeight: "400", color: "#8A8A8A", textDecoration: "line-through" }}>Rp. {formatRupiah(value.product.price)}</span>  <span style={{ fontSize: "1.125rem", fontWeight: "600", color: "#fb374f" }}>Rp. {formatRupiah(value.price)}</span></div>
                            </div>
                        </a>
                        <hr className={'m-0 p-0 mt-3 mb-3 ' + style.line_horizontal} />
                    </Col>
                    <Col md={4} xs={12} className="p-0">
                        <div className="d-flex">
                            <div className={'my-auto me-3 ' + style.line_vertical}></div>
                            <a href={'/seller/' + value.user.username} className="w-100 d-flex gap-3 mb-2 ps-2 pe-2 ps-md-0 pe-md-0">
                                <div className='my-auto'><img src={value.user.image} alt="Photo Product" height="50rem" width="50rem" style={{ borderRadius: "8px" }} /></div>
                                <div className='my-auto w-100'>
                                    <div style={{ color: "black" }}><b>{value.user.fullname}</b></div>
                                    <div><span style={{ fontSize: "0.875rem", color: "#8A8A8A" }}>{value.user.city.name}</span></div>
                                </div>
                                <div className={'my-auto ' + style.button_user}><Link to={'/seller/' + value.user.username}><Button variant="outline-secondary">Lihat</Button></Link></div>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Col>
            <Col xs={12} className={'p-2 ' + style.box_bottom}>
                {value.status === "pending" ?
                    <div className="d-flex gap-2 justify-content-end">
                        <Button className={style.button_respon} variant="danger">Batalkan Transaksi</Button>
                        <Button href={'/dashboard/transaction/detail/' + value.id_offer} className={style.button_respon} variant="outline-dark">Detail Transaksi</Button>
                    </div>
                    : null
                }
                {value.status === "processed" ?
                    <div className="d-flex gap-2 justify-content-end">
                        <Button className={style.button_respon} variant="dark">Hubungi Penjual</Button>
                        <Button href={'/dashboard/transaction/detail/' + value.id_offer} className={style.button_respon} variant="outline-dark">Detail Transaksi</Button>
                    </div>
                    : null
                }
                {value.status === "declined" ?
                    <div className="d-flex gap-2 justify-content-end">
                        <Button className={style.button_respon} variant="success">Tawar Ulang</Button>
                        <Button href={'/dashboard/transaction/detail/' + value.id_offer} className={style.button_respon} variant="outline-dark">Detail Transaksi</Button>
                    </div>
                    : null
                }
                {value.status === "accepted" ?
                    <div className="d-flex gap-2 justify-content-end">
                        <Button className={style.button_respon} variant="success">Cetak Bukti</Button>
                        <Button href={'/dashboard/transaction/detail/' + value.id_offer} className={style.button_respon} variant="outline-dark">Detail Transaksi</Button>
                    </div>
                    : null
                }
            </Col>
        </Row>
    )
}

export default CardTransaction