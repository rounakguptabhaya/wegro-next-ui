import { query } from "@/src/lib/db";

export default async function handler(req,res){
    if(req.method === "GET"){
        const plans = await query({
            query: "SELECT * from plans",
            values:[],
        })

        if(plans.length > 0){
            res.status(200).json({message: "Success", plans:plans})
        }else{
            res.status(500).json({message: "Internal Server Error"});
        }
    }
}