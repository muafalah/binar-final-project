import React from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import { ArrowDownSquareFill, CartPlusFill, TelephoneFill } from 'react-bootstrap-icons'
import CardProduct from '../../Components/Card/CardProduct/CardProduct'
import SliderProduct from '../../Components/Slider/SliderProduct/SliderProduct'
import Layout from '../Layout'
import style from './DetailProduct.module.css'

const detailProduct = {
    id_product: 1,
    category: {
        id_category: 1,
        name: "iPhone",
    },
    name: "iPhone 11 Pro Max 256GB Space Gray",
    serial_number: "G6TW5VV8JCL6",
    price: 12400000,
    image: [
        "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_11_pro_space_grey_new_1.jpg",
        "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_11_pro_midnight_green_new_1_2.jpg",
        "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_11_pro_silver_1_4_1_1.jpg",
        "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_11_pro_max_gold_1_6_1.jpg",
        "https://www.wowshop.hr/media/catalog/product/cache/8716b7d8c7b77fec5a662cf745b5c5d5/a/p/apple-iphone-11-pro-max-srebreni-01_1.jpg",
    ],
    description: "deskripsi panjang",
    updatedAt: "20 Juni 2022",
    createdAt: "20 Juni 2022",
    seller: {
        id_seller: 1,
        username: "suryamahendra",
        fullname: "Surya Mahendra",
        image: "https://sunrift.com/wp-content/uploads/2014/12/Blake-profile-photo-square.jpg",
        address: {
            id_address: 1,
            name: "Kota Jakarta",
        },
    },
}

const relatedProduct = [
    {
        id_product: 1,
        name: "iPhone 11 Pro Max 256 GB Space Gray",
        price: 12400000,
        image: "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_11_pro_space_grey_new_1.jpg",
        seller: {
            id_seller: 1,
            username: "suryamahendra",
            address: {
                id_address: 1,
                name: "Kota Jakarta",
            },
        },
    },
    {
        id_product: 2,
        name: "iPhone 11 Pro Max 256 GB Space Gray",
        price: 12400000,
        image: "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_11_pro_space_grey_new_1.jpg",
        seller: {
            id_seller: 1,
            username: "suryamahendra",
            address: {
                id_address: 1,
                name: "Kota Jakarta",
            },
        },
    },
    {
        id_product: 3,
        name: "iPhone 11 Pro Max 256 GB Space Gray",
        price: 12400000,
        image: "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_11_pro_space_grey_new_1.jpg",
        seller: {
            id_seller: 1,
            username: "suryamahendra",
            address: {
                id_address: 1,
                name: "Kota Jakarta",
            },
        },
    },
    {
        id_product: 4,
        name: "iPhone 11 Pro Max 256 GB Space Gray",
        price: 12400000,
        image: "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_11_pro_space_grey_new_1.jpg",
        seller: {
            id_seller: 1,
            username: "suryamahendra",
            address: {
                id_address: 1,
                name: "Kota Jakarta",
            },
        },
    },
]

