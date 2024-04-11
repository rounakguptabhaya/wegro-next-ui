"use client"

import WatchList from "@/components/WatchList";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import jwt from 'jsonwebtoken';
import { alert, defaultModules } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import * as PNotifyMobile from '@pnotify/mobile';
import '@pnotify/mobile/dist/PNotifyMobile.css';
import '@pnotify/core/dist/BrightTheme.css';


defaultModules.set(PNotifyMobile, {});



const WatchListPage = () => {

    console.log("Component rendered");

  const [companies,setCompanies] = useState([]); 
  const [watchlist, setWatchlist] = useState([]);
  

  

  
  const [token, setToken] = useState("");

  const router = useRouter();

  const handleUserWatchList = async() => {
    // const phoneNumber = jwt.decode(token).phone_number;
    const postData = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    }

    const res = await fetch("http://localhost:3000/api/userwatchlist",postData);

    const response = await res.json();

    if(response.message === "Success"){
        alert({
            text: "Logged in Successfully"
        });
        setWatchlist(response.watchlist);
    }
  } 

  const deleteUserCompany = async(companyId) => {
    console.log(companyId);

    const postData = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body:JSON.stringify({
            companyId: companyId,
        }),
    };

    const res = await fetch("http://localhost:3000/api/watchlist",postData);

    const response = await res.json();

    if(response.message === "Success"){
        
        alert({
            text: `${response.companyName} deleted from your watchlist successfully.`,
          });

        const filteredWatchlist = watchlist.filter(company => company.companyId !== companyId);
        setWatchlist(filteredWatchlist);

    }
    


  }

  const handleDeleteAll = async() => {
    const postData = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }
    }

    const res = await fetch('http://localhost:3000/api/userwatchlist',postData);

    const response = await res.json();

    console.log(response);

    if(response.message === "Success"){
        setWatchlist([]);
        alert({
            text: "Your full watchlist deleted successfully."
        });

    }
  }


  const handleAddStock = async(companyName) => {
    console.log(companyName);

    const postData = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            companyName: companyName,
        }),
    }

    const res = await fetch('http://localhost:3000/api/watchlist',postData);

    const response = await res.json();

    console.log(response);

    console.log("Added company company Id::", response.companyId);

    if(response.message != "Success"){
        alert({
            text: `${companyName} already exists in your watchlist`,
          });
    }else{
        alert({
            text: `${companyName} is successfully added in your watchlist.`,
          });
        setWatchlist(prevWatchlist => [...prevWatchlist, {companyName: companyName, companyId: response.companyId}]);
    }

}

  const getCompanies = async() => {
    const postData = {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }

    const res = await fetch('http://localhost:3000/api/watchlist',postData);
    const response = await res.json();
    if(response.token){
        setToken(response.token);
        setCompanies(response.companies);
    }else{
        router.push('/login');
    }

    // console.log(response);
    
    
    // companies ? console.log(companies): console.log("No companies");
    // console.log(companies);
  }

  useEffect(() => {
    console.log("Effect triggered");

    const fetchData = async () => {
        await getCompanies(); // Wait for getCompanies() to complete
        handleUserWatchList(); // Call handleUserWatchList() after getCompanies() completes
      };
    
      fetchData();
  },[]);

  return (
        <WatchList addStock = {handleAddStock}  companyList = {companies} watchlist = {watchlist} deleteCompany={deleteUserCompany} onDeleteAll={handleDeleteAll}/>
  )
}

export default WatchListPage;