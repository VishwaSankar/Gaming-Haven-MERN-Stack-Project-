
import React from 'react'
import { Card, Carousel } from 'react-bootstrap'

const Holidayspotlight = () => {
  return (
    <Carousel>
    <Carousel.Item>
      <Card>
        <Card.Img variant="top" src="https://placekitten.com/300/200" alt="Card image" />
        <Card.Body>
          <Card.Title>Card 1</Card.Title>
          <Card.Text>This is the first card.</Card.Text>
        </Card.Body>
      </Card>
    </Carousel.Item>

    <Carousel.Item>
      <Card>
        <Card.Img variant="top" src="https://placekitten.com/300/201" alt="Card image" />
        <Card.Body>
          <Card.Title>Card 2</Card.Title>
          <Card.Text>This is the second card.</Card.Text>
        </Card.Body>
      </Card>
    </Carousel.Item>

    {/* Add more Carousel.Items for additional cards */}
  </Carousel>
  )
}

export default Holidayspotlight