const DetailProduct = () => {
    return (
        <Layout role="default">
            <Container>
                <Row>
                    <Col lg={5} className="mt-3" style={{ backgroundColor: "white" }}>
                        <div className="p-3">
                            <SliderProduct data={detailProduct.image} />
                        </div>
                    </Col>
                    <Col lg={7}>
                        <div className='ps-lg-3'>
                            <Row>
                                <Col md={12} className="mt-3" style={{ backgroundColor: "white", }}>
                                    <Row className="gap-3 pt-3 pb-3 ps-lg-2 pe-lg-2">
                                        <Col xs={12}>
                                            <h3 style={{ fontWeight: "500" }}>{detailProduct.name}</h3>
                                            <div style={{ fontSize: "0.875rem", color: "#8A8A8A" }}>Terakhir diperbarui pada tanggal {detailProduct.updatedAt}</div>
                                        </Col>
                                        <Col xs={12}>
                                            <h3 style={{ color: "#fb374f" }}>Rp. {detailProduct.price},-</h3>
                                        </Col>
                                        <Col xs={12} className={style.detail_lg}>
                                            <div style={{ backgroundColor: "#F4F4F4" }} className="d-flex gap-2 justify-content-between p-2">
                                                <div className="text-center w-100">
                                                    <b>Kategori</b>
                                                    <div><a style={{ color: "black" }} href={'/search/keyword=' + detailProduct.category.name + '&type=product&sort=1&category=' + detailProduct.category.id_category + '&location=null&minprice=null&maxprice=null'}>{detailProduct.category.name}</a></div>
                                                </div>
                                                <div className={style.line}></div>
                                                <div className="text-center w-100">
                                                    <b>Lokasi</b>
                                                    <div><a style={{ color: "black" }} href={'/search/keyword=' + detailProduct.category.name + '&type=product&sort=1&category=' + detailProduct.category.id_category + '&location=' + detailProduct.seller.address.id_address + '&minprice=null&maxprice=null'}>{detailProduct.seller.address.name}</a></div>
                                                </div>
                                                <div className={style.line}></div>
                                                <div className="text-center w-100">
                                                    <b>Serial Number</b>
                                                    <div><a style={{ color: "black" }} href={'https://www.imei.info/apple-sn-check/?sn=' + detailProduct.serial_number} target="_blank">{detailProduct.serial_number}</a></div>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col xs={12} className={style.detail_sm}>
                                            <div style={{ backgroundColor: "#F4F4F4" }} className="d-grid gap-1 p-3">
                                                <div className="d-flex w-100">
                                                    <div className='w-100'><b>Kategori</b></div>
                                                    <div className='w-100'><a style={{ color: "black" }} href={'/search/keyword=' + detailProduct.category.name + '&type=product&sort=1&category=' + detailProduct.category.id_category + '&location=null&minprice=null&maxprice=null'}>{detailProduct.category.name}</a></div>
                                                </div>
                                                <div className="d-flex w-100">
                                                    <div className='w-100'><b>Lokasi</b></div>
                                                    <div className='w-100'><a style={{ color: "black" }} href={'/search/keyword=' + detailProduct.category.name + '&type=product&sort=1&category=' + detailProduct.category.id_category + '&location=' + detailProduct.seller.address.id_address + '&minprice=null&maxprice=null'}>{detailProduct.seller.address.name}</a></div>
                                                </div>
                                                <div className="d-flex w-100">
                                                    <div className='w-100'><b>Serial Number</b></div>
                                                    <div className='w-100'><a style={{ color: "black" }} href={'https://www.imei.info/apple-sn-check/?sn=' + detailProduct.serial_number} target="_blank">{detailProduct.serial_number}</a></div>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col xs={12}>
                                            <Row>
                                                <Col lg={3} md={3} xs={6} className="mt-3">
                                                    <Button className="w-100 d-flex align-content-center justify-content-center" size="lg" variant="outline-dark"><ArrowDownSquareFill className='my-auto me-2' size={16} /> Nego</Button>
                                                </Col>
                                                <Col lg={4} md={4} xs={6} className="mt-3">
                                                    <Button className="w-100 d-flex align-content-center justify-content-center" size="lg" variant="outline-dark"><CartPlusFill className='my-auto me-2' size={18} /> Keranjang</Button>
                                                </Col>
                                                <Col lg={5} md={5} className="mt-3">
                                                    <Button className="w-100 d-flex align-content-center justify-content-center" size="lg" variant="danger">Beli Sekarang</Button>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col md={12} className="mt-3" style={{ backgroundColor: "white", }}>
                                    <Row className='mt-3 mb-3 ps-lg-2 pe-lg-2'>
                                        <Col md={3} xs={4}>
                                            <img src={detailProduct.seller.image} alt="Profile Seller" style={{ borderRadius: "100px", height: "6rem" }} />
                                        </Col>
                                        <Col md={6} xs={8} className="d-grid align-content-center gap-2">
                                            <div>
                                                <h5>{detailProduct.seller.fullname}</h5>
                                                <span style={{ color: "#8A8A8A" }}>@{detailProduct.seller.username}</span>
                                            </div>
                                            <div><a href={'/seller/' + detailProduct.seller.id_seller} style={{ color: "red", textDecoration: "underline" }}>Lihat Penjual</a></div>
                                        </Col>
                                        <Col md={3} className="d-grid align-content-center mt-3 mt-md-0">
                                            <Button className="w-100 d-flex align-content-center justify-content-center" variant="outline-success"><TelephoneFill className='my-auto me-2' size={16} /> Hubungi</Button>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col lg={12} className="mt-3 pt-3 pb-3 ps-lg-3 pe-lg-3" style={{ backgroundColor: "white" }}>
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
                    <Col lg={12} className="mt-3 mb-3 pt-3 pb-3 ps-lg-3 pe-lg-3" style={{ backgroundColor: "white" }}>
                        <h5 className="mt-2">Produk Lainnya</h5>
                        <hr />
                        <Row>
                            {relatedProduct?.map((value, index) => {
                                return (
                                    <Col lg={3} md={6} sm={12} xs={12} key={index} className={'pt-2 pb-2'}>
                                        <CardProduct value={value} />
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