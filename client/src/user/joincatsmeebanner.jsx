import React, { useEffect } from "react";
import "../assets/usercss/style.css"
function Joincatsmeebanner() {

  useEffect(() => {
    

    const handleScroll = () => {
      const tagElement = document.getElementById("jstmee");
      const tagElementbtn = document.getElementById("jstmeebtn");
      if (window.scrollY >= 170) {
        tagElement.classList.add("jstmeeanimation");
        tagElementbtn.classList.add("jstmeeanimation");    
      } else if(window.scrollY <= 120 ) {       
        tagElement.classList.remove("jstmeeanimation");
        tagElementbtn.classList.remove("jstmeeanimation");
      }     
    };
    
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <main className="banner-1">
        <div
          className="container my-4"
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
                height:'auto'
              }}
            >
              <div className="container-fluid ">
                <div className="row">
                  <div className="col-sm-6 col-md-6 col-lg-6 b1-sect1 py-1 jstmee">
                    <h3 id="jstmee" className="poppins-extralight b1-text py-3 joincstmee">
                      Join <span className="poppins-semibold">cast</span>
                      <span style={{ color: "#FEC400" }}>mee</span> Today !
                    </h3>
                  </div>
                  <div className="col-sm-6 col-md-6  b1-sect2 py-1 joincstmeebtncls ">
                    <button id="jstmeebtn" className="banner1-btn poppins-light joincstmeebtn">Sign up</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Joincatsmeebanner;
