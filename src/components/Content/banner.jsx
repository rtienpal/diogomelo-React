import React from "react";
import { Carousel } from "react-bootstrap";
import SLIDER_IMAGES from "../../data/sliderImages";

export default function Banner() {
  return (
    <div className="banner mx-auto col-12">
      <Carousel>
        <Carousel.Item className="carousel-container-1">
          
          <Carousel.Caption className="position-absolute">
            <div className="carousel-text-container py-3">
              <h3>{SLIDER_IMAGES[0].title}</h3>
              <p>{SLIDER_IMAGES[0].description}</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
