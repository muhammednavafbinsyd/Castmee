import React, { useEffect } from 'react';
import { Link} from 'react-scroll';
import logo from '../assets/images/imagesCastmee/Logo__1_-removebg-preview.png';
import '../assets/usercss/style.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faUser } from '@fortawesome/free-solid-svg-icons';
import { GrHomeOption } from "react-icons/gr";
import { TbBrandBlogger } from "react-icons/tb";
import { FiInfo } from "react-icons/fi";
import { BiCog } from "react-icons/bi";
import { IoCallOutline } from "react-icons/io5";
import { LiaBookSolid } from "react-icons/lia";


function Home() {
  useEffect(() => {  
    document.getElementById('logo').classList.add('transition');
    document.getElementById('logoHead').classList.add('transition')
    document.getElementById('btn').classList.add('transition');
    document.getElementById('nav').classList.add('transition');
    document.getElementById('h2tage').classList.add('transition')
  }, []);

  const handleNavigation  = () =>{
    window.location.href ="/authentication/sign-in"
  }
  const pageLoad = () =>{ window.location.reload("/castmeeusers");}

  return (
    <div  className='section1'>
      <Container fluid name='home'>
        <Row className='pt-4'>
          <Col style={{display:'flex', alignItems:'center', justifyContent:'flex-start'}} className='sec1col col-6' >
          <img   id="logo" style={{width:'25%'}}  onClick={handleNavigation}  className="logo"  src={logo} alt="" />
          <h3 onClick={pageLoad}  id="logoHead" style={{color:'white' ,cursor:"pointer"}}  className="logoHead poppins-semibold">Cast<span style={{color:'#FEC400'}} className='poppins-light'>mee</span></h3>
          </Col>
          <Col style={{display:'flex', alignItems:'center', justifyContent:'end'}}>
          <span className='scbtn'>
          <button id="btn" className="sec1_btn">
              <FontAwesomeIcon className='btnname' icon={faUser} /> <span className='btnname'>Sign in</span>
            </button>
            </span>
          </Col>
        </Row>
      </Container>

      <Container fluid style={{color:"white"}} >
        <div className='navs'>
        <ul id="nav" className="lists">
          <Link style={{cursor:'pointer'}} to='home'>
          <li className="tooltip-container">
            <div className="tooltip-text">Home</div>
            <GrHomeOption className='icon absolute-icon'/>
          </li>
          </Link>
          <Link style={{cursor:'pointer'}}to='about'><li className="tooltip-container">
            <div className="tooltip-text">About Us</div>
            <FiInfo className='icon absolute-icon'/>
          </li>
          </Link>
          <Link style={{cursor:'pointer'}}to='ourservice'>
          <li className="tooltip-container">
            <div className="tooltip-text">Our Services</div>
            <BiCog  className='icon absolute-icon'/>
          </li>
          </Link>
          <Link style={{cursor:'pointer'}}to='blog'>
          <li className="tooltip-container">
            <div className="tooltip-text">Blog</div>
            <TbBrandBlogger className='icon absolute-icon' />
          </li>
          </Link>
         
          <Link style={{cursor:'pointer'}}to='store'>
          <li className="tooltip-container">
            <div className="tooltip-text">Books</div>
            <LiaBookSolid style={{width:'20px', height:'20px'}} className='icon absolute-icon'/>
          </li>
          </Link>
          <Link style={{cursor:'pointer'}}to='contactus'>
          <li className="tooltip-container">
            <div className="tooltip-text">Contact Us</div>
            <IoCallOutline  className='icon absolute-icon'/>
          </li>
          </Link>
        </ul>
        </div>
      </Container>

      <div className='container'>
        <div className='row'>
          <Col  id="h2tage" className="h2tag col-6 p-4" xs={12} md={12} lg={12} style={{width:'auto'}}>
          <h2 >
            Welcome To <br />
            <span className="cast">cast</span>
            <span className="mee">mee</span>
          </h2>
          <p  style={{color:'white'}}>An innovation from Cinesphere Private Limited</p>
          </Col>
        </div>
      </div>
      <Link to='store'>
      <div className='round-div'>
        <LiaBookSolid style={{width:'100%', height:'60%'}}/>
      </div>
      </Link>
    </div>
  );
}

export default Home;
