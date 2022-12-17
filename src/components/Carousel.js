import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';

export default function carousel() {
  return (
    <div className="Container">
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block"
                src="../asset/Hero-img.png"
                alt="Second slide"
                />

                <Carousel.Caption>
                    <Card bsPrefix="carousel-caption-card" >
                        <Card.Body bsPrefix="carousel-body-card">
                            <Card.Text>
                                Praesent commodo cursus magna.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Carousel.Caption>

            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block"
                src="../asset/Hero-img2.png"
                alt="Second slide"
                />

                <Carousel.Caption>
                    <Card bsPrefix="carousel-caption-card">
                        <Card.Body bsPrefix="carousel-body-card">
                            <Card.Text >
                                Praesent commodo cursus magna.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Carousel.Caption>

            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block"
                src="../asset/Hero-img3.png"
                alt="Third slide"
                />

                <Carousel.Caption>
                    <Card bsPrefix="carousel-caption-card">
                        <Card.Body bsPrefix="carousel-body-card">
                            <Card.Text>
                                Praesent commodo cursus magna.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Carousel.Caption>

            </Carousel.Item>
        </Carousel>
    </div>
  )
}
