import React from 'react'
import Card from 'react-bootstrap/Card';
import testimage from '../../../Assets/image/img-logo.png'
import style from './CardCategory.module.css'

export const CardCategory = () => {
  return (
    <div>
        <Card className={style.cardcategory} style={{ width: '8.8rem', height: '8rem' }}>
      <Card.Img variant="top" src={testimage} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
      </Card.Body>
    </Card>
    </div>
  )
}
