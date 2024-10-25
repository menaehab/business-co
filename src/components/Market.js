import React from "react";
import { Container } from "react-bootstrap";
import "../style/market.css";
import market1 from "../assets/market1.jpg";
import market2 from "../assets/market2.jpg";
import market3 from "../assets/market3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
export default function Market() {
  return (
    <section className="market">
      <Container>
        <div className="service_main">
          <h1>Business And Marketing</h1>
          <p>
            ullam mauris nibh, pellentesque quis tincidunt eu, tincidunt sed
            nulla, sit amet tristique elit finibus.
          </p>
        </div>
        <Swiper
          className="text-center"
          spaceBetween={10}
          slidesPerView={1}
          style={{ width: "100%" }}
        >
          <SwiperSlide>
            <img src={market1} alt="market img" className="carousel-image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={market2} alt="market img" className="carousel-image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={market3} alt="market img" className="carousel-image" />
          </SwiperSlide>
        </Swiper>
        <div className="text-center">
          <Link className="btn_market">learn more</Link>
        </div>
      </Container>
    </section>
  );
}
