import React from 'react'
import { Card } from 'react-bootstrap'
import style from './CardCategory.module.css'

const CardCategory = ({ value }) => {

    return (
        <a href={'/search/keyword=' + value.name + '&type=product&sort=1&category=' + value.id_category + '&location=null&minprice=null&maxprice=null'}>
            <Card body className={`text-center p-0 p-md-1 ${style.card_category}`} style={{ backgroundColor: "#E7E7E7", border: "0px" }}>
                <img className={style.image_category} src={value.image} width="80%" height="auto" alt={value.name} />
                <div className={style.card_name}>{value.name}</div>
            </Card>
        </a>
    )
}

export default CardCategory