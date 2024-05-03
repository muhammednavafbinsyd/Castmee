import Ftimg from "../assets/images/imagesCastmee/castmee footer logo.png";
import React from "react";
import { IoMdCall } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { GrInstagram } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import "../assets/usercss/style.css"
import { Link } from "react-scroll";

function Footer() {
  return (
    <div>
      {/* footer start  */}
      <main className="footer">
        <section className="container ft-cnt">
          <div className="row ft-rw">
           
            <div className="col-sm-12 col-md-3 col-lg-3 ft-cl1 p-5">
            <Link to='home'>
              <img style={{cursor:'pointer'}} src={Ftimg} alt="img" className="ft-cl1-img" />
              </Link>
            </div>
            
            <div className="col-sm-12 col-md-3 col-lg-3 ft-cl2 p-5">
              <div className="poppins-light">
                <h4 className="ft-qk poppins-medium">Quick links</h4>
               <Link style={{cursor:'pointer'}} to='home'><p>Home</p></Link> 
               <Link style={{cursor:'pointer'}}to='blog'> <p>Blog</p></Link>
               <Link style={{cursor:'pointer'}} to='about'> <p>About us</p></Link>
               <Link style={{cursor:'pointer'}}to='ourservice'><p>Our service</p></Link>
               <Link style={{cursor:'pointer'}}to='contactus'> <p>Contact us</p></Link>
              </div>
            </div>
            <div className="col-sm-12 col-md-3 col-lg-3 px-2 py-5 ft-cl3">
              <h4 className="ft-qk poppins-medium">Contact info</h4>
              <ul
                className="poppins-light"
                style={{ listStyle: "none", padding: "0", margin: "0" }}
              >
               <a style={{textDecoration:'none', color:'black'}} href="tel:+917559915991">
                <li>
                  <IoMdCall /> +91 7559915991
                </li>
                </a>
                <a style={{textDecoration:'none', color:'black'}} href="mailto:'castmee.connect@gmail.com'">
                <li>
                  <CiMail /> {"\u00A0"}castmee.connect@gmail.com
                </li>
                </a>
                <li>
                  <CiLocationOn />{"\u00A0"}Cinesphere Private Limited<br/>12/279, MANGALASSERI, MANJERI, MALAPPURAM,
 KL 676123 IN
                </li>
              </ul>
              <br />
              <br />
              <h4 className="ft-qk poppins-medium">
                For Partnership Inquiries
              </h4>
              <a
                className="poppins-light"
                href="mailto:partnerships@castmee.in"
              >
                click here
              </a>
            </div>
            <div
              className="col-sm-12 col-md-3 col-lg-3 px-2 py-5 "
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3914.738587778547!2d76.12465217504707!3d11.132836489038421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDA3JzU4LjIiTiA3NsKwMDcnMzguMCJF!5e0!3m2!1sen!2sin!4v1709218350596!5m2!1sen!2sin"
                style={{ width: "100%" }}
                width="200"
                height="200"
                allowfullscreen=""
                loading="lazy"
                title="map"
                // referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
      {/* footer end  */}
      {/* footer tail start  */}
      <main className="ft-tail">
        <section className="container poppins-light">
          <div className="row">
            <article className="col-sm-12 col-md-12 col-lg-12 col-xl-6 col-xxl-6 text-white ft-tail1 py-4">
              <p>
                Castmee © 2024 All Rights Reserved Powered by 
                <a
                  style={{ textDecoration: "none" }}
                  href="https://www.instagram.com/fortran_official/?hl=en"
                >
                  Fortran
                </a>
              </p>
            </article>
            <article className="col-sm-12 col-md-12 col-lg-12 col-xl-6 col-xxl-6 ft-tail2 p-4">
             <a href="https://www.instagram.com/castmee?igsh=MTRteGwzcW1oeGZqOQ=="><GrInstagram className="ft-tail-icon" /></a> 
             <a href="https://www.facebook.com/castmee.in?mibextid=ZbWKwL"><FaFacebook className="ft-tail-icon" /></a> 
              <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Fcastmee"><FaSquareXTwitter className="ft-tail-icon" /></a>
            </article>
          </div>
        </section>
      </main>
      {/* footer tail end  */}
    </div>
  );
}

export default Footer;
