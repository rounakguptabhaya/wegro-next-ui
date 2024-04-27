
"use client"

import UserProfile from "@/components/UserProfile"
import { useEffect, useState } from "react"
import { useRouter } from 'next/navigation';
import Loading from "@/components/Loading";


const userProfile = () => {

//   const [name, setName] = useState("NA");
//   const [email, setEmail] = useState("NA");
  const [userDetail, setUserDetail] = useState({
    name: "NA",
    email: "NA",
  });
  const [mobileNumber, setMobileNumber] = useState("NA")
  const [id, setId] = useState("");

  const [preferences, setPreferences] = useState({
    keyUpdates: 1,
    analyticalUpdates: 1,
    eventSchedulars: 1,
    technicalIdea: 1,
    mediaCoverage: 1,
  });

  const [keyUpdates, setKeyUpdates] = useState(1);
  const [analyticalUpdates, setAnalyticalKeyUpdates] = useState(1);
  const [eventSchedulars, setEventSchedulars] = useState(1);
  const [technicalIdea, setTechnicalIdea] = useState(1);
  const [mediaCoverage, setMediaCoverage] = useState(1);
  const [isLoading, setLoading] = useState(true);

  const router = useRouter();


  const getUserProfile = async() => {
    try{
        const postData = {
            method: "GET",
            headers: {
                "Content-type": "application/json",
            }
        }
    
        const res = await fetch('http://localhost:3000/api/userProfile', postData);
    
        const response = await res.json();
    
        if(response.message === "Success"){
            console.log("Response::",response.userPreferences);
            setKeyUpdates(response.userData[0].keyUpdates);
            setAnalyticalKeyUpdates(response.userData[0].analyticalUpdates);
            setEventSchedulars(response.userData[0].eventSchedulars);
            setTechnicalIdea(response.userData[0].technicalIdea);
            setMediaCoverage(response.userData[0].mediaCoverage);
            setPreferences(response.userPreferences[0]);
            response.fullname && setUserDetail(prev => ({...prev, name:response.fullname}));
            response.email && setUserDetail(prev => ({...prev, email:response.email}));
            response.phoneNumber && setMobileNumber(response.phoneNumber); 
            setId(response.subscriberId);
        }
    }catch(error){
        console.error("Error fetching user profile:", error);
    }finally{
        setLoading(false);
    }
    
  }

  const handleClick = async() => {
    router.push('/editPersonalDetail')
  }

  const handleToggle = async(key) => {

    const postData = {
        method:"PUT",
        headers:{
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            preference: key,
            value: preferences[key],
            id: id
        })
    }

    const res = await fetch('http://localhost:3000/api/userProfile', postData);
    const response = await res.json();

    if(response.message === "Success"){
        setPreferences(prevPreferences => ({
            ...prevPreferences,
            [key]: !prevPreferences[key],
        }));
    }else{
        console.log(response.message);
    }

    // setKeyUpdates(!keyUpdates);
    // console.log(preferences);
    
  }


  useEffect(() => {
    getUserProfile();
  }, [])

  return (
    <>
        {!isLoading ? <UserProfile name={userDetail.name} email={userDetail.email} mobileNumber={mobileNumber} handleClick={handleClick} handleToggle={handleToggle} preferences={preferences}/>: <Loading />}
        
    </>
    
  )
}

export default userProfile