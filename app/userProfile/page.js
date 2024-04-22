
"use client"

import UserProfile from "@/components/UserProfile"
import { useEffect, useState } from "react"

const userProfile = () => {

  const [name, setName] = useState("NA");
  const [email, setEmail] = useState("NA");
  const [mobileNumber, setMobileNumber] = useState("NA")
  const [id, setId] = useState("");

  const getUserProfile = async() => {
    const postData = {
        method: "GET",
        headers: {
            "Content-type": "application/json",
        }
    }


    const res = await fetch('http://localhost:3000/api/userProfile', postData);

    const response = await res.json();

    if(response.message === "Success"){
        console.log("Response::",response);
        response.fullname && setName(response.fullname);
        response.email && setEmail(response.email);
        response.phoneNumber && setMobileNumber(response.phoneNumber); 
        setId(response.subscriberId);
    }else{
        console.log("Error");
    }
  }

  const handleClick = async(op) => {
    console.log(op);
    const postData = {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            name: name,
            email: email,
            mobileNumber: mobileNumber,
        }),
    }

    
  }


  useEffect(() => {
    getUserProfile();
  }, [])

  return (
    <UserProfile name={name} email={email} mobileNumber={mobileNumber} handleClick={handleClick}/>
  )
}

export default userProfile