import { query } from "@/src/lib/db";

export default async function handler(req,res){

    if(req.method === "GET"){
        const features = await query({
            query: "SELECT feature from planfeatures WHERE planId = ?",
            values: [2],
        })

        if(features.length > 0){
            res.status(200).json({message:"Success", features: features});
        }else{
            res.status(500).json({message:"Internal Sever Error"});
        }
    }
}