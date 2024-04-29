import { query } from "@/src/lib/db";
import Papa from 'papaparse';
import cookies from "next-cookies";
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
  let companyAddStatus = "";


  if (req.method === "POST") {
    const {token} = cookies({req})
    const decoded_token = jwt.decode(token);

    const phoneNumber = decoded_token.phone_number;

    const getSubscriberId = await query({
      query: "SELECT subscriberId from subscribers WHERE mobileNumber = ?",
      values: [phoneNumber],
    })

    const subscriberId = getSubscriberId[0].subscriberId;

    const entries = req.body.file;
    const isinNumber = [];

    entries.map((entry) => {
        if(entry.ISIN.length > 0){
            isinNumber.push(entry.ISIN);
        }
    })

    const companies = [];

    for(const isin of isinNumber){
        const company = await query({
            query:"SELECT companyId from company WHERE isinNumber = ?",
            values:[isin],
        })
        companies.push(company[0].companyId);
    }

    console.log(isinNumber);
    console.log(companies);

    for(const companyId of companies){
      //check if the current company already there in watchlist or not
      const searchCompany = await query({
        query:"SELECT * from subscriberscompany WHERE subscriberId = ? AND companyId = ?",
        values: [subscriberId, companyId],
      })

      //get current watchlist count
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
      values: [phoneNumber]
    })

    // console.log(watchlist);

    const totalAdded = watchlist.length;

    res.status(200).json({message:"Success", watchlist:watchlist, totalAdded: totalAdded ,companyAddStatus:companyAddStatus});
  }
}
