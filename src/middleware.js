import { verifyAuth } from "./lib/auth";
import { NextResponse } from 'next/server';
import {jwtVerify} from 'jose';

export async function middleware(req){
    const token = req.cookies.get('token')?.value;
    // console.log("Token in middleware::",token);
    let otpValidationStatus = 0;

    const verifiedToken = token && await verifyAuth(token).catch((err) => {
        console.log(err);
    })
    if(verifiedToken){
        // console.log("Otp-validation status::", verifiedToken.otp_validation);
        otpValidationStatus = verifiedToken.otp_validation;
    }

    if(req.nextUrl.pathname.startsWith('/login') && !verifiedToken){
        return;
    }

    if(req.url.includes('/login') && verifiedToken && otpValidationStatus === 1){
        return NextResponse.redirect(new URL('/watchlist', req.url))
    }

    if(req.url.includes('/watchlist') && !verifiedToken){
        return NextResponse.redirect(new URL('/login', req.url))
    }

    if(req.url.includes('/watchlist') && verifiedToken && otpValidationStatus === 0){
        return NextResponse.redirect(new URL('/login', req.url))
    }

    if(req.url.includes('/validateOtp') && verifiedToken && otpValidationStatus === 1){
        return NextResponse.redirect(new URL('/watchlist', req.url))
    }

    if(req.url.includes('/upgradePlan') && !verifiedToken){
        return NextResponse.redirect(new URL('/login', req.url))
    }

    if(req.url.includes('/upgradePlan') && verifiedToken && otpValidationStatus === 0){
        return NextResponse.redirect(new URL('/login', req.url))
    }

    if(!verifiedToken){
       return NextResponse.redirect (new URL('/login', req.url));
    }

}

export const config = {
    matcher: ['/login','/validateOtp','/watchlist','/upgradePlan'],
}