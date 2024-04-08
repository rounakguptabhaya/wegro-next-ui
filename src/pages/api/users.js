import { query } from "@/src/lib/db";
import jwt from 'jsonwebtoken';
import cookies from 'next-cookies';

import { generateReferralCode } from "@/utils/referralCode";

import { generateOTP } from "@/utils/otpcode";


export default async function handler(req, res){
    let users;
    let message;
    let token;



    if(req.method === "GET"){
        // const users =  await query({
        //     query:"SELECT * FROM subscribers ORDER BY subscriberId",
        //     values:[]
        // });

        const { token } = cookies({ req });

        res.status(200).json({token:token});
    }

    if(req.method === "POST"){
        const phoneNumber = req.body.phone_number;
        const otp = await generateOTP();
        let referredByID = req.body.referralId;
        let subscriberId = 0;
        if(referredByID === null){
            referredByID = 0;
        }
        console.log(referredByID);


        console.log(phoneNumber,otp);

        const getUser = await query({
            query: "SELECT * FROM subscribers WHERE mobileNumber = ?",
            values: [phoneNumber],
        });

        if(getUser.length > 0){
            const updateOtp = await query({
                query: "UPDATE subscribers SET otp = ? WHERE mobileNumber = ?",
                values: [otp, phoneNumber],
            });

            if(updateOtp.affectedRows){
                message = "Success";

                // Generate a new token with updated information (if needed)
                const token = jwt.sign({ phone_number: phoneNumber, otp_number: otp, otp_validation: 0}, 'mySecreyKey', { expiresIn: '1h' });

                // Set the new token in the cookie
                res.setHeader('Set-Cookie', `token=${token}; Max-Age=3600; Path=/; HttpOnly`);
            }
            else{
                message = "error";
            }
            let user = {
                phone_number: phoneNumber,
                otp: otp,
            };

            res.status(200).json({message:message, user:user,token:token});
            // res.status(200).json({message:"User already exists"});

        }
        else{

            const endDate = new Date();
            const referralId = await generateReferralCode();
            console.log("ReferralId::",referralId);
            const referredBy = await query({
                query: "SELECT subscriberId from subscribers WHERE referralCode = ?",
                values: [referredByID],
            })
            // console.log("REFERREDBY ID::",referredBy);
            if(referredBy.length > 0){
                subscriberId = referredBy[0].subscriberId;    
            }
            
            endDate.setMonth(endDate.getMonth() + 1)
            const addUser = await query({
                query: "INSERT INTO subscribers (mobileNumber, otp, endDate, referralCode, referredBy) VALUES (?,?,?,?,?)",
                values: [phoneNumber, otp, endDate, referralId, subscriberId],
            });
    
            if(addUser.insertId){
                token = jwt.sign({phone_number:phoneNumber,otp_number:otp}, 'mySecreyKey', {expiresIn:'1h'});
                message="success";
            }else{
                message="error";
            }
    
            let user = {
                phone_number: phoneNumber,
                otp: otp,
            };
    
            const cookiesFromRequest = cookies({ req });
    
            // Setting the token cookie in the response
            res.setHeader('Set-Cookie', `token=${token}; Max-Age=3600; Path=/; HttpOnly`);
            
            res.status(200).json({message:message, user:user,token:token});
        }

        

    }
}