import React from "react";
import "../assets/usercss/style.css";
import Container from 'react-bootstrap/Container';
function banner2() {
  return (
    <div>
      <Container>
      <main className="banner-1">
        <div
          className="container py-3"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="row b1-row" style={{ width: "100%", height: "auto" }}>
            <div
              className="col-12 b1-section"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div className="container-fluid ">
                <div className="row">
                  <div className="col-sm-6 col-md-6 col-lg-6 b1-sect1 py-1">
                    <h3 className="poppins-extralight b1-text">
                      Join <span className="poppins-semibold">cast</span>
                      <span style={{ color: "#FEC400" }}>mee</span> Today !
                    </h3>
                  </div>
                  <div className="col-sm-6 col-md-6  b1-sect2 py-1">
                    <button className="banner1-btn poppins-light">Sign up</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      </Container>
    </div>
  );
}

export default banner2;
