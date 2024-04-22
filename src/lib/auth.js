import {jwtVerify, SignJWT} from 'jose'

export const getJwtSecretKey = () => {
    const secret = process.env.JWT_SECRET_KEY

    if(!secret || secret.length === 0){
        throw new Error('No jwt secret key in env variables');
    }
    return secret;
}

export const verifyAuth = async (token) => {
    try{
        const verified = await jwtVerify(token, new TextEncoder().encode(getJwtSecretKey()));
        return verified.payload;
    }catch(err){
        throw new Error('Your token has expired');
    }
}