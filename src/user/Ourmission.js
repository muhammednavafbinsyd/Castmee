import React, { useEffect } from "react";
import "../assets/usercss/style.css";
import { Container, Row, Col } from "react-bootstrap";

function Ourmission() {
  useEffect(() => {
    const handleScroll = () => {
      const tagElement = document.getElementById("tags2");
      const tagElementText = document.getElementById("txtourmission");
      const tagElementText2 = document.getElementById("text1msn");
      const tagElementTextcaross = document.getElementById("text1msn2");
      const tagElementTextcaross2 = document.getElementById("text1msn3");


      if(window.innerWidth <= 933){
        if (window.scrollY >= 3200) {
          tagElement.classList.add("h1taganimationourmission");
        } else if (window.scrollY <= 2800) {
          tagElement.classList.remove("h1taganimationourmission");
        }

      }
      if(window.innerWidth > 933){
        if (window.scrollY >= 2400) {
            tagElement.classList.add("h1taganimationourmission");
          } else if (window.scrollY <= 2000) {
            tagElement.classList.remove("h1taganimationourmission");
          }

      }
      if(window.innerWidth <= 933){
        if (window.scrollY >= 3400) {
          tagElementText.classList.add("txtourmission");
        } else if (window.scrollY <= 3000) {
          tagElementText.classList.remove("txtourmission");
        }
        if (window.scrollY >= 3600) {
          tagElementText2.classList.add("tagElementText2msn");
        } else if (window.scrollY <= 3100) {
          tagElementText2.classList.remove("tagElementText2msn");
        }
        if (window.scrollY >= 3800) {
          tagElementTextcaross.classList.add("tagElementText2msn2");
        } else if (window.scrollY <= 3200) {
          tagElementTextcaross.classList.remove("tagElementText2msn2");
        }
        if (window.scrollY >= 4000) {
          tagElementTextcaross2.classList.add("tagElementText2msn3");
        } else if (window.scrollY <= 3300) {
          tagElementTextcaross2.classList.remove("tagElementText2msn3");
        }

      }
      if(window.innerWidth > 933){
        if (window.scrollY >= 2500) {
          tagElementText.classList.add("txtourmission");
        } else if (window.scrollY <= 2300) {
          tagElementText.classList.remove("txtourmission");
        }
        if (window.scrollY >= 2700) {
          tagElementText2.classList.add("tagElementText2msn");
        } else if (window.scrollY <= 2300) {
          tagElementText2.classList.remove("tagElementText2msn");
        }
        if (window.scrollY >= 2750) {
          tagElementTextcaross.classList.add("tagElementText2msn2");
        } else if (window.scrollY <= 2500) {
          tagElementTextcaross.classList.remove("tagElementText2msn2");
        }
        if (window.scrollY >= 2800) {
          tagElementTextcaross2.classList.add("tagElementText2msn3");
        } else if (window.scrollY <= 2600) {
          tagElementTextcaross2.classList.remove("tagElementText2msn3");
        }

      }
    
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="mainSec4">
      <Container fluid className="main-section-4">
        <Container className="content-4" style={{ height: "100%" }}>
          <Row>
            <Col xs={12} style={{ padding: "10px 20px", maxWidth: "100%" }}>
              <div
                style={{
                  maxWidth: "100%",
                  display: "grid",
                  placeItems: "center",
                }}
              >
                <h1 id="tags2" className="poppins-regular hw-wrkhead text-white h1tagmission">
                 <span className="poppins-light " style={{ color: "#FEC400" }}>Our</span> mission
              </h1>
              </div>
            </Col>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "10px",
              }}
            >
              <h3
                id="txtourmission"
                className="h3tag"
                style={{ transform: "translateY(200px)", opacity: "0" }}
              >
                Connecting Dreams to Opportunities
              </h3>
            </div>
            <Col md={12} lg={12}>
              <p
                id="text1msn"
                className="p-tag"
                style={{ transform: "translateY(200px)", opacity: "0" }}
              >
                At Castmee, we embark on a transformative journey with a
                straightforward yet powerful mission: to seamlessly connect
                budding talents with the ever-evolving landscape of the
                entertainment industry. Castmee transcends the conventional
                definition of a mere platform; it stands as a vibrant
                community-driven space, a crucible where aspirations are
                cultivated, opportunities unfold, and careers take flight.
              </p>
              <p
                id="text1msn2"
                className="p-tag"
                style={{ transform: "translateY(200px)", opacity: "0" }}
              >
                Our commitment is rooted in the belief that every individual
                harboring creative aspirations deserves a chance to shine,
                irrespective of background or circumstance. Castmee serves as
                the conduit, breaking down barriers and paving the way for a
                diverse array of talents to navigate the dynamic and often
                elusive world of entertainment.
              </p>
              <p
                id="text1msn3"
                className="p-tag"
                style={{ transform: "translateY(200px)", opacity: "0" }}
              >
                Within the heart of Castmee, a collaborative spirit thrives.
                Its a place where dreams are not only envisioned but actively
                supported and encouraged. Our community becomes a haven where
                creative minds converge, exchange ideas, and find the support
                needed to turn their passion into a tangible reality.
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
     
    </div>
  );
}

export default Ourmission;
