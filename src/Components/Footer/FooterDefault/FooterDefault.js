import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import Logo from '../../../Assets/image/Logo/img-logo-landscape-white.svg'
import style from './FooterDefault.module.css'
import { EnvelopeFill, Facebook, Instagram, Linkedin, TelephoneFill, Twitter, Youtube } from 'react-bootstrap-icons'

const FooterDefault = () => {
    return (
        <div style={{ backgroundColor: "#212529", color: "white" }} className={'pt-3 pb-2'}>
            <Container>
                <Row>
                    <Col lg={3} md={6} sm={12} xs={12} className={'pt-2 pb-2'}>
                        <h5>Tentang Kami</h5>
                        <hr className="mt-3 mb-3" />
                        <p style={{ fontSize: "0.875" }}><img src={Logo} height="40" alt="SecondGadget" /></p>
                        <p style={{ fontSize: "0.875", textAlign: "justify" }}><b>SecondGadget</b> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </Col>
                    <Col lg={3} md={6} sm={12} xs={12} className={'pt-2 pb-2'}>
                        <h5>Informasi</h5>
                        <hr className="mt-3 mb-3" />
                        <p><a href="#" style={{ color: "white" }}>Siapa Kami</a></p>
                        <p><a href="#" style={{ color: "white" }}>Cara Membeli</a></p>
                        <p><a href="#" style={{ color: "white" }}>Syarat & Ketentuan</a></p>
                        <p><a href="#" style={{ color: "white" }}>Bantuan</a></p>
                        <p><a href="#" style={{ color: "white" }}>FAQ</a></p>
                    </Col>
                    <Col lg={3} md={6} sm={12} xs={12} className={'pt-2 pb-2'}>
                        <h5>Layanan Pelanggan</h5>
                        <hr className="mt-3 mb-3" />
                        <p style={{ fontSize: "0.875" }}>Setiap hari, pukul 09.00 - 18.00 WIB</p>
                        <p style={{ fontSize: "0.875" }}><EnvelopeFill size={20} className={'me-2'} /> help@secondgadget.com</p>
                        <p style={{ fontSize: "0.875" }}><TelephoneFill size={18} className={'me-2'} /> 081-123-456-789</p>
                        <p style={{ fontSize: "0.875" }}>Jl. RS. Fatmawati Raya No. 188, Cilandak, Jakarta Selatan, DKI Jakarta, 12420 Indonesia</p>
                    </Col>
                    <Col lg={3} md={6} sm={12} xs={12} className={'pt-2 pb-2'}>
                        <h5>Temukan Kami di</h5>
                        <hr className="mt-3 mb-3" />
                        <a href="#" style={{ color: "white" }}><Facebook size={24} className={`me-3 ${style.icon}`} /></a>
                        <a href="#" style={{ color: "white" }}><Twitter size={24} className={`me-3 ${style.icon}`} /></a>
                        <a href="#" style={{ color: "white" }}><Youtube size={24} className={`me-3 ${style.icon}`} /></a>
                        <a href="#" style={{ color: "white" }}><Instagram size={24} className={`me-3 ${style.icon}`} /></a>
                        <a href="#" style={{ color: "white" }}><Linkedin size={24} className={`me-3 ${style.icon}`} /></a>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default FooterDefault