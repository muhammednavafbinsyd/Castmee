import React, { useEffect, useState } from "react";
import axios from "axios";
import { ClipLoader } from "react-spinners";

function ContactUs() {
  const ServerURL = process.env.REACT_APP_CASTMEE_URL;

  useEffect(() => {
    const handleScroll = () => {
      const h1tag = document.getElementById("h1tagcont-us");
      const ptag = document.getElementById("ptagcont-us");
      const form = document.getElementById("formcontact-us");
      const scrollY = window.scrollY || window.pageYOffset;
      const innerWidth = window.innerWidth;
      
      if (innerWidth <= 933) {
        if (scrollY >= 6200) {
          h1tag.classList.add("h1taganimation");
          ptag.classList.add("ptaganimationcont-us");
          form.classList.add("form-cont-us-animation");
        } else if (scrollY <= 4400) {
          h1tag.classList.remove("h1taganimation");
          ptag.classList.remove("ptaganimationcont-us");
          form.classList.remove("form-cont-us-animation");
        }
      }
      
      if (innerWidth > 933) {
        if (scrollY >= 5800) {
          h1tag.classList.add("h1taganimation");
          ptag.classList.add("ptaganimationcont-us");
          form.classList.add("form-cont-us-animation");
        } else if (scrollY <= 4400) {
          h1tag.classList.remove("h1taganimation");
          ptag.classList.remove("ptaganimationcont-us");
          form.classList.remove("form-cont-us-animation");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [invalid, setInvalid] = useState("");

  const sendMail = (e) => {
    e.preventDefault();
    setLoading(true);
    const validationErrors = [];
    if (!name.trim()) {
      setNameError("Name is required");
      validationErrors.push("Name is required");
    } else {
      setNameError("");
    }

    if (!email.trim()) {
      setEmailError("Email is required");
      validationErrors.push("Email is required");
    } else {
      setEmailError("");
    }

    if (!message.trim()) {
      setMessageError("Message is required");
      validationErrors.push("Message is required");
    } else {
      setMessageError("");
    }

    if (validationErrors.length === 0) {
      const mailData = {
        name: name,
        email: email,
        message: message
      };

      axios
        .post(`${ServerURL}/users/send_mail`, mailData)
        .then((response) => {
          setLoading(false);
          if (response.status === 200) {
            alert("Successfully sent your feedback");
            setNameError("");
            setEmailError("");
            setMessageError("");
            setInvalid("");
            setEmail("");
            setName("");
            setMessage("");
        }        
        })
        .catch((error) => {
          setLoading(false);
          if (error.response && (error.response.status === 400 || error.response.status === 401 )) {
            setInvalid(error.response.data.email);
          } else {
            console.log("Error:", error);
          }
        });
    } else {
      setLoading(false);
    }
  };

  

  return (
    <div>
      <main name='contactus' className="contact-us">
        <section className="container my-4 contactus-cont ">
          <div className="row">
            <article id="h1tagcont-us" className="col-12 py-4 d-flex justify-content-center contactusanmdiv">
              <h1 className="poppins-light hw-wrkhead text-white">
                Contact<span style={{ color: "#FEC400" }}> us</span>
              </h1>
            </article>
            <article
              id="ptagcont-us"
              className="col-12 contactusanmdivtwo"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div style={{ width: "50%" }}>
                <h4 className="poppins-light text-white">
                  Post your valuable feedback and suggestions here.
                </h4>
              </div>
            </article>
            <article
              id="formcontact-us"
              className="col-12 contact-us-div-three"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div className="form-container my-4 ">
                <form className="form" onSubmit={sendMail}>
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter your name"                  
                      style={{ borderRadius: '10px' }}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    {nameError && <p style={{color:"red", fontSize:"13px"}}>{nameError}</p>}
                    <label>Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      style={{ borderRadius: '10px' }}
                      className="my-2"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {emailError && <p style={{color:"red" , fontSize:"13px"}}>{emailError}</p>}
                    {invalid && <p style={{ color: "red", fontSize: "13px" ,  }}>{invalid}</p>}
                    <label>Message</label>
                    <textarea
                      style={{padding:"15px"}}
                      placeholder="Enter your message"
                      className="form-textarea"
                      name="message"                     
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>
                  {messageError && <p style={{color:"red" , fontSize:"13px"}}>{messageError}</p>}
                  <button className="form-submit-btn" type="submit">
                    {loading ? <ClipLoader color={"#ffff"} loading={loading} size={20} /> : "Submit"}
                  </button>
                </form>
              </div>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ContactUs;
