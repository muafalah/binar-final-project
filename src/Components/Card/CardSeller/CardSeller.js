import React from 'react'
import { Card } from 'react-bootstrap'
import { GeoAltFill } from 'react-bootstrap-icons'
import style from './CardSeller.module.css'

const CardSeller = ({ value }) => {
    return (
        <a href={'/seller/' + value.id_seller} style={{ color: "black" }}>
            {console.log(value)}
            <Card className={'mt-1 mb-1' + style.card}>
                <div className='d-flex ps-3 pe-3'>
                    <div className="d-grid align-items-center justify-content-center"><Card.Img src={value.image} style={{ height: "6rem", width: "6rem" }} /></div>
                    <Card.Body className="d-grid align-items-center">
                        <div className='mb-2'>
                            <div style={{ fontSize: "1.125rem", fontWeight: "500" }}>{value.fullname}</div>
                            <div style={{ fontSize: "0.875rem", fontWeight: "400" }}>@{value.username}</div>
                        </div>
                        <div style={{ fontSize: "0.875rem", fontWeight: "400", color: "#FB374F" }}><GeoAltFill size={10} style={{ marginTop: "-3px" }} /> {value.address.name}</div>
                        <div style={{ fontSize: "0.75rem", fontWeight: "400", color: "#8c8c8c" }}>Bergabung sejak {value.createdAt}</div>
                    </Card.Body>
                </div>
            </Card>
        </a>
    )
}

export default CardSeller