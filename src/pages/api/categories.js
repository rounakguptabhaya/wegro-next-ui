import { query } from "@/src/lib/db";
import cookies from "next-cookies";
import jwt from 'jsonwebtoken';


export default async function handler(req,res){
    let categories = [];
    let companyAddStatus = "";

    if(req.method === 'GET'){
        const getCategories = await query({
          query: "SELECT categoryId,categoryName from categories"
        });

        if(getCategories.length > 0){
            
            res.status(200).json({message:"Success",categories:getCategories});
        }else{
            res.status(404).json({message:"Error"});
        }
    }

    if(req.method === 'POST'){
        const {token} = cookies({ req });
        const decoded_token = jwt.decode(token);

        const phone_number = decoded_token.phone_number;


        const categoryId = req.body.categoryId;

        const getCompanies = await query({
            // query:"SELECT companyId from companycategories WHERE categoryId = ?",
            query:"SELECT c.companyName, c.companyId from  companycategories cc JOIN company c ON cc.companyId = c.companyId JOIN categories cg ON cc.categoryId = cg.categoryId where cc.categoryId = ? ORDER BY c.companyName ASC",
            values:[categoryId],
        })
        console.log(getCompanies.length);
        // console.log(getCompanies);

        if(getCompanies.length > 0){
            //get subscribersId;
            const getsubscriberId = await query({
                query: "SELECT subscriberId from subscribers WHERE mobileNumber = ?",
                values: [phone_number],
            });

            const subscriberId = getsubscriberId[0].subscriberId;

            for(const company of getCompanies){
                //get companyId of the current company
                const getCompanyId = await query({
                    query: "SELECT companyId FROM company WHERE companyName = ?",
                    values: [company.companyName],
                })

                const companyId = getCompanyId[0].companyId;

                //check if company already exists in the user's watchlist
                const searchCompany = await query({
                    query:"SELECT * from subscriberscompany WHERE subscriberId = ? AND companyId = ?",
                    values: [subscriberId, companyId],
                })

                const getCompanyCount = await query({
                    query:"SELECT COUNT(*) as companyCount FROM subscriberscompany where subscriberId = ?",
                    values: [subscriberId],
                })

                const companyCount = getCompanyCount[0].companyCount;


                if(searchCompany.length > 0){
                    continue;
                }else if(companyCount >= 500){
                    companyAddStatus = "Your watchlist is full";
                    break;
                }
                else{
                    const addCompany = await query({
                        query: "INSERT INTO subscriberscompany (subscriberId, companyId) VALUES (?,?)",
                        values: [subscriberId,companyId],
                    })
                }
            }
            const watchlist = await query({
                query: "SELECT c.companyName, c.companyId FROM subscriberscompany sc JOIN subscribers s ON sc.subscriberId = s.subscriberId JOIN company c ON sc.companyId = c.companyId where s.mobileNumber = ?",
                values: [phone_number]
            })

            // console.log(watchlist);

            const totalAdded = watchlist.length;

            res.status(200).json({message:"Success", watchlist:watchlist, totalAdded: totalAdded ,companyAddStatus:companyAddStatus});
        }
    }
}