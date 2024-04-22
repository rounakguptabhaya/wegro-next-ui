import React, { useEffect } from 'react'
import Pricing from './Pricing'
import { useState } from "react"
import Loading from './Loading';

const Upgrade = (props) => {

  const [planFeatues, setPlanFeatues] = useState([]);  

  const getFeatures = async () => {
	const postData = {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	}

	const res = await fetch('http://localhost:3000/api/getPlanFeatures',postData);

	const response = await res.json();

	if(response.message === "Success"){
		// console.log(response.features);
		setPlanFeatues(response.features);

	}else{
		console.log(response.message);
	}
  }

  useEffect(() => {
	getFeatures();
  },[])

  return (
	planFeatues.length !=0 ?
    <Pricing plan={props.plan} features={planFeatues}/> : <Loading />
  )
}

export default Upgrade