"use client"

import Validation from "@/components/Validation"
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import jwt from 'jsonwebtoken';

import { alert, defaultModules } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import * as PNotifyMobile from '@pnotify/mobile';
import '@pnotify/mobile/dist/PNotifyMobile.css';
import '@pnotify/core/dist/BrightTheme.css';


defaultModules.set(PNotifyMobile, {});


const validateOtp = () => {
    console.log("Validate Otp component");

    const [phoneNumber,setPhoneNumber] = useState("");
    const [otpNumber,setOtpNumber] = useState("");
    const router = useRouter();


    // function generateOTP() {
    //     const otp = Math.floor(100000 + Math.random() * 900000);
    //     return otp;
    // }

    const getToken = async () => {
        const postData = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        }

        const res = await fetch('http://localhost:3000/api/validate', postData);
        const response = await res.json();

        alert({
            text: "98% of users get OTP on WhatsApp within 1 minute.",
        })

        const token = response.token;
        const decodedToken = jwt.decode(token);

        if(decodedToken.otp_validation === 1){

            router.push('/watchlist');
        }

        console.log(decodedToken.phone_number);
        setPhoneNumber(decodedToken.phone_number);
        setOtpNumber(decodedToken.otp_number);

    }
 
    const handleCredChange = async (otp) => {
        // setPhoneNumber(number);
        // phoneNumberRef.current = number;

        console.log("Page.jsx phone number useRef::",phoneNumber);
        console.log("Page.jsx otp useRef::",otp);

        const alphabetRegex = /[a-zA-Z]/;

        if (alphabetRegex.test(phoneNumber) || alphabetRegex.test(otp)) {
            console.log("The string contains alphabets");

        } else {
            // console.log(number,otp);
            const postData = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    phone_number: phoneNumber,
                    otp: otp,
                }),
            }

            const res = await fetch('http://localhost:3000/api/validate', postData);

            const response = await res.json();
            console.log("Status Flag:-", response.status);
            if(response.message === "success"){

                router.push('/watchlist');
            }
            else{
                alert(response.message)
            }
        }
      };

      const handleUpdate = async () => {
        console.log("Resend OTP Button Pressed");
        // const updatedOtp = generateOTP();;
        // setOtpNumber(updatedOtp);

        const postData = {
            method:"POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                phone_number: phoneNumber,
                // otp: updatedOtp,
            })
        }

        const res = await fetch("http://localhost:3000/api/update", postData);

        const response = await res.json();

        console.log(response);
      } 

      useEffect(() => {
        getToken();
      },[]);
      

  return (
    <Validation phoneNumber = {phoneNumber} onCredChange={handleCredChange} onUpdate = {handleUpdate}/>
  )
}

export default validateOtp