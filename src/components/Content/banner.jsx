import React from "react";
import { Carousel } from "react-bootstrap";
import SLIDER_IMAGES from "../../data/sliderImages";

export default function Banner() {
  return (
    <div className="banner mx-auto col-12">
      <Carousel interval={30000}>
        <Carousel.Item className="carousel-container carousel-container-1">
          <Carousel.Caption className="d-flex carousel-text-container flex-column">
            <div className="carousel-text-phrase">
              <h1>{SLIDER_IMAGES[0].phrase}</h1>
            </div>
            <div className="align-self-start carousel-text-link p-2">
              <h3 className="align-self-start ">{SLIDER_IMAGES[0].linkText}</h3>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-container carousel-container-2">
          <Carousel.Caption className="d-flex carousel-text-container flex-column">
            <div className="carousel-text-phrase">
              <h1>{SLIDER_IMAGES[1].phrase}</h1>
            </div>
            <div className="align-self-start carousel-text-link p-2">
              <h3 className="align-self-start ">{SLIDER_IMAGES[1].linkText}</h3>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-container carousel-container-3">
          <Carousel.Caption className="d-flex carousel-text-container flex-column">
            <div className="carousel-text-phrase">
              <h1>{SLIDER_IMAGES[2].phrase}</h1>
            </div>
            <div className="align-self-start carousel-text-link p-2">
              <h3 className="align-self-start ">{SLIDER_IMAGES[2].linkText}</h3>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-container carousel-container-4">
          <Carousel.Caption className="d-flex carousel-text-container flex-column">
            <div className="carousel-text-phrase">
              <h1>{SLIDER_IMAGES[3].phrase}</h1>
            </div>
            <div className="align-self-start carousel-text-link p-2">
              <h3 className="align-self-start ">{SLIDER_IMAGES[3].linkText}</h3>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
