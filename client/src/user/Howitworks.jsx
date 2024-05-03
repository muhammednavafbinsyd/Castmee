import React, { useEffect } from "react";
import { CgSearch } from "react-icons/cg";
import { LuRadar } from "react-icons/lu";
import { IoMdPersonAdd } from "react-icons/io";
import Howitimg1 from "../assets/images/imagesCastmee/how it 1.png";
import Howitimg2 from "../assets/images/imagesCastmee/castmee how it works 2.jpg";
import Howitimg3 from "../assets/images/imagesCastmee/castmee how it works 3 (1).jpg";
import "../assets/usercss/style.css"
function Howitworks() {

  useEffect(()=>{
    const handleScroll = ()=>{
       

      const h1tag = document.getElementById("howitanimiation")
      const textdiv1 = document.getElementById("hw-mdiv-animation")
      const imgdivtwo = document.getElementById("animationclss")
      const imgdivscnd = document.getElementById("animationclssscnd")
      const txtdivscnd = document.getElementById("anmscndbanr")
      const txtdivthird = document.getElementById("lstanm")
      const imgdivthird = document.getElementById("lstanmimg")


      if(window.innerWidth <=933){
        if(window.scrollY >=5000){
          h1tag.classList.add("howittaganimate")
         }else if(window.scrollY <=3300){
          h1tag.classList.remove("howittaganimate")
         }  
      }
      if(window.innerWidth > 933){
        if(window.scrollY >=3400){
          h1tag.classList.add("howittaganimate")
         }else if(window.scrollY <=3300){
          h1tag.classList.remove("howittaganimate")
         }  
      }

      if(window.innerWidth <=933 ){
        if(window.scrollY >=5200){
          textdiv1.classList.add("hw-mdiv-animationcls")
          imgdivtwo.classList.add("hw-animationclss")
         }else if(window.scrollY <=3300){
          textdiv1.classList.remove("hw-mdiv-animationcls")
          imgdivtwo.classList.remove("hw-animationclss")
         }
      }
      if(window.innerWidth >933 ){
        if(window.scrollY >=3950){
          textdiv1.classList.add("hw-mdiv-animationcls")
          imgdivtwo.classList.add("hw-animationclss")
         }else if(window.scrollY <=3300){
          textdiv1.classList.remove("hw-mdiv-animationcls")
          imgdivtwo.classList.remove("hw-animationclss")
         }
      }
    
      if(window.innerWidth <=933){
        if(window.scrollY >=5400){
          imgdivscnd.classList.add("hw-animationclsssnd")
          txtdivscnd.classList.add("textanmscnd")
         }else if(window.scrollY <=3800){
          imgdivscnd.classList.remove("hw-animationclsssnd")
          txtdivscnd.classList.remove("textanmscnd")
         }

      }
      if(window.innerWidth >933){
        if(window.scrollY >=4450){
          imgdivscnd.classList.add("hw-animationclsssnd")
          txtdivscnd.classList.add("textanmscnd")
         }else if(window.scrollY <=3800){
          imgdivscnd.classList.remove("hw-animationclsssnd")
          txtdivscnd.classList.remove("textanmscnd")
      }

      }
       
       if(window.innerWidth <=933){
        if(window.scrollY >=5800){
          txtdivthird.classList.add("textanmlastanm")
          imgdivthird.classList.add("textanmlastimganm")
         }else if(window.scrollY <=4200){
          txtdivthird.classList.remove("textanmlastanm")
          imgdivthird.classList.remove("textanmlastimganm")
         }
      }
       if(window.innerWidth >933){
        if(window.scrollY >=4900){
          txtdivthird.classList.add("textanmlastanm")
          imgdivthird.classList.add("textanmlastimganm")
         }else if(window.scrollY <=4200){
          txtdivthird.classList.remove("textanmlastanm")
          imgdivthird.classList.remove("textanmlastimganm")
         }
        }
       }
     
    
 
   
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };



  })



  return (
    <div>
      {" "}
      <main className="hw-wrk"  >
        <section className="container my-4 mr-5 hw-wrkcnt hw-wrkcntanm"
        >
          <div className="row">
            <article id="howitanimiation" className="col-12 py-4 d-flex justify-content-center howitworksanimation ">
              <h1 className="poppins-light hw-wrkhead" >
                How it works<span style={{ color: "#FEC400" }}>...?</span>
              </h1>
            </article>
            {/* 1------------------------------------------------------------ */}
            <article
              id="hw-mdiv-animation"
              className="col-sm-12 col-md-12 col-lg-6 hw-mdiv-anm1"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div  className="hw-mdiv ">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "start",
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      backgroundColor: "black",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <IoMdPersonAdd
                      style={{ width: "60%", height: "60%", color: "white" }}
                    />
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "start",
                    width: "100%",
                    borderBottom: "solid",
                  }}
                >
                  <h2>Create Your Profile</h2>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "start",
                    width: "100%",
                  }}
                >
                  <p>
                    {" "}
                    Talents can easily create a detailed profile, showcasing
                    their skills, experiences, and unique qualities.{" "}
                  </p>
                </div>
              </div>
            </article>
            <article
              id="hw-mdiv-animationtwo"
              className="col-sm-12 col-md-12 col-lg-6 py-4 hw-mdiv-anmtwo"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",

              }}
            >
              <div  className="how-itimg1" 
                  >
                <img
                  className="hw-animation anmfirst"
                  id="animationclss"
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "32px",
                    objectFit: "cover",
                    
                  }}
                  src={Howitimg1}
                  alt=""
                />
              </div>
              
            </article>
            {/* 2------------------------------------------ */}
            <article
              className="col-sm-12 col-md-12 col-lg-6 hw-wrk21 hw-animation textanm"
              id="anmscndbanr"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div  className="hw-mdiv">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "start",
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      backgroundColor: "black",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <CgSearch
                      style={{ width: "60%", height: "60%", color: "white" }}
                    />
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "start",
                    width: "100%",
                    borderBottom: "solid",
                    overflow:"hidden",
                  }}
                >
                  <h2 >Discover Opportunities</h2>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "start",
                    width: "100%",
                  }}
                >
                  <p>
                    {" "}
                    Casting professionals can post opportunities, and talents
                    can explore a diverse range of auditions, casting calls, and
                    job openings.{" "}
                  </p>
                </div>
              </div>
            </article>
            <article
              className="col-sm-12 col-md-12 col-lg-6 py-4"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div className="how-itimg1">
                <img
                  className="hw-animation anmscnd"
                  id="animationclssscnd"
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "32px",
                    objectFit: "cover",
                  }}
                  src={Howitimg2}
                  alt=""
                />
              </div>
            </article>
            {/* 3---------------------------------------------- */}
            <article
              className="col-sm-12 col-md-12 col-lg-6 hw-animation hwitwrk-order textanmlast"
              id="lstanm"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div className="hw-mdiv">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "start",
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      backgroundColor: "black",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <LuRadar
                      style={{ width: "60%", height: "60%", color: "white" }}
                    />
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "start",
                    width: "100%",
                    borderBottom: "solid",
                  }}
                >
                  <h2>Application Tracker</h2>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "start",
                    width: "100%",
                  }}
                >
                  <p>
                    {" "}
                    Talents can keep track of their audition applications and
                    responses, ensuring a well-organized and efficient process.{" "}
                  </p>
                </div>
              </div>
            </article>
            <article
              className="col-sm-12 col-md-12 col-lg-6 py-4 hw-wrk31"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div className="how-itimg1">
                <img
                  className="hw-animation textanmlastimg"
                  id="lstanmimg"
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "32px",
                    objectFit: "cover",
                  }}
                  src={Howitimg3}
                  alt=""
                />
              </div>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Howitworks;
