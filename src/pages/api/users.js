import { query } from "@/src/lib/db";
import jwt from 'jsonwebtoken';
import cookies from 'next-cookies';
import {SignJWT} from 'jose';
import crypto from 'crypto';

import { generateReferralCode } from "@/utils/referralCode";

import { generateOTP } from "@/utils/otpcode";
import { getJwtSecretKey } from "@/src/lib/auth";


export default async function handler(req, res){
    let users;
    let message;
    let token;

    // const key = crypto.createSecretKey(Buffer.from('mySecreyKey', 'utf-8'));




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
            query: "SELECT mobileNumber FROM subscribers WHERE mobileNumber = ?",
            values: [phoneNumber],
        });

        if(getUser.length > 0){
            const updateOtp = await query({
                query: "UPDATE subscribers SET otp = ? WHERE mobileNumber = ?",
                values: [otp, phoneNumber],
            });

            if(updateOtp.affectedRows){

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


                message = "Success";

                // Generate a new token with updated information (if needed)
                // const token = jwt.sign({ phone_number: phoneNumber, otp_number: otp, otp_validation: 0}, 'mySecreyKey', { expiresIn: '1h' });

                const payload = {
                    phone_number: phoneNumber,
                    otp_number: otp,
                    otp_validation: 0
                };
                
                const token = await new SignJWT(payload)
                            .setProtectedHeader({ alg: 'HS256' }) // Specify the algorithm
                            .setIssuedAt() // Set the issued at time
                            .setExpirationTime('1h') // Set the expiration time
                            .sign(new TextEncoder().encode(getJwtSecretKey())); // Sign the token with your secret key

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
                const subscriberId = addUser.insertId;
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

                const addUserProfile = await query({
                    query: "INSERT INTO subscribersprofile (subscriberId) VALUES (?)",
                    values: [subscriberId],
                })

                // token = jwt.sign({phone_number:phoneNumber,otp_number:otp}, 'mySecreyKey', {expiresIn:'1h'});
                const payload = {
                    phone_number: phoneNumber,
                    otp_number: otp
                };

                token = await new SignJWT(payload)
                            .setProtectedHeader({ alg: 'HS256' }) // Specify the algorithm
                            .setExpirationTime('1h') // Set the expiration time
                            .sign(new TextEncoder().encode(getJwtSecretKey())); // Sign the token with your secret key
                message="Success";
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