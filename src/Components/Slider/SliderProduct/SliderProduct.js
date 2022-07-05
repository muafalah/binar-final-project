import React from 'react'
import ModalImage from "react-modal-image";
import { Carousel } from 'react-bootstrap'
import style from './SliderProduct.module.css'

const SliderProduct = ({ data }) => {
    return (
        <Carousel variant="dark">
            {data?.map((value, index) => {
                return (
                    <Carousel.Item key={index}>
                        <ModalImage className="d-block w-100" small={value} large={value} showRotate={true} alt={'Product Image ' + index} />
                    </Carousel.Item>
                )
            })}
        </Carousel>
    )
}

export default SliderProduct