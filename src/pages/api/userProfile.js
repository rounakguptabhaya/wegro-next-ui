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
                query: "SELECT sp.fullname, sp.subscriberId FROM subscribersprofile sp JOIN subscribers s ON sp.subscriberId = s.subscriberId WHERE s.mobileNumber = ?",
                values: [phoneNumber],
            })
            const fullname = getUserData[0].fullname;
            const subscriberId = getUserData[0].subscriberId;
            if(getUserData.length > 0){
                res.status(200).json({message:"Success", fullname: fullname, phoneNumber: phoneNumber, email: email, subscriberId: subscriberId});
            }
            else{
                res.status(500).json({message:"Error"});
            }
        }
        res.status(500).json({message:"Error"});
    }
}