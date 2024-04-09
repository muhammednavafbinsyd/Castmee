import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import "../assets/usercss/style.css";
import Footer from "./footer";
import FooterNav from "./Footernav"
// import Navbar from "./Navbar"

function BlogView() {
  const ServerURL = process.env.REACT_APP_CASTMEE_URL;
  const [blogdata, setBlogdata] = useState([]);
  const { Title } = useParams("");

  useEffect(() => {
    const blog = async (blogTitle) => {
      try {
        const formattedTitle = blogTitle.replace(/-/g, " ");
        const decodedTitle = decodeURIComponent(formattedTitle);
        const response = await axios.get(
          `${ServerURL}/users/blog_read_view/${encodeURIComponent(decodedTitle)}`
        );
        setBlogdata(response.data); 
        console.log(response.data, "14144");
      } catch (error) {
        console.log(error);
      }
    };
    blog(Title);
  }, [Title,ServerURL]);

  const containerStyle = {
    background: "rgba(0, 0, 0, 0.5)",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    
    
};

  return (
    <div> 
      <Container>
      {/* <Navbar/> */}
        <div 
          
          className="my-5 rounded "
          style={containerStyle}
        >
          <p style={{color:"white",}}>BLOG {'>'}</p> 
          <Link to="/castmeeusers">Home</Link>
        </div>
        <div >
          <p className="my-3">{blogdata.Title}</p>
          <img style={{ maxWidth: "100%" }} src={`${ServerURL}/uploads/${blogdata.Image}`} alt=""></img>{" "}
        </div>
        
        <div>  {blogdata && <div dangerouslySetInnerHTML={{ __html: blogdata.Description || "" }} />}</div>
      </Container>
      <Footer/>
      {/* <FooterNav/> */}
    </div>
  );
}

export default BlogView;
