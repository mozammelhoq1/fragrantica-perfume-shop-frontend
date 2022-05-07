import React from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../../../Images/banner/banner-1.jpg";
import banner2 from "../../../Images/banner/banner-2.jpg";
import banner3 from "../../../Images/banner/banner-3.jpg";
import banner4 from "../../../Images/banner/banner-4.jpg";
import banner5 from "../../../Images/banner/banner-5.jpg";
import banner6 from "../../../Images/banner/banner-6.jpg";

const Banner = () => {
  return (
    <Carousel variant="dark" className="mb-5 w-100">
      <Carousel.Item>
        <img
          className="d-block w-100 "
          height={400}
          src={banner1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>
            4711 Acqua Colonia Limited Edition 2022: Pomelo & Sea Salt, Coconut
            Water & Yuzu
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          height={400}
          src={banner2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Carolina Herrera 212 Heroes For Her Forever Young</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          height={400}
          src={banner3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Spotlight on Infinite She, the Latest Line by Margot Elena</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          height={400}
          src={banner4}
          alt="Fourth slide"
        />

        <Carousel.Caption>
          <h3>
            Angel Schlesser Les Eaux d’Un Instant: Joyful Nashi Bloom,
            Mediterranean Cypress
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          height={400}
          src={banner5}
          alt="Fifth slide"
        />

        <Carousel.Caption>
          <h3>The New & Improved Y for Men by YSL: 12 hours duration</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          height={400}
          src={banner6}
          alt="Sixth slide"
        />

        <Carousel.Caption>
          <h3>
            Some Questions About Perfume Making and Environment Sustainability
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
