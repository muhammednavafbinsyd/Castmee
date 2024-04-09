import React, { useEffect } from "react";
import Image from "../assets/images/imagesCastmee/castmee bn-2 img.png";
import "../assets/usercss/style.css"
function CastmeeLogobanner() {
  useEffect(() => {
    const handleScroll = () => {
      const tagElement = document.getElementById("cstmeeimg");
      const tagElementtxt = document.getElementById("cstmeetxt");
      if (window.scrollY >= 950) {
        tagElement.classList.add("cstmeeanimation");
        tagElementtxt.classList.add("cstmeeanimation");
      } else if(window.scrollY <= 520 ) {
        tagElement.classList.remove("cstmeeanimation");
        tagElementtxt.classList.remove("cstmeeanimation")
      }
    }; 
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <main className="banner-2">
        <section className="container b2-cont">
          <article className="row" style={{ width: "100%" }}>
            <div className="col-sm-12 col-md-6 col-lg-6 b2-cl1 py-3 cstimgdiv">
              <img id="cstmeeimg" className="b2-cl1-img cstimg" src={Image} alt="img" />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 b2-cl2 csttxtdiv">
              <h2 id="cstmeetxt" className="poppins-semibold pt-3  csttxt">
                Cast
                <span
                  className="poppins-extralight"
                  style={{ color: "#FEC400" }}
                >
                  mee
                </span>
              </h2>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}

export default CastmeeLogobanner;
