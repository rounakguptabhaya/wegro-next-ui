import { query } from "@/src/lib/db";
import jwt from 'jsonwebtoken'
import cookies from 'next-cookies';
import { generateOTP } from "@/utils/otpcode";


export default async function handler(req, res){
    let users;
    let message
    
    if(req.method === "POST"){
        const phoneNumber = req.body.phone_number;
        const otp = await generateOTP();
        // console.log(otp);
        console.log(phoneNumber);

        const updateUser = await query({
            query: "UPDATE subscribers SET otp = ? WHERE mobileNumber = ?",
            values: [otp, phoneNumber],
        });

        if(updateUser.affectedRows){
            const postData = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${process.env.BEARER_TOKEN}`
                },
                body: JSON.stringify({
                    phone: phoneNumber,
                    otp: otp
                })
            }

            const otpRes = await fetch('https://www.wegro.app/api/send-otp',postData);

            const response = await otpRes.json();

            message="success";
            const { token } = cookies({ req });

            // Verify the existing token and extract its payload
            const decodedToken = jwt.verify(token, 'mySecreyKey');

            // Generate a new token with updated information (if needed)
            const newToken = jwt.sign({ phone_number: phoneNumber, otp_number: otp }, 'mySecreyKey', { expiresIn: '1h' });

            // Set the new token in the cookie
            res.setHeader('Set-Cookie', `token=${newToken}; Max-Age=3600; Path=/; HttpOnly`);

        }else{
            message="error";
        }

        let user = {
            phone_number: phoneNumber,
            otp: otp,
        };
        
        res.status(200).json({message:message, user:user});

    }
}