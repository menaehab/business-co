import React from "react";
import Hero from "../components/Hero";
import Offer from "../components/Offer";
import About from "../components/About";
import Service from "../components/Service";
import Engagement from "../components/Engagement";
import Communication from "../components/Communication";
import Market from "../components/Market";

export default function Home() {
  return (
    <>
      <Hero />
      <Offer />
      <About />
      <Engagement />
      <Service />
      <Communication />
      <Market />
    </>
  );
}
