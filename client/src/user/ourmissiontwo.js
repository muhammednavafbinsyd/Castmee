import React, { useEffect } from "react";
import "../assets/usercss/style.css";
import { Container, Row, Col } from "react-bootstrap";

function Ourmissiontwo() {
  useEffect(() => {
    const handleScroll = () => {
      const tagElement = document.getElementById("ourmsn2txt");
      const tagElementText = document.getElementById("ourtxt1");
      const tagElementText2 = document.getElementById("ourtxt2");
      const tagElementTextcaross = document.getElementById("ourtxt3");
      const tagElementTextcaross2 = document.getElementById("ourtxt4");
      const tagElementTextcaross3 = document.getElementById("ourtxt5");
      const tagElementTextcaross4 = document.getElementById("ourtxt6");

      if (window.innerWidth <= 933) {
        if (window.scrollY >= 4240) {
          tagElement.classList.add("h1tagmissiontwoanm");
        } else if (window.scrollY <= 2500) {
          tagElement.classList.remove("h1tagmissiontwoanm");
        }
      }
      if (window.innerWidth > 933) {
        if (window.scrollY >= 2900) {
          tagElement.classList.add("h1tagmissiontwoanm");
        } else if (window.scrollY <= 2500) {
          tagElement.classList.remove("h1tagmissiontwoanm");
        }
      }
      if (window.innerWidth <= 933) {
        if (window.scrollY >= 4360) {
          tagElementText.classList.add("ourmsn2txt1anm");
          tagElementText2.classList.add("ourmsn2txt1anm");
        } else if (window.scrollY <= 2800) {
          tagElementText.classList.remove("ourmsn2txt1anm");
          tagElementText2.classList.remove("ourmsn2txt1anm");
        }
      }
      if (window.innerWidth > 933) {
        if (window.scrollY >= 3000) {
          tagElementText.classList.add("ourmsn2txt1anm");
          tagElementText2.classList.add("ourmsn2txt1anm");
        } else if (window.scrollY <= 2800) {
          tagElementText.classList.remove("ourmsn2txt1anm");
          tagElementText2.classList.remove("ourmsn2txt1anm");
        }
      }

      if (window.innerWidth <= 933) {
        if (window.scrollY >= 4560) {
          tagElementTextcaross.classList.add("ourmsn2txt2anm");
          tagElementTextcaross2.classList.add("ourmsn2txt2anm");
        } else if (window.scrollY <= 2900) {
          tagElementTextcaross.classList.remove("ourmsn2txt2anm");
          tagElementTextcaross2.classList.remove("ourmsn2txt2anm");
        }
      }
      if (window.innerWidth > 933) {
        if (window.scrollY >= 3150) {
          tagElementTextcaross.classList.add("ourmsn2txt2anm");
          tagElementTextcaross2.classList.add("ourmsn2txt2anm");
        } else if (window.scrollY <= 2900) {
          tagElementTextcaross.classList.remove("ourmsn2txt2anm");
          tagElementTextcaross2.classList.remove("ourmsn2txt2anm");
        }
      }
      if (window.innerWidth <= 933) {
        if (window.scrollY >= 4680) {
          tagElementTextcaross.classList.add("tagElementText2msn2");
        } else if (window.scrollY <= 2900) {
          tagElementTextcaross.classList.remove("tagElementText2msn2");
        }
      }
      if (window.innerWidth > 933) {
        if (window.scrollY >= 3200) {
          tagElementTextcaross.classList.add("tagElementText2msn2");
        } else if (window.scrollY <= 2900) {
          tagElementTextcaross.classList.remove("tagElementText2msn2");
        }
      }

      if (window.innerWidth <= 933) {
        if (window.scrollY >= 4850) {
          tagElementTextcaross3.classList.add("ourmsn2txt3anm");
          tagElementTextcaross4.classList.add("ourmsn2txt3anm");
        } else if (window.scrollY <= 2900) {
          tagElementTextcaross3.classList.remove("ourmsn2txt3anm");
          tagElementTextcaross4.classList.remove("ourmsn2txt3anm");
        }
      }
      if (window.innerWidth > 933) {
        if (window.scrollY >= 3200) {
          tagElementTextcaross3.classList.add("ourmsn2txt3anm");
          tagElementTextcaross4.classList.add("ourmsn2txt3anm");
        } else if (window.scrollY <= 2900) {
          tagElementTextcaross3.classList.remove("ourmsn2txt3anm");
          tagElementTextcaross4.classList.remove("ourmsn2txt3anm");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="mainSec5">
      <Container fluid className="main-section-5 p-4">
        <Container className="content-5">
          <Row>
            <Col className="whatsetsapart-banner" xs={12}>
              <div
                style={{
                  maxWidth: "100%",
                  display: "grid",
                  placeItems: "center",
                }}
              >
                {" "}
                <h2 id="ourmsn2txt" className="h1tagmissiontwo poppins-light">
                  What sets us apart
                </h2>
              </div>
            </Col>
            <Col xs={12} md={12}>
              <ul style={{ color: "white" }}>
                {""}
                <li
                  id="ourtxt1"
                  className="ourmsn2txt1 poppins-light"
                  style={{ fontSize: "1.4rem" }}
                >
                  Empowering Talents
                </li>
                <li id="ourtxt2" className="content-5-list p-tag ourmsn2txt1">
                  castmee empowers to take controle of their journey in the
                  entrtainment industry. Our user-friendly platform allows you
                  to create a comprehensive profile, showcase your skill and
                  connect with opportunities that align with your passion
                  expertise
                </li>
                <li
                  id="ourtxt3"
                  className="ourmsn2txt2 poppins-light"
                  style={{ fontSize: "1.4rem" }}
                >
                  Streamiling Casting Processs
                </li>
                <li id="ourtxt4" className="content-5-list p-tag ourmsn2txt2">
                  For casting professionals, castmee streamilines the casting
                  the casting process, providing a seamless and effcient way to
                  discover new a talents.Our platform is designed to save time,
                  simplify communication,and ensure you find the perfect fit for
                  your projects.{" "}
                </li>
                <li
                  id="ourtxt5"
                  className="ourmsn2txt3 poppins-light"
                  style={{ fontSize: "1.4rem" }}
                >
                  Fostering Success Stories
                </li>
                <li id="ourtxt6" className="content-5-list p-tag ourmsn2txt3">
                  We take pride in the success stories that have emerged from
                  the Castmee community. From landing breakthrough roles to
                  securing positions in top-notch productions, our talents have
                  proven that dreams can become reality with the right platform
                  and opportunities.{" "}
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default Ourmissiontwo;
