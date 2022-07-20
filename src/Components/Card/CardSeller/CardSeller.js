import React from 'react'
import { Card } from 'react-bootstrap'
import { GeoAltFill } from 'react-bootstrap-icons'
import { formatDate } from '../../../Utils/helper'
import style from './CardSeller.module.css'

const CardSeller = ({ value }) => {
    return (
        <a href={'/seller/' + value.username} style={{ color: "black", borderRadius: "8px" }}>
            <Card className={'mt-1 mb-1 ' + style.cardseller}>
                <div className='d-flex ps-3 pe-3'>
                    <div className="d-grid align-items-center justify-content-center"><Card.Img src={value.image} style={{ height: "6rem", width: "6rem" }} /></div>
                    <Card.Body className="d-grid align-items-center">
                        <div className='mb-2'>
                            <div style={{ fontSize: "1.125rem", fontWeight: "550" }}>{value.fullname}</div>
                            <div style={{ fontSize: "0.875rem", fontWeight: "400", color: "#6C757D" }}>@{value.username}</div>
                        </div>
                        <div style={{ fontSize: "0.875rem", fontWeight: "450", color: "#FB374F" }}><GeoAltFill size={11} style={{ marginTop: "-3px" }} /> {value.city.name}</div>
                        <div style={{ fontSize: "0.875rem", fontWeight: "400", color: "#777777" }}>Bergabung sejak {formatDate(value.createdAt)}</div>
                    </Card.Body>
                </div>
            </Card>
        </a>
    )
}

export default CardSeller