import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Product() {
  const products = [
    {
      name: 'Tea',
      price: 10,
      description: 'A soothing beverage made from tea leaves.',
    },
    {
      name: 'Coffee',
      price: 15,
      description: 'An energizing drink made from roasted coffee beans.',
    },
    {
      name: 'Green Tea',
      price: 12,
      description: 'A healthy and refreshing beverage with numerous health benefits.',
    },
  ];

  return (
    <Container>
      <Row className="justify-content-center">
        {products.map((product, index) => (
          <Col md="4" key={index}>
            <Card className="shadow">
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>Price: {product.price} Rands</Card.Text>
                <Card.Text>{product.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Product;
