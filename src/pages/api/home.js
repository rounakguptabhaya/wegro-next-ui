import { query } from "@/src/lib/db";
import jwt from 'jsonwebtoken';
import cookies from 'next-cookies'



export default async function handler(req, res){
    let users;
    let message;
    let token;
    let decoded_token;



    if(req.method === "GET"){

        const { token } = cookies({ req });
        if(token && jwt.decode(token).otp_validation === 1){
            message="You are logged in!";

            decoded_token = jwt.decode(token);

            const phoneNumber = decoded_token.phone_number;

            const loggedInUser = await query({
                query:"SELECT status FROM subscribers WHERE mobileNumber = ?",
                values: [phoneNumber],
            })

            if(loggedInUser.length > 0){
                const status = loggedInUser[0].status;

                if(status === 0){
                    const postData = {
                        method:"POST",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${process.env.BEARER_TOKEN}`
                        },
                        body: JSON.stringify({
                            phone: phoneNumber,
                            welcomeMsg: "1",
                        })
                    }

                    const res = await fetch('https://wegro.app/api/send-message', postData);

                    const response = await res.json();

                    if(response.status === 200){
                        const updateStatus = await query({
                            query: "UPDATE subscribers SET status = ? WHERE mobileNumber = ?",
                            values: [1, phoneNumber],
                        });
                    }
                    // console.log("Wegro api response::",response);

                    
                }
            }

            res.status(200).json({message:message,user:loggedInUser});
        }
        else{
            message="You are not logged in!";
            res.status(401).json({message:message});
        }
    }

}