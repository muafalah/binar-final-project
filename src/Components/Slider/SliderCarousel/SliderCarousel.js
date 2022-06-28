import React from 'react'
import { Carousel } from 'react-bootstrap'

const SliderCarousel = ({ data }) => {
    return (
        <Carousel variant="dark">
            {data?.map((value, index) => {
                return (
                    <Carousel.Item key={index}>
                        <a href={value.link}><img className="d-block w-100" src={value.image} alt={value.name} /></a>
                    </Carousel.Item>
                )
            })}
        </Carousel>
    )
}

export default SliderCarousel