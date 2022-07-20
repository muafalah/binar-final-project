import Aos from 'aos'
import React, { useEffect } from 'react'
import { Col, Container, Row, Button, Badge } from 'react-bootstrap'
import { ChatDotsFill, HeartFill } from 'react-bootstrap-icons'
import CardProduct from '../../../Components/Card/CardProduct/CardProduct'
import SliderProduct from '../../../Components/Slider/SliderProduct/SliderProduct'
import { formatDate, formatRupiah } from '../../../Utils/helper'
import { checkWishlist, dataDetailProduct, dataRelatedProduct } from '../../DataDummy'
import Layout from '../../Layout'
import style from './DetailProduct.module.css'

const DetailProduct = () => {

    useEffect(() => {
        Aos.init({ duration: 1800 })
    }, []);

    return (
        <Layout>
            <Container>
                <Row>
                    <Col lg={5} className="mt-3" style={{ backgroundColor: "white" }} data-aos="fade-right">
                        <div className="p-3">
                            <SliderProduct data={dataDetailProduct.image} />
                        </div>
                    </Col>
                    <Col lg={7}>
                        <div className='ps-lg-3'>
                            <Row>
                                <Col md={12} className="mt-3" style={{ backgroundColor: "white", }} data-aos="fade-left">
                                    <Row className="gap-3 pt-3 pb-3 ps-lg-2 pe-lg-2">
                                        <Col xs={12}>
                                            <h3 style={{ fontWeight: "500" }}>{dataDetailProduct.name}</h3>
                                            <div style={{ fontSize: "0.875rem", color: "#8A8A8A" }}>Terakhir diperbarui pada tanggal {formatDate(dataDetailProduct.updatedAt)}</div>
                                        </Col>
                                        <Col xs={12} className="mb-2">
                                            {dataDetailProduct.status === "sold" ? <div className="d-flex gap-2"><span><h3 style={{ color: "#8A8A8A", textDecoration: "line-through" }}>Rp. {formatRupiah(dataDetailProduct.price)},-</h3></span><span><Badge style={{ fontSize: "1rem", fontWeight: "400" }} bg="danger">Habis</Badge></span></div> : <h3 style={{ color: "#fb374f" }}>Rp. {formatRupiah(dataDetailProduct.price)},-</h3>}
                                        </Col>
                                        <Col xs={12} className={style.detail_lg}>
                                            <div style={{ backgroundColor: "#F4F4F4" }} className="d-flex gap-2 justify-content-between p-2">
                                                <div className="text-center w-100">
                                                    <b>Kategori</b>
                                                    <div><a style={{ color: "black" }} href={'/search/keyword=' + dataDetailProduct.category.name + '&type=product&sort=1&category=' + dataDetailProduct.category.id_category + '&location=null&minprice=null&maxprice=null'}>{dataDetailProduct.category.name}</a></div>
                                                </div>
                                                <div className={style.line}></div>
                                                <div className="text-center w-100">
                                                    <b>Lokasi</b>
                                                    <div><a style={{ color: "black" }} href={'/search/keyword=' + dataDetailProduct.category.name + '&type=product&sort=1&category=' + dataDetailProduct.category.id_category + '&location=' + dataDetailProduct.seller.city.id_city + '&minprice=null&maxprice=null'}>{dataDetailProduct.seller.city.name}</a></div>
                                                </div>
                                                <div className={style.line}></div>
                                                <div className="text-center w-100">
                                                    <b>Serial Number</b>
                                                    <div><a style={{ color: "black" }} href={'https://www.imei.info/apple-sn-check/?sn=' + dataDetailProduct.serial_number} target="_blank">{dataDetailProduct.serial_number}</a></div>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col xs={12} className={style.detail_sm}>
                                            <div style={{ backgroundColor: "#F4F4F4" }} className="d-grid gap-1 p-3">
                                                <div className="d-flex w-100">
                                                    <div className='w-100'><b>Kategori</b></div>
                                                    <div className='w-100'><a style={{ color: "black" }} href={'/search/keyword=' + dataDetailProduct.category.name + '&type=product&sort=1&category=' + dataDetailProduct.category.id_category + '&location=null&minprice=null&maxprice=null'}>{dataDetailProduct.category.name}</a></div>
                                                </div>
                                                <div className="d-flex w-100">
                                                    <div className='w-100'><b>Lokasi</b></div>
                                                    <div className='w-100'><a style={{ color: "black" }} href={'/search/keyword=' + dataDetailProduct.category.name + '&type=product&sort=1&category=' + dataDetailProduct.category.id_category + '&location=' + dataDetailProduct.seller.city.id_city + '&minprice=null&maxprice=null'}>{dataDetailProduct.seller.city.name}</a></div>
                                                </div>
                                                <div className="d-flex w-100">
                                                    <div className='w-100'><b>Serial Number</b></div>
                                                    <div className='w-100'><a style={{ color: "black" }} href={'https://www.imei.info/apple-sn-check/?sn=' + dataDetailProduct.serial_number} target="_blank">{dataDetailProduct.serial_number}</a></div>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col xs={12} className="mt-2">
                                            <Row>
                                                <Col lg={3} md={3} xs={5} className="mt-3">
                                                    {checkWishlist.status === true ? <Button className="w-100 d-flex align-content-center justify-content-center" size="lg" variant="dark" style={{ fontSize: "1.125rem" }}><HeartFill className='my-auto me-2' size={16} /> Favorit</Button> : null}
                                                    {checkWishlist.status === false ? <Button className="w-100 d-flex align-content-center justify-content-center" size="lg" variant="outline-dark" style={{ fontSize: "1.125rem" }}><HeartFill className='my-auto me-2' size={16} /> Favorit</Button> : null}
                                                </Col>
                                                <Col lg={4} md={4} xs={7} className="mt-3">
                                                    <a href={'https://wa.me/' + dataDetailProduct.seller.no_hp} target="_blank"><Button className="w-100 d-flex align-content-center justify-content-center" size="lg" variant="outline-dark" style={{ fontSize: "1.125rem" }}><ChatDotsFill className='my-auto me-2' size={16} /> Chat Penjual</Button></a>
                                                </Col>
                                                <Col lg={5} md={5} className="mt-3">
                                                    {dataDetailProduct.status === "sold" ? <Button className="w-100 d-flex align-content-center justify-content-center" size="lg" variant="danger" style={{ fontSize: "1.125rem" }} disabled>Tawar Harga</Button> : <Button className="w-100 d-flex align-content-center justify-content-center" size="lg" variant="danger" style={{ fontSize: "1.125rem" }}>Tawar Harga</Button>}
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col md={12} className="mt-3" style={{ backgroundColor: "white", }} data-aos="fade-left" data-aos-duration="3000">
                                    <Row className='mt-3 mb-3 ps-lg-2 pe-lg-2'>
                                        <Col md={2} xs={3}>
                                            <img src={dataDetailProduct.seller.image} alt="Profile Seller" style={{ borderRadius: "100px", width: "5rem", height: "5rem", overflow: "auto" }} />
                                        </Col>
                                        <Col md={7} xs={6} className="d-grid align-content-center gap-2">
                                            <div>
                                                <h5>{dataDetailProduct.seller.fullname}</h5>
                                                <div style={{ color: "#6C757D" }}>@{dataDetailProduct.seller.username}</div>
                                            </div>
                                        </Col>
                                        <Col md={3} xs={3} className="my-auto">
                                            <a href={'/seller/' + dataDetailProduct.seller.username}><Button className="w-100" variant="outline-secondary">Lihat</Button></a>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col lg={12} className="mt-3 pt-3 pb-3 ps-lg-3 pe-lg-3" style={{ backgroundColor: "white" }} data-aos="fade-up">
                        <h5 className="mt-2">Deskripsi</h5>
                        <hr />
                        <div>
                            <p>iPhone 13 Pro Max. Pembaruan sistem kamera Pro yang terbesar. Layar Super Retina XDR dengan ProMotion untuk penggunaan yang terasa lebih cepat dan responsif. Chip A15 Bionic yang secepat kilat. Desain kokoh dan kekuatan baterai terbaik yang pernah ada di iPhone.</p>
                            <ul>
                                <li>Layar Super Retina XDR 6,7 inci dengan ProMotion untuk penggunaan yang terasa lebih cepat dan responsif</li>
                                <li>Mode Sinematik menambahkan kedalaman bidang yang dangkal dan pindah fokus secara otomatis di video Anda</li>
                                <li>Sistem kamera Pro dengan kamera Telefoto, Wide, dan Ultra Wide 12 MP; LiDAR Scanner; rentang zoom optik 6x; fotografi makro; Gaya Fotografi, video ProRes, Smart HDR 4, mode Malam, Apple ProRAW, perekaman HDR 4K Dolby Vision</li>
                                <li>Kamera depan TrueDepth 12 MP dengan mode Malam, perekaman HDR 4K Dolby Vision</li>
                                <li>Chip A15 Bionic untuk performa secepat kilat</li>
                                <li>Pemutaran video hingga 28 jam</li>
                                <li>Desain kokoh dengan Ceramic Shield</li>
                                <li>Level ketahanan air IP68 terdepan di industri</li>
                                <li>IOS 15 dilengkapi berbagai fitur baru untuk melakukan lebih banyak hal dengan iPhone</li>
                                <li>Mendukung aksesori MagSafe untuk kemudahan pemasangan dan pengisian daya nirkabel yang lebih cepat</li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={12} className="mt-3 mb-3 pt-3 pb-3 ps-lg-3 pe-lg-3" style={{ backgroundColor: "white" }} data-aos="fade-up">
                        <h5 className="mt-2">Produk Lainnya</h5>
                        <hr />
                        <Row>
                            {dataRelatedProduct?.map((value, index) => {
                                return (
                                    <Col lg={3} md={6} sm={12} xs={12} key={index} className={'pt-2 pb-2'} data-aos="fade-up" data-aos-duration="3000">
                                        <CardProduct value={value} type="default" />
                                    </Col>
                                )
                            })}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export default DetailProduct