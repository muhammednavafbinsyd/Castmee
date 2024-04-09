import React, { forwardRef, useEffect, useState } from "react";
import "../assets/usercss/style.css";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import Aboutimg from "../assets/images/imagesCastmee/Logo__1_-removebg-preview.png";


function About() {
  const [size, setSize] = useState(6);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 933) {
        setSize(12);
      } else {
        setSize(6);
      }
    };

    const handleScroll = () => {
      const tagElement = document.getElementById("tag");
      const tagElementText = document.getElementById("text1");
      const tagElementText2 = document.getElementById("text2");
      const tagElementText3 = document.getElementById("text3");

      if (window.scrollY >= 220) {
        tagElement.classList.add("h1taganimation");
     
      } else if(window.scrollY <= 150 ) {
        
        tagElement.classList.remove("h1taganimation");

      }
      if (window.scrollY >= 420) {
        
        tagElementText.classList.add("text1");
      } else if(window.scrollY <= 200) {
        tagElementText.classList.remove("text1");
      }
      if (window.scrollY >= 480) {
        
        tagElementText2.classList.add("text2");
      } else if(window.scrollY <= 230) {
        tagElementText2.classList.remove("text2");
      }
      if (window.scrollY >= 650) {
        
        tagElementText3.classList.add("text3");
      } else if(window.scrollY <= 250) {
        tagElementText3.classList.remove("text3");
      }
    };
    

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Container fluid className="main-section-2" name='about' >
        <Container className="content-2 ">
          <Row>
            <Col md={12} style={{ padding: "10px 10px 10px", textAlign: 'center' }}>
              <div>
                <h1 id="tag" className="h1tag poppins-regular">
                 About <span className="poppins-light" style={{color:'#FEC400'}}>us</span>
                </h1>
              </div>
            </Col>
          </Row>
          <Row>
            {window.innerWidth < 933 ? (
              <Col md={size} className="d-flex align-items-center justify-content-center justify-content-md-start">
                <div  style={{ maxWidth: "100%", display:"grid",placeItems:"center" }}>
                  <img className="img" style={{ width: "50%", borderRadius: "20px" }} src={Aboutimg} alt="Aboutimg" />
                </div>
              </Col>
            ) : (
              <Col md={size} className="d-flex align-items-center justify-content-center justify-content-md-start">
                <div  style={{ maxWidth: "90%" ,display:"grid",placeItems:"center",position:"relative",bottom:"50px"}}>
                  <img id="img" style={{ width: "100%", borderRadius: "20px" }} src={Aboutimg} alt="Aboutimg" />
                </div>
              </Col>
            )}
            <Col md={size} className="content2-text">
              <p id="text1" className="p-tag texts">
                Welcome to Castmee, your gateway to unlocking the boundless
                possibilities in the world of entertainment. At Castmee, we
                believe that every talent deserves a chance to shine, and
                every casting professional should have access to a diverse
                pool of exceptional individuals.
              </p>
              <p id="text2" className="p-tag texts2">
                In our vibrant community, we are dedicated to breaking down
                barriers and ensuring that every casting professional has the
                privilege of accessing a diverse and exceptional pool of
                individuals. We understand that the tapestry of entertainment
                is woven with myriad talents, and it is our commitment to be
                the bridge connecting these extraordinary talents with the
                casting professionals seeking them.
              </p>
              <p id="text3" className="p-tag texts3">
                Our vision goes beyond just casting its about fostering an
                inclusive and dynamic environment where creativity knows no
                bounds. Whether youre an aspiring actor, a seasoned
                performer, or a casting professional seeking that perfect fit,
                Castmee is your partner in the journey to discover, showcase,
                and connect with the best talent the entertainment world has
                to offer. Join us on this exhilarating adventure, where dreams
                take center stage, and every talent finds its spotlight.
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default forwardRef(About);
