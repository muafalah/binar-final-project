import React from 'react'
import { Carousel } from 'react-bootstrap'
import style from './SliderProduct.module.css'

const SliderProduct = ({ data }) => {
    return (
        <Carousel variant="dark">
            {data?.map((value, index) => {
                return (
                    <Carousel.Item key={index}>
                        <img className="d-block w-100" src={value} alt={'Product Image ' + index} />
                    </Carousel.Item>
                )
            })}
        </Carousel>
    )
}

export default SliderProduct