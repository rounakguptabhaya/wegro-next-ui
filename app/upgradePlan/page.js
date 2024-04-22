"use client"

import Upgrade from '@/components/Upgrade';
import React, { useEffect, useState } from 'react'

const upgradePlan = () => {

  const [plan, setPlan] = useState({});  

  const getPlans = async () => {
    const postData = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    }

    const res = await fetch('http://localhost:3000/api/getPlans',postData);

    const response = await res.json();

    if(response.message === "Success"){
        // console.log(response.plans[1]);
        setPlan(response.plans[1]);
    }else{
        console.log(response.message);
    }
  } 

  useEffect(() => {
    getPlans();
  }, [])



  return (
    <Upgrade plan={plan}/>
  )
}

export default upgradePlan;