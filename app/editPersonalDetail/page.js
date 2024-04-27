"use client"

import React, { useEffect, useState } from 'react';
import EditPersonal from '@/components/EditPersonal';
import Loading from '@/components/Loading';
import { useRouter } from 'next/navigation';


const EditPersonalContainer = () => {
    const [userDetail, setUserDetail] = useState({
        name: "NA",
        email: "NA",
    });

    const [id,setId] = useState("");
    const [loading, setLoading] = useState(true);

    const router = useRouter();

    const getUserProfile = async () => {
        // Fetch user profile from API
        try {
            const res = await fetch('http://localhost:3000/api/userProfile');
            const response = await res.json();
            if (response.message === "Success") {
                setUserDetail({
                    name: response.fullname || "NA",
                    email: response.email || "NA",
                });
                setId(response.subscriberId)
            }
        } catch (error) {
            console.error("Error fetching user profile:", error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getUserProfile();
    }, []);

    const handleClick = async (user) => {
        console.log(user);
        
        const postData = {
            method: "POST",
            headers: 
            {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                fullname: user.name.trim(),
                email: user.email.trim(),
                subscriberId: id
            })
        }

        const res = await fetch('http://localhost:3000/api/userProfile', postData);

        const response = await res.json();

        if(response.message === "Success"){
            router.push('/userProfile');
        }else{
            console.log("Error");
        }

    }

    return (
        <>
            {!loading ? <EditPersonal
                    handleClick={handleClick}
                    userDetail = {userDetail}
                />
            :
            <Loading />}
            {/* {!loading && (
                <EditPersonal
                    handleClick={handleClick}
                    name={userDetail.name}
                    email={userDetail.email}
                />
            )} */}
        </>
    );
}

export default EditPersonalContainer;
