import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Offer from "../components/Offer";
import About from "../components/About";
import Service from "../components/Service";
import Engagement from "../components/Engagement";
import Communication from "../components/Communication";
import Market from "../components/Market";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Offer />
      <About />
      <Engagement />
      <Service />
      <Communication />
      <Market />
      <Footer />
    </>
  );
}
