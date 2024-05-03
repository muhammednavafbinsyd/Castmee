/**
=========================================================
* Soft UI Dashboard React - v4.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Switch from "@mui/material/Switch";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import curved9 from "assets/images/curved-images/white-curved.jpeg";
import axios from "axios";

function SignIn () {

  const ServerURL = process.env.REACT_APP_CASTMEE_URL;

  const [email,setemail] = useState();
  const [password,setpassword] = useState();
  const [invalid,setinvalid] = useState();


  function login(){

    if(!email && !password){
      setinvalid("Enter email or password");
    }else{
      const logindata = {
        input1:email,
        input2:password
      };
      axios.post(`${ServerURL}/users/admin_login`,logindata)
      .then((response)=>{
        if(response.status === 200){
          localStorage.setItem("token",response.data.token);
          window.location="/book";
        }
      })
      .catch((error)=>{
        console.log(error);
        setinvalid("Invalid email or password");
      })
    }

  }


  return (
    <CoverLayout
      title="Welcome back"
      description="Enter your email and password to sign in"
      image={curved9}
    >
      <SoftBox component="form" role="form">
        <SoftBox mb={2}>
          <SoftBox mb={1} ml={0.5}>
          {invalid && <p style={{ color: "red"}}>{invalid}</p>}
            <SoftTypography component="label" variant="caption" fontWeight="bold" >
              Username
            </SoftTypography>
          </SoftBox>
          <SoftInput type="email" placeholder="Email" onChange={(e)=>setemail(e.target.value)} />
        </SoftBox>
        <SoftBox mb={2}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold"  >
              Password
            </SoftTypography>
          </SoftBox>
          <SoftInput type="password" placeholder="Password"  onChange={(e)=>setpassword(e.target.value)} />
        </SoftBox>
        <SoftBox mt={4} mb={1}>
          <SoftButton onClick={login} variant="gradient" color="info" fullWidth>
            sign in
          </SoftButton>
        </SoftBox>
        <SoftBox mt={3} textAlign="center">
        </SoftBox>
      </SoftBox>
    </CoverLayout>
  );
}

export default SignIn;
