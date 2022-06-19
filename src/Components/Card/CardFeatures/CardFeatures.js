import React from 'react'
import Card from 'react-bootstrap/Card';
import style from '../CardFeatures/CardFeatures.module.css'

export const CardFeatures = () => {
  return (
    <div>
        <Card className={style.cardfeatures} style={{ width: '19.1rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  )
}
