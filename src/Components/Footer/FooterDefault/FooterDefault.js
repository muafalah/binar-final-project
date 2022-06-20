import React from 'react'
import { Col, Row, Nav, Image, NavLink, Container, Navbar, Card } from 'react-bootstrap'
import testimage from '../../../Assets/image/img-logo.png'
import style from './FooterDefault.module.css'

const FooterDefault = () => {
    return (
        <>
           <div className={style.footer}>
           <Navbar>
           <Row className={style.isifooter}>
                    <Col>
                        <h5 className={style.hdrfooter}>Tentang Kami</h5>
                        <Card.Img className={style.imgfooter} src={testimage} />
                        <p>orem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat ultrices leo, ac vestibulum nibh semper vel. Ut in cursus erat. </p>
                    </Col>
                    <Col>
                        <h5 className={style.hdrfooterinfo}>Informasi</h5>
                        <Container>
                        <NavLink disabled>Siapa Kami</NavLink>
                        <NavLink disabled>Cara Membeli</NavLink>
                        <NavLink disabled>Syarat & Ketentuan</NavLink>
                        <NavLink disabled>Kebijakan & Privasi</NavLink>
                        <NavLink disabled>Bantuan</NavLink>
                        <NavLink disabled>FAQ</NavLink>
                        </Container>
                    </Col>
                    <Col>
                        <h5 className={style.hdrfooter}>Layanan Pelanggan</h5>
                        <p>Setiap hari 09:00-18:00 WIB</p>
                        <p>secondgadget@gmail.com</p>
                        <p>081-123-456-789</p>
                        <p>Jl, RS. Fatmawati Raya no.188 Cilandak, Jakarta Selatan, DKI Jakarta, 12420 Indonesia</p>
                    </Col>
                    <Col>
                        <h5 className={style.hdrfooter}>Temukan Kami di</h5>
                        <svg width="224" height="32" viewBox="0 0 224 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="16" cy="16" r="16" fill="#000000"/>
<path d="M21 7.6665H18.5C17.395 7.6665 16.3352 8.10549 15.5538 8.88689C14.7724 9.66829 14.3334 10.7281 14.3334 11.8332V14.3332H11.8334V17.6665H14.3334V24.3332H17.6667V17.6665H20.1667L21 14.3332H17.6667V11.8332C17.6667 11.6122 17.7545 11.4002 17.9108 11.2439C18.0671 11.0876 18.279 10.9998 18.5 10.9998H21V7.6665Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="64" cy="16" r="16" fill="#000000"/>
<path d="M68.1666 7.6665H59.8333C57.5321 7.6665 55.6666 9.53198 55.6666 11.8332V20.1665C55.6666 22.4677 57.5321 24.3332 59.8333 24.3332H68.1666C70.4678 24.3332 72.3333 22.4677 72.3333 20.1665V11.8332C72.3333 9.53198 70.4678 7.6665 68.1666 7.6665Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M67.3334 15.4748C67.4362 16.1683 67.3178 16.8766 66.9948 17.4989C66.6719 18.1213 66.161 18.6259 65.5347 18.9412C64.9085 19.2564 64.1987 19.3661 63.5065 19.2547C62.8143 19.1433 62.1748 18.8165 61.6791 18.3207C61.1833 17.825 60.8565 17.1855 60.7451 16.4933C60.6337 15.8011 60.7434 15.0913 61.0586 14.4651C61.3739 13.8388 61.8785 13.3279 62.5009 13.005C63.1232 12.682 63.8315 12.5636 64.525 12.6664C65.2325 12.7713 65.8874 13.101 66.3931 13.6067C66.8988 14.1124 67.2285 14.7673 67.3334 15.4748Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M68.5834 11.4165H68.5917" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="112" cy="16" r="16" fill="#000000"/>
<path d="M121.167 8.50008C120.369 9.06298 119.485 9.4935 118.55 9.77508C118.048 9.198 117.381 8.78899 116.639 8.60335C115.897 8.41771 115.116 8.46441 114.402 8.73712C113.687 9.00984 113.074 9.49541 112.644 10.1282C112.215 10.7609 111.99 11.5104 112 12.2751V13.1084C110.536 13.1464 109.084 12.8216 107.776 12.163C106.467 11.5043 105.342 10.5323 104.5 9.33341C104.5 9.33341 101.167 16.8334 108.667 20.1667C106.95 21.3317 104.906 21.9159 102.833 21.8334C110.333 26.0001 119.5 21.8334 119.5 12.2501C119.499 12.018 119.477 11.7864 119.433 11.5584C120.284 10.7197 120.884 9.66067 121.167 8.50008V8.50008Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="160" cy="16" r="16" fill="#000000"/>
<path d="M153.333 9.3335H166.667C167.583 9.3335 168.333 10.0835 168.333 11.0002V21.0002C168.333 21.9168 167.583 22.6668 166.667 22.6668H153.333C152.417 22.6668 151.667 21.9168 151.667 21.0002V11.0002C151.667 10.0835 152.417 9.3335 153.333 9.3335Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M168.333 11L160 16.8333L151.667 11" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="208" cy="16" r="16" fill="#000000"/>
<path d="M211.333 15.1665V11.8332M215.5 7.6665H200.5V20.9998H204.667V24.3332L208 20.9998H212.167L215.5 17.6665V7.6665ZM207.167 15.1665V11.8332V15.1665Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                        
                    </Col>
                    
                </Row>
           </Navbar>
           </div>
        </>
    )
}

export default FooterDefault