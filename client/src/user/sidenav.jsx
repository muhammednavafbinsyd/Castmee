import React from 'react'
import { GrHomeOption } from "react-icons/gr";
import { TbBrandBlogger } from "react-icons/tb";
import { FiInfo } from "react-icons/fi";
import { BiCog } from "react-icons/bi";
import { IoCallOutline } from "react-icons/io5";
function Sidenav() {
  return (
    <div>
        <div className='m-3' style={{width:'5%', display:'flex', alignItems:'center', flexDirection:'column', backgroundColor:'#00000085', color:'white', borderRadius:'40px', position:'fixed', top:'35%'}}>
            <ul style={{listStyle:"none", padding:'0'}}>
                <li className='py-5'><GrHomeOption className='sidenav-log'/></li>
            
                <li className='py-5'><TbBrandBlogger  className='sidenav-log'/></li>
            
                <li className='py-5'><FiInfo  className='sidenav-log'/></li>
            
                <li className='py-5'><BiCog  className='sidenav-log'/></li>
           
                <li className='py-5'><IoCallOutline  className='sidenav-log'/></li>
            </ul>
        </div>
    </div>
  )
}

export default Sidenav