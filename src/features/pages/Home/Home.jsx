import React from "react";
import Homepage from "./Homepage";
import { Element } from "react-scroll";
import Features from "./Features";
import About from "./About";
import Pricing from "./Pricing";
import Faq from "./Faq";
import Customers from "./Customers";
import Team from "./Team";
import Contact from "./Contact";

export default function Home() {
  return (
    <div>
      {" "}
      <Element name="home">
        <Homepage />
      </Element>
      <Element name="about">
        <Features />
      </Element>
      <About />
      <Element>
        <Pricing name="pricing" />
      </Element>
      {/* <Faq /> */}
      <Customers />
      <Element name="team">
        <Team />
      </Element>
      <Element>
        <Contact name="contact" />
      </Element>
    </div>
  );
}
