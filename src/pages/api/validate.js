import { query } from "@/src/lib/db";
import jwt from 'jsonwebtoken'
import cookies from 'next-cookies';





export default async function handler(req, res){
    let users;
    let message;
    let status;


    // console.log('Cookies:', req.cookies);

    if(req.method === "GET"){
        const { token } = cookies({ req });
        // console.log("Token retrieved from validate.js::",jwt.decode(token));

        const jwtToken = token;
        
        res.status(200).json({token:jwtToken});
    }
    
    if(req.method === "POST"){
        const phoneNumber = req.body.phone_number;
        const otp = req.body.otp;

        console.log(phoneNumber,otp);

        const loginUser = await query({
            query: "SELECT * FROM subscribers WHERE mobileNumber = ? AND otp = ?",
            values: [phoneNumber, otp],
        });

        if(loginUser.length > 0){
            message="success";
            // status = loginUser[0].status;
            // if(status === 0){
            //     const updateStatus = await query({
            //         query: "UPDATE subscribers SET status = ? WHERE mobileNumber = ?",
            //         values: [1, phoneNumber],
            //     });

            // }
            
        }else{
            message="phone number or otp is wrong";
        }

        let user = {
            phone_number: phoneNumber,
            otp: otp,
        };
        
        const token = jwt.sign({ phone_number: phoneNumber, otp_number: otp, otp_validation: 1}, 'mySecreyKey', { expiresIn: '1h' });

        res.setHeader('Set-Cookie', `token=${token};Max-Age=3600; Path=/; HttpOnly`);

        res.status(200).json({message:message, user:user, status:status});

    }
}