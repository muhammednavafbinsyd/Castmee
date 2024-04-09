import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "./ExampleCarouselImage";
import "../assets/usercss/style.css";

function Services() {
  useEffect(() => {
    const handleScroll = () => {
      const tagElement = document.getElementById("tags");
      const tagElementText = document.getElementById("text1ser");
      const tagElementText2 = document.getElementById("text1ser2");
      const tagElementTextcaross = document.getElementById("caross");
      const tagElementTextcaross2 = document.getElementById("caross2");

      if (window.scrollY >= 1300) {
        tagElement.classList.add("h1taganimationservice");
      } else if (window.scrollY <= 850) {
        tagElement.classList.remove("h1taganimationservice");
      }
      if (window.scrollY >= 1350) {
        tagElementText.classList.add("text1ser");
        tagElementText2.classList.add("text1ser");
      } else if (window.scrollY <= 1000) {
        tagElementText.classList.remove("text1ser");
        tagElementText2.classList.remove("text1ser");
      }
      if (window.scrollY >= 1400) {
        tagElementTextcaross.classList.add("caross");
        tagElementTextcaross2.classList.add("caross");
      } else if (window.scrollY <= 1000) {
        tagElementTextcaross.classList.remove("caross");
        tagElementTextcaross2.classList.remove("caross");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="ourSec" style={{ width: "100%" }}>
      <Container fluid name='ourservice' className="main-section-3">
        <Container className="content-3 my-4">
          <Row style={{backgroundColor:'rgb(135 135 135 / 56%)', borderRadius:'25px'}}>
            <Col xs={12} style={{ padding: "10px 20px", maxWidth: "100%" }}>
              <div
                style={{
                  maxWidth: "100%",
                  display: "grid",
                  placeItems: "center",
                }}
              >
                <h1 id="tags" className="h1tagservice">
                  <span style={{ color: "#FEC400", fontWeight: "100" }}>
                    {" "}
                    Our
                  </span>{" "}
                  <span className="poppins-regular" >Services </span>
                </h1>{" "}
              </div>
            </Col>
          </Row>

          <Row className="mt-4" style={{backgroundColor:'rgb(135 135 135 / 56%)', borderRadius:'36px'}}>
            <Col
              xs={12}
              sm={12}
              md={6}
              lg={6}
              style={{ marginBottom: "10px", marginTop: "10px" }}
            >
              <h3
                id="text1ser"
                className="textser"
                style={{ color: "white", textAlign: "center" }}
              >
                For Talents
              </h3>
              <Carousel
                id="caross"
                fade
                className="custom-carousel caross"
                controls={false}
                style={{ transform: "translateY(300px)", opacity: "0" }}
              >
                <Carousel.Item>
                  <ExampleCarouselImage text="First slide" />
                  <Carousel.Caption>
                    <h3>Discover Tailored Opportunities</h3>
                    <p className="p-tag">
                      Browse through a diverse range of auditions, casting
                      calls, and job openings that align with your passion and
                      expertise. Castmee s intuitive search and recommendation
                      system make finding the right opportunities a breeze.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <ExampleCarouselImage text="Second slide" />
                  <Carousel.Caption>
                    <h3>Showcase Your Unique Talent</h3>
                    <p className="p-tag">
                      Create a stunning profile that reflects the essence of
                      your talent. From acting and singing to dancing and more,
                      Castmee provides a platform for you to showcase your
                      unique skills and experiences.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <ExampleCarouselImage text="Third slide" />
                  <Carousel.Caption>
                    <h3>Effortless Application Tracking</h3>
                    <p className="p-tag">
                      Stay organized with our Application Tracker. Easily manage
                      and keep track of your audition applications, responses,
                      and follow-ups, ensuring a smooth and organized journey
                      towards success.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Col>
            <Col
              xs={12}
              sm={12}
              md={6}
              lg={6}
              className="cr2text"
              style={{ marginBottom: "10px", marginTop: "10px" }}
            >
              <h3
                id="text1ser2"
                className="textser"
                style={{ color: "white", textAlign: "center" }}
              >
                For Casting Professionals
              </h3>
              <Carousel
                id="caross2"
                fade
                className="custom-carousel caross"
                controls={false}
                style={{ transform: "translateY(300px)", opacity: "0" }}
              >
                <Carousel.Item>
                  <ExampleCarouselImage text="First slide" />
                  <Carousel.Caption>
                    <h3>Efficient Communication</h3>
                    <p className="p-tag">
                      Enjoy efficient communication with talents directly
                      through the platform. Castmee simplifies the casting
                      process, allowing for seamless interactions and quick
                      decision making.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <ExampleCarouselImage text="Second slide" />
                  <Carousel.Caption>
                    <h3>Streamline Your Casting Process</h3>
                    <p className="p-tag">
                      Post your casting calls and opportunities with ease.
                      Castmee provides casting professionals with a streamlined
                      platform to discover and connect with a diverse pool of
                      talented individuals.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <ExampleCarouselImage text="Third slide" />
                  <Carousel.Caption>
                    <h3>Discover Hidden Gems</h3>
                    <p className="p-tag">
                      Explore a rich database of talents from various
                      backgrounds and disciplines. Find the perfect fit for your
                      projects, whether it s a lead role, supporting cast, or a
                      specialized skill set.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default Services;
