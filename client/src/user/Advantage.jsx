import React ,{useEffect} from "react";
import { IoMdPersonAdd } from "react-icons/io";
import { RiApps2Line } from "react-icons/ri";
import { FiLink } from "react-icons/fi";
import "../assets/usercss/style.css"
function Advantage() {


  useEffect(() => {
    const handleScroll = ()=>{

    const firstarticle = document.getElementById("sign-inanimationadv")
    const secondarticle = document.getElementById("anm1")
    const thirdarticle = document.getElementById("anm2")
    const fourtharticle = document.getElementById("anm3")
    
    if(window.scrollY >=1800){
      firstarticle.classList.add("advantagearticleanimation")
      secondarticle.classList.add("anm1")
      thirdarticle.classList.add("anm2")
      fourtharticle.classList.add("anm3")

    }else if(window.scrollY <=1500){
      firstarticle.classList.remove("advantagearticleanimation")
      secondarticle.classList.remove("anm1")
      thirdarticle.classList.remove("anm2")
      fourtharticle.classList.remove("anm3")
    }
   
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);




  return (
    <div>
      {" "}
      <main className="Advantage">
        <div className="container">
          <section className="row p-4">
            <article
               
              id="sign-inanimationadv"
              style={{ display: "grid", placeItems: "center" }}
              className="col-md-12 col-lg-4 advantagecol-1 my-4 p-4  firstarticle-div"
            >
              <div className="adfirst-div ">
                <h2>Advantage of sign in </h2>
                <button className="banner1-btn poppins-light">Sign in</button>
                <p className="text-white">Dont have an account yet?</p>
                <button className="banner1-btn poppins-light bg-secondary">
                  Sign up
                </button>
              </div>
            </article>
            <article
              className="col-md-12 col-lg-8  my-4 p-4 sign-inanimationtexts"
              style={{ display: "grid", placeItems: "center", gap: "20px" }}
            >
              <div id="anm1" className="adv-arti2  adv-arti2-animation1 ">
                <div
                  style={{
                    width: "20%",
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <IoMdPersonAdd className="advantage-icn" />
                </div>
                <div style={{ width: "80%" }} >
                  <h3>Manage Your Profile</h3>
                  <p>
                    Update your profile, add new experiences, and showcase your
                    evolving talents.
                  </p>
                </div>
              </div>
              <div id="anm2" className="adv-arti2 adv-arti2-animation1 " >
                <div
                  style={{
                    width: "20%",
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <RiApps2Line className="advantage-icn" />
                </div>
                <div style={{ width: "80%" }}>
                  <h3>Effortless Applications</h3>
                  <p>
                    Sign in to seamlessly track your audition applications and
                    stay organized.
                  </p>
                </div>
              </div>
              <div id="anm3" className="adv-arti2 adv-arti2-animation1 ">
                <div
                  style={{
                    width: "20%",
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <FiLink className="advantage-icn" />
                </div>
                <div style={{ width: "80%" }}>
                  <h3>Stay Connected</h3>
                  <p>
                    Access personalized recommendations based on your
                    preferences and previous activities.
                  </p>
                </div>
              </div>
            </article>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Advantage;
