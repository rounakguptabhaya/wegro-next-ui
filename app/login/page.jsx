"use client"

import Login from "@/components/Login";
import { useEffect, useRef, useState } from "react";
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation'

import jwt from 'jsonwebtoken';


import { alert, defaultModules } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import * as PNotifyMobile from '@pnotify/mobile';
import '@pnotify/mobile/dist/PNotifyMobile.css';
import '@pnotify/core/dist/BrightTheme.css';

const LoginPage = () => {
  
  // const [phoneNumber, setPhoneNumber] = useState('');
  // const phoneNumberRef = useRef();

  const router = useRouter();

  const searchParams = useSearchParams();

  const referralId = searchParams.get('referralId');

  console.log("Parameter::",referralId);

  

  // function generateOTP() {
  //   const otp = Math.floor(100000 + Math.random() * 900000);
  //   return otp;
  // }

  const isLoggedIn = async () => {
    const postData = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    }

    const res = await fetch('http://localhost:3000/api/users',postData);

    const response = await res.json();
    console.log(response)
    if(response.token){
      console.log(response.token);
      router.push('/watchlist');
    }
  }

  const handlePhoneNumberChange = async (number) => {
    // setPhoneNumber(number);
    // phoneNumberRef.current = number;
    console.log("Page.jsx useRef::",number);

    // const otp = generateOTP();
    
    const alphabetRegex = /[a-zA-Z]/;

    if (alphabetRegex.test(number)) {
        console.log("The string contains alphabets");

    } else {
        // console.log(number,otp);
        const postData = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                phone_number: number,
                // otp: otp,
                referralId: referralId,
            }),
        }

        const res = await fetch('http://localhost:3000/api/users', postData);

        const response = await res.json();
        console.log("Response from does user exists?::", response);
        
        if(response.message === "Success"){
          router.push('/validateOtp');
        }
        

        // router.push('/validateOtp');

        // history.push('/validateOtp/page');
        const token = response.token;

        const decoded_token = jwt.decode(token);

        

        // console.log("Token::",decoded_token.phone_number);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <Login onPhoneNumberChange={handlePhoneNumberChange}/>
  );
};

export default LoginPage;
