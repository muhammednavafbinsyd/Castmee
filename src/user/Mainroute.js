import React from "react";
import Home from "./home";
import JoinCastmee from "./joincatsmeebanner";
import About from "./About";
import CastmeeLogobanner from "./CastmeeLogobanner";
import Ourservice from "./Services";
import Advantages from "./Advantage";
import Ourmission from "./Ourmission";
import Ourmissiontwo from "./ourmissiontwo";
import Howitworks from "./Howitworks";
import Blog from "./Blog";
import Store from "./store";
import ContactUs from "./ContactUs";
import Footer from "./footer";
import Footernav from "./Footernav";

function Mainroute() {
  return (
    <div>
      <Home />
      <JoinCastmee />
      <About />
      <CastmeeLogobanner />
      <Ourservice />
      <Advantages />
      <Ourmission />
      <Ourmissiontwo />
      <Howitworks />
      <Blog />
      <Store />
      <ContactUs />
      <Footer />
      <Footernav />
    </div>
  );
}

export default Mainroute;
