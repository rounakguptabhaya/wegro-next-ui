import { query } from "@/src/lib/db";
import jwt from 'jsonwebtoken';
import cookies from 'next-cookies'



export default async function handler(req, res){
    let message;
    let userToken;
    let decoded_token;
    


    if(req.method === "DELETE"){
        const id = req.body.companyId;
        const { token } = cookies({ req });

        userToken = token;
        decoded_token = jwt.decode(userToken);

        const phoneNumber = decoded_token.phone_number;

        const getsubscriberId = await query({
            query: "SELECT subscriberId from subscribers WHERE mobileNumber = ?",
            values: [phoneNumber],
        })

        const subscriberId = getsubscriberId[0].subscriberId;

        const deleteAll = await query({
            query: "DELETE FROM subscriberscompany WHERE subscriberId = ?",
            values: [subscriberId],
        })

        if(deleteAll.affectedRows){
            message = "Success";
        }
        else{
            message = "Error";
        }

        res.status(200).json({message:message});
        

    }
}