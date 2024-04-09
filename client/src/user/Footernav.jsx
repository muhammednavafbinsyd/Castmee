import React from "react";
import { Link } from "react-scroll";
import Logo from '../assets/images/imagesCastmee/Logo__1_-removebg-preview.png'
import { TbBrandBlogger } from "react-icons/tb";
import { FiInfo } from "react-icons/fi";
import { BiCog } from "react-icons/bi";
import { IoCallOutline } from "react-icons/io5";
function Footernav() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="footernav-container">
      <Link to="about">
          {/* <button className="footernav-btn">
            <svg
              viewBox="0 0 1024 1024"
              fill="currentColor"
              height="1em"
              width="1em"
              className="ftnav-icon"
            >
              <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" />
            </svg>
          </button> */}
           <FiInfo style={{width:'100%', color:'white', height:'25px'}}/>
        </Link>
        <Link to="ourservice">
          {/* <button className="footernav-btn">
            <svg
              viewBox="0 0 640 512"
              fill="currentColor"
              height="1em"
              width="1em"
              className="ftnav-icon"
            >
              <path d="M543.9 251.4c0-1.1.1-2.2.1-3.4 0-48.6-39.4-88-88-88H304v88c0 22.1-17.9 40-40 40s-40-17.9-40-40V128h.4c4-36 34.5-64 71.6-64h112c2.8 0 5.6.2 8.3.5l40.1-40.1c21.9-21.9 57.3-21.9 79.2 0l78.1 78.1c21.9 21.9 21.9 57.3 0 79.2L544 251.4zM192 128v120c0 39.8 32.2 72 72 72s72-32.2 72-72v-56h120c30.9 0 56 25.1 56 56 0 27.2-19.4 49.9-45.2 55 8.2 8.6 13.2 20.2 13.2 33 0 26.5-21.5 48-48 48h-2.7c1.8 5 2.7 10.4 2.7 16 0 26.5-21.5 48-48 48H224c-.9 0-1.8 0-2.7-.1l-37.7 37.7c-21.9 21.9-57.3 21.9-79.2 0l-78.1-78c-21.9-21.9-21.9-57.3 0-79.2L96 258.7V224c0-53 43-96 96-96z" />
            </svg>
          </button> */}
           <BiCog style={{width:'100%', color:'white', height:'25px'}}/>
        </Link>
        <Link to="home">
          <button className="footernav-btn">
           <img style={{width:'200%'}} src={Logo} alt="" />
          </button>
        </Link>
        <Link to="blog">
          {/* <button className="footernav-btn">
            <svg
              viewBox="0 0 21 21"
              fill="currentColor"
              height="1em"
              width="1em"
              className="ftnav-icon"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 15.5v-8l-4-4h-6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2z"
              />
            </svg>
          </button> */}
          <TbBrandBlogger style={{width:'100%', color:'white', height:'25px'}}/>
        </Link>
       
       
       
        <Link to="contactus">
          {/* <button className="footernav-btn">
            <svg
              viewBox="0 0 1024 1024"
              fill="currentColor"
              height="1em"
              width="1em"
              className="ftnav-icon"
            >
              <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 632H136V232h752v560zM610.3 476h123.4c1.3 0 2.3-3.6 2.3-8v-48c0-4.4-1-8-2.3-8H610.3c-1.3 0-2.3 3.6-2.3 8v48c0 4.4 1 8 2.3 8zm4.8 144h185.7c3.9 0 7.1-3.6 7.1-8v-48c0-4.4-3.2-8-7.1-8H615.1c-3.9 0-7.1 3.6-7.1 8v48c0 4.4 3.2 8 7.1 8zM224 673h43.9c4.2 0 7.6-3.3 7.9-7.5 3.8-50.5 46-90.5 97.2-90.5s93.4 40 97.2 90.5c.3 4.2 3.7 7.5 7.9 7.5H522a8 8 0 008-8.4c-2.8-53.3-32-99.7-74.6-126.1a111.8 111.8 0 0029.1-75.5c0-61.9-49.9-112-111.4-112s-111.4 50.1-111.4 112c0 29.1 11 55.5 29.1 75.5a158.09 158.09 0 00-74.6 126.1c-.4 4.6 3.2 8.4 7.8 8.4zm149-262c28.5 0 51.7 23.3 51.7 52s-23.2 52-51.7 52-51.7-23.3-51.7-52 23.2-52 51.7-52z" />
            </svg>
          </button> */}
            <IoCallOutline style={{width:'100%', color:'white', height:'25px'}}/>
        </Link>
      </div>
    </div>
  );
}

export default Footernav;
