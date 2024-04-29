"use client"

import WatchList from "@/components/WatchList";
import NotFound from "@/components/NotFound";
import Loading from "@/components/Loading";
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

    // console.log("Component rendered");

  const [companies,setCompanies] = useState([]); 
  const [watchlist, setWatchlist] = useState([]);
  const [defaultLanguage, setdefaultLanguage] = useState("");
  const [loading,setLoading] = useState(true);
  const [totalCompanies, setTotalCompanies] = useState(0);
  const [categories,setCategories] = useState([]);
  const [filteredCompanies, setFilteredCompanies] = useState([]);
  const [auth,setAuth] = useState(false); 
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
            text: "Logged in Successfully",
            delay: 2000
        });
        setWatchlist(response.watchlist);
        setTotalCompanies(response.totalAdded);
        setdefaultLanguage(response.language);
    }
  } 

  const deleteUserCompany = async(companyId) => {
    // console.log(companyId);

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
            delay: 1000
          });

        const filteredWatchlist = watchlist.filter(company => company.companyId !== companyId);
        setWatchlist(filteredWatchlist);
        setTotalCompanies(totalCompanies-1);
        

    }
    


  }

  const getCompanyCategories = async () => {
    const postData = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    }

    const res = await fetch('http://localhost:3000/api/categories',postData);

    const response = await res.json();

    if(response.message === "Success"){
        console.log("categories");
        setCategories(response.categories);

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

    // console.log(response);

    if(response.message === "Success"){
        setWatchlist([]);
        alert({
            text: "Your full watchlist deleted successfully.",
            delay: 1000
        });
        setTotalCompanies(0);
    }
  }


  const handleAddStock = async(companyName) => {
    // console.log(companyName);

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

    // console.log(response);

    // console.log("Added company company Id::", response.companyId);

    if(response.message != "Success"){
        alert({
            text: `${companyName} already exists in your watchlist`,
            delay: 1000
          });
    }else{
        alert({
            text: `${companyName} is successfully added in your watchlist.`,
            delay: 1000
          });
        setWatchlist(prevWatchlist => [...prevWatchlist, {companyName: companyName, companyId: response.companyId}]);
        setTotalCompanies(totalCompanies+1);
    }

}

  const handleChangeLanguage = async (selectedLanguage) => {
    console.log(selectedLanguage);

    const postData = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            alertLangId: selectedLanguage,
        }),
    }

    const res = await fetch("http://localhost:3000/api/watchlist", postData);
    const response = await res.json();

    if(response.message === "Success"){
        alert({
            text: 'Preferred language for whats app alert updated successfully.',
            delay: 1000
        });
        setdefaultLanguage(selectedLanguage);
    }
  }

  const handleCategory = async(categoryId) => {
    console.log(categoryId);

    const postData = {
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            categoryId: categoryId,
        })
    }

    const res = await fetch('http://localhost:3000/api/categories',postData);
    const response = await res.json();

    if(response.message === "Success"){
        // console.log(response.companies);
        setWatchlist(response.watchlist);
        setTotalCompanies(response.totalAdded)

        if(response.companyAddStatus){
            alert({
                text: response.companyAddStatus,
                delay: 1000
            });
        }
        else{
            alert({
                text:"Companies successfully added in your watchlist.",
                delay:1000
            })
        }
        
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
    if(!response.error){
        setToken(response.token);
        setCompanies(response.companies);
        setAuth(true);
        // handleUserWatchList()
    }else{
        // router.push('/login');
        setAuth(false);
        // console.log("Error::",response.error);
    }

    // console.log(response);
    
    
    // companies ? console.log(companies): console.log("No companies");
    // console.log(companies);
  }

  const handleUpload = async(selectedFile) => {
    if(!selectedFile){
        alert("No file selected");
      }
      const postData = {
        method:"POST",
        headers:{
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          file: selectedFile,
        }),
      }
      const res = await fetch('http://localhost:3000/api/import', postData);
  
      const response = await res.json();
  
      if(response.message === "Success"){
        // console.log(response.companies);
        setWatchlist(response.watchlist);
        setTotalCompanies(response.totalAdded)

        if(response.companyAddStatus){
            alert({
                text: response.companyAddStatus,
                delay: 1000
            });
        }
        else{
            alert({
                text:"Companies successfully added in your watchlist.",
                delay:1000
            })
        }
        
    }
  }

  useEffect(() => {
    // console.log("Effect triggered");

    const fetchData = async () => {
        await getCompanies(); // Wait for getCompanies() to complete
        await getCompanyCategories();
        setTimeout(() => {
            setLoading(false); // Set loading to false after 2 seconds
          }, 2000);
      };
    
      fetchData();
  },[]);


  useEffect(() => {
    if(!loading){
        handleUserWatchList();
    }
  }, [loading])

//   return (
//         auth ?
//         <WatchList addStock = {handleAddStock}  companyList = {companies} watchlist = {watchlist} deleteCompany={deleteUserCompany} onDeleteAll={handleDeleteAll}/>
//         :
//         <NotFound />
//     )

    if(loading){
        return <Loading />
      }else if(auth){
        return <WatchList addStock = {handleAddStock}  companyList = {companies} watchlist = {watchlist} deleteCompany={deleteUserCompany} onDeleteAll={handleDeleteAll} total={totalCompanies} changeLanguage = {handleChangeLanguage} defaultLang={defaultLanguage} categories={categories} handleCategory={handleCategory} handleUpload={handleUpload}/>
      }else{
        return <NotFound />;
      }
}

export default WatchListPage;