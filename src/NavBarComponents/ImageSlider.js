import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import "./ImagesSlider.css";

const ImageSlider = () => {
  return (
    <div className="main">
      <h1>Bootstrap Carousel Example</h1>
      <Carousel className="format">
        <Carousel.Item>
          <img
            src="https://cdn.pixabay.com/photo/2018/08/16/08/39/hallstatt-3609863_640.jpg"
            alt="First slide"
            style={{ height: "50vh" }}
          />
          <Carousel.Caption>
            <p>Source: Pixabay</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://tourismteacher.com/wp-content/uploads/2023/10/eu.jpg.webp"
            alt="Second slide"
            style={{ height: "50vh" }}
          />
          <Carousel.Caption>
            <p>Source: Tourism Teacher</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://thefrugalexpat.com/wp-content/uploads/2023/05/Thailand-1024x576.jpg"
            alt="Third slide"
            style={{ height: "50vh" }}
          />
          <Carousel.Caption>
            <p>Source: Lonely Planet</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default ImageSlider;
