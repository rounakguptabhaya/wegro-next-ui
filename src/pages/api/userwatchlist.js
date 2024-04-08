import { query } from "@/src/lib/db";
import jwt from 'jsonwebtoken';
import cookies from 'next-cookies'



export default async function handler(req, res){
    let message;
    let userToken;
    let decoded_token;



    if(req.method === "GET"){

        const {token} = cookies({ req });
        // console.log(token);
        userToken = token;
        // console.log(userToken);
        decoded_token = jwt.decode(userToken)
        // console.log(decoded_token);
        const phoneNumber = decoded_token.phone_number;
        // console.log(decoded_token);
        if(token){
            const subscriberId = await query({
                query: "SELECT subscriberId from subscribers WHERE mobileNumber = ?",
                values: [phoneNumber],
            })

            // console.log(subscriberId[0].subscriberId);

            // const watchlist = await query({
            //     query: "SELECT companyId FROM subscriberscompany WHERE subscriberId = ?",
            //     values: [subscriberId[0].subscriberId],
            // })

            const watchlist = await query({
                query: "SELECT c.companyName, c.companyId FROM subscriberscompany sc JOIN subscribers s ON sc.subscriberId = s.subscriberId JOIN company c ON sc.companyId = c.companyId where s.mobileNumber = ?",
                values: [phoneNumber]
            })

            console.log(watchlist);
            


            res.status(200).json({message:"Success", watchlist:watchlist});
        }
        else{
            res.status(403).json({message:"Unauthorized"})
        }
        
    }

    if(req.method === "POST"){
        const { token } = cookies({ req });

        userToken = token;
        decoded_token = jwt.decode(userToken);
        const companyName = req.body.companyName;
        const phoneNumber = decoded_token.phone_number;
        // console.log(decoded_token);
        //check if company already added ----> Pending

        //get subscriber id from subscribers table
        const getsubscriberId = await query({
            query: "SELECT subscriberId from subscribers WHERE mobileNumber = ?",
            values: [phoneNumber],
        });

        //get company id from company table
        const getcompanyId = await query({
            query: "SELECT companyId from company where companyName = ?",
            values: [companyName],
        });

        console.log(getsubscriberId[0].subscriberId,getcompanyId[0].companyId);
        const subscriberId = getsubscriberId[0].subscriberId;
        const companyId = getcompanyId[0].companyId;
        //add company to user's company table
        const addCompany = await query({
            query: "INSERT INTO subscriberscompany (subscriberId,companyId) VALUES (?,?)",
            values: [subscriberId, companyId],
        })

        res.status(200).json({message:"Success"});
    }

}