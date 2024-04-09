// import React, { useEffect } from "react";
// import "../assets/usercss/style.css";
// import { Link } from "react-scroll";
// import Container from "react-bootstrap/Container";
// import { GrHomeOption } from "react-icons/gr";
// import { TbBrandBlogger } from "react-icons/tb";
// import { FiInfo } from "react-icons/fi";
// import { BiCog } from "react-icons/bi";
// import { IoCallOutline } from "react-icons/io5";
// import { LiaBookSolid } from "react-icons/lia";

// function Navbar() {
//   useEffect(() => {
//     document.getElementById("nav").classList.add("transition");
//   }, []);
//   return (
//     <div>
//       <Container fluid style={{ color: "white" }}>
//         <div className="navs">
//           <ul id="nav" className="lists">
//             <Link style={{ cursor: "pointer" }} to="home">
//               <li className="tooltip-container">
//                 <div className="tooltip-text">Home</div>
//                 <GrHomeOption className="icon absolute-icon" />
//               </li>
//             </Link>
//             <Link style={{ cursor: "pointer" }} to="about">
//               <li className="tooltip-container">
//                 <div className="tooltip-text">About Us</div>
//                 <FiInfo className="icon absolute-icon" />
//               </li>
//             </Link>
//             <Link style={{ cursor: "pointer" }} to="ourservice">
//               <li className="tooltip-container">
//                 <div className="tooltip-text">Our Services</div>
//                 <BiCog className="icon absolute-icon" />
//               </li>
//             </Link>
//             <Link style={{ cursor: "pointer" }} to="blog">
//               <li className="tooltip-container">
//                 <div className="tooltip-text">Blog</div>
//                 <TbBrandBlogger className="icon absolute-icon" />
//               </li>
//             </Link>
//             <Link style={{ cursor: "pointer" }} to="store">
//               <li className="tooltip-container">
//                 <div className="tooltip-text">Books</div>
//                 <LiaBookSolid
//                   style={{ width: "20px", height: "20px" }}
//                   className="icon absolute-icon"
//                 />
//               </li>
//             </Link>
//             <Link style={{ cursor: "pointer" }} to="contactus">
//               <li className="tooltip-container">
//                 <div className="tooltip-text">Contact Us</div>
//                 <IoCallOutline className="icon absolute-icon" />
//               </li>
//             </Link>
//           </ul>
//         </div>
//       </Container>
//     </div>
//   );
// }

// export default Navbar;
