import { query } from "@/src/lib/db";
import cookies from 'next-cookies'
import jwt from 'jsonwebtoken';

export default async function handler(req,res){
    if (req.method === "GET"){
        const {token} = cookies({req});
        const decoded_token = jwt.decode(token);

        const phoneNumber = decoded_token.phone_number;

        if(token){
            const getEmail = await query({
                query: "SELECT email from subscribers WHERE mobileNumber = ?",
                values: [phoneNumber],
            })

            const email = getEmail[0].email;

            const getUserData = await query({
                query: "SELECT * FROM subscribersprofile sp JOIN subscribers s ON sp.subscriberId = s.subscriberId WHERE s.mobileNumber = ?",
                values: [phoneNumber],
            })
            const fullname = getUserData[0].fullname;
            const subscriberId = getUserData[0].subscriberId;

            const getUserPreferences = await query({
                query: "SELECT sp.keyUpdates, sp.analyticalUpdates, sp.eventSchedulars, sp.technicalIdea, sp.mediaCoverage from subscribersprofile sp JOIN subscribers s ON sp.subscriberId = s.subscriberId WHERE s.mobileNumber = ?",
                values: [phoneNumber],
            })

            if(getUserData.length > 0){
                res.status(200).json({message:"Success", fullname: fullname, phoneNumber: phoneNumber, email: email, subscriberId: subscriberId, userData: getUserData, userPreferences: getUserPreferences});
            }
            else{
                res.status(500).json({message:"Error"});
            }
        }
        res.status(500).json({message:"Error"});
    }

    if(req.method === "POST"){
        const fullname = req.body.fullname;
        const id = req.body.subscriberId;
        const email = req.body.email;

        const updateDetail = await query({
            query: "UPDATE subscribers s JOIN subscribersprofile sp ON s.subscriberId = sp.subscriberId SET s.email = ? , sp.fullname = ? WHERE s.subscriberId = ?",
            values: [email,fullname,id]
        })

        if(updateDetail.affectedRows){
            res.status(200).json({message:"Success"});
        }else{
            res.status(500).json({message:"Internal Server Error"});
        }
    }

    if(req.method === "PUT"){
        // console.log(req.body);
        const preference = req.body.preference;
        const value = req.body.value;
        const subscriberId = req.body.id;
        const updatePreference = await query({
            query: `UPDATE subscribersprofile SET ${preference} = ? WHERE subscriberId = ?`,
            values: [!value, subscriberId],
        })

        if(updatePreference.affectedRows){
            res.status(200).json({message: "Success"});
        }else{
            res.status(500).json({message: "Internal Server Error"})
        }
    }
}