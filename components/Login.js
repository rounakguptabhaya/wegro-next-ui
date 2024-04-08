"use client"

import React, { useRef, useState, useEffect } from 'react'
import Input from './Input'
import Button from './Button'

const Login = (props) => {

  const phoneNumberRef = useRef(null);
  const [phoneNumber,setPhoneNumber] = useState("");

  function generateOTP() {
    const otp = Math.floor(100000 + Math.random() * 900000);
    return otp;
  }


  const handleButtonClick = () => {
    if (phoneNumberRef.current) {
      const newPhoneNumber = phoneNumberRef.current.value;
      setPhoneNumber(newPhoneNumber);
      props.onPhoneNumberChange(newPhoneNumber);
    }
  };

  return (
    <div className="page-wrapper">
      <section className="register-one">
        <div className="auto-container">
          <div className="inner-container">
            <h3>Login</h3>
            <div className="register-form">
                <Input ref={phoneNumberRef} type="text" label="Enter WhatsApp Number" name="phone-number" placeholder="Enter WhatsApp Number" required={true}/>
                <Button onClick={handleButtonClick} name="Get OTP on WhatsApp"/>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Login