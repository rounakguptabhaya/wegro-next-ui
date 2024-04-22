import { query } from "@/src/lib/db";
import jwt from 'jsonwebtoken';
import cookies from 'next-cookies'
import { authMiddleware } from '../../../middleware/authMiddleware';


//Start of original code

// export default async function handler(req, res){
//     let message;
//     let userToken;
//     let decoded_token;



//     if(req.method === "GET"){

//         const {token} = cookies({ req });
//         // console.log(token);
//         userToken = token;
//         // console.log(userToken);
//         decoded_token = jwt.decode(userToken)
//         // console.log(decoded_token);
//         if(token){

//             const phoneNumber = decoded_token.phone_number;

//             const loggedInUser = await query({
//                 query:"SELECT * FROM subscribers WHERE mobileNumber = ?",
//                 values: [phoneNumber],
//             })

//             if(loggedInUser.length > 0){
//                 const status = loggedInUser[0].status;

//                 if(status === 0){
//                     const postData = {
//                         method:"POST",
//                         headers: {
//                             "Content-Type": "application/json",
//                             "Authorization": `Bearer ${process.env.BEARER_TOKEN}`
//                         },
//                         body: JSON.stringify({
//                             phone: phoneNumber,
//                             welcomeMsg: "1",
//                         })
//                     }

//                     const res = await fetch('https://wegro.app/api/send-message', postData);

//                     const response = await res.json();

//                     if(response.status === 200){
//                         const updateStatus = await query({
//                             query: "UPDATE subscribers SET status = ? WHERE mobileNumber = ?",
//                             values: [1, phoneNumber],
//                         });
//                     }
//                     // console.log("Wegro api response::",response);

                    
//                 }
//             }

//             const companies = await query({
//                 query: "SELECT companyName, symbol, isinNumber, scripCode from company",
//                 values: [],
//             })
    
//             if(companies.length > 0){
//                 message="Success";
//             }
//             res.status(200).json({message:message, companies:companies, token: userToken})
//         }
//         else{
//             res.status(403).json({message:"Unauthorized"})
//         }
        
//     }

//     if(req.method === "POST"){
//         const { token } = cookies({ req });

//         userToken = token;
//         decoded_token = jwt.decode(userToken);
//         const companyName = req.body.companyName;
//         const phoneNumber = decoded_token.phone_number;
//         // console.log(decoded_token);
        


//         //get subscriber id from subscribers table
//         const getsubscriberId = await query({
//             query: "SELECT subscriberId from subscribers WHERE mobileNumber = ?",
//             values: [phoneNumber],
//         });

//         //get company id from company table
//         const getcompanyId = await query({
//             query: "SELECT companyId from company where companyName = ?",
//             values: [companyName],
//         });

//         const subscriberId = getsubscriberId[0].subscriberId;
//         const companyId = getcompanyId[0].companyId;

//         //check if company already added ----> Pending
//         const checkAdded = await query({
//           query: "SELECT * FROM subscriberscompany WHERE subscriberId = ? AND companyId = ?",
//           values: [subscriberId, companyId]  
//         })

//         if(checkAdded.length > 0){
//             res.json({message:"Company already added"});
//         }
//         else{
//              //add company to user's company table
//             const addCompany = await query({
//                 query: "INSERT INTO subscriberscompany (subscriberId,companyId) VALUES (?,?)",
//                 values: [subscriberId, companyId],
//             })
//             res.status(200).json({message:"Success", companyId: companyId});
//         }

        

//         // console.log(getsubscriberId[0].subscriberId,getcompanyId[0].companyId);
        
       
//     }


//     if(req.method === "DELETE"){
//         const id = req.body.companyId;
//         const { token } = cookies({ req });

//         userToken = token;
//         decoded_token = jwt.decode(userToken);

//         const phoneNumber = decoded_token.phone_number;

//         const getCompanyName = await query({
//             query: "SELECT companyName from company where companyId = ?",
//             values: [id]
//         })

//         const companyName = getCompanyName[0].companyName;

//         const getsubscriberId = await query({
//             query: "SELECT subscriberId from subscribers WHERE mobileNumber = ?",
//             values: [phoneNumber],
//         })

//         const subscriberId = getsubscriberId[0].subscriberId;

//         const deleteCompany = await query({
//             query: "DELETE FROM subscriberscompany WHERE subscriberId = ? AND companyID = ?",
//             values: [subscriberId,id],
//         })

//         if(deleteCompany.affectedRows){
//             message = "Success";
//         }
//         else{
//             message = "Error";
//         }

//         res.status(200).json({message:message, deletedCompanyId: id, companyName: companyName});

//     }
// }

//End of Original Code


async function handleGet(req, res) {
    let message;
    let userToken;
    let decodedToken;
    // let companyAddStatus=""

    const { token } = cookies({ req });
    userToken = token;
    decodedToken = jwt.decode(userToken);

    // if (!userToken) {
    //     return res.status(401).json({ message: 'Unauthorized' });
    // }

    const phoneNumber = decodedToken.phone_number;


    const loggedInUser = await query({
        query: "SELECT * FROM subscribers WHERE mobileNumber = ?",
        values: [phoneNumber],
    });

    // if (loggedInUser.length === 0) {
    //     return res.status(403).json({ message: 'Forbidden' });
    // }

    const status = loggedInUser[0].status;

    if (status === 0) {
        // Send welcome message if status is 0 (pending)
        const postData = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${process.env.BEARER_TOKEN}`
            },
            body: JSON.stringify({
                phone: phoneNumber,
                welcomeMsg: "1",
            })
        };

        const response = await fetch('https://wegro.app/api/send-message', postData);

        if (response.status === 200) {
            // Update user status to 1 (active) if welcome message sent successfully
            const updateStatus = await query({
                query: "UPDATE subscribers SET status = ? WHERE mobileNumber = ?",
                values: [1, phoneNumber],
            });
        }
    }

    const companies = await query({
        query: "SELECT companyName, symbol, isinNumber, scripCode from company",
        values: [],
    });

    return res.status(200).json({ message: "Success", companies: companies, token: userToken });
}

async function handlePost(req, res) {
    const { token } = cookies({ req });
    const userToken = token;
    const decodedToken = jwt.decode(userToken);
    const companyName = req.body.companyName;
    const phoneNumber = decodedToken.phone_number;

    //get subscriber id from subscribers table
    const getSubscriberId = await query({
        query: "SELECT subscriberId from subscribers WHERE mobileNumber = ?",
        values: [phoneNumber],
    });

    const subscriberId = getSubscriberId[0].subscriberId;

    //get company id from company table
    const getCompanyId = await query({
        query: "SELECT companyId from company where companyName = ?",
        values: [companyName],
    });

    const companyId = getCompanyId[0].companyId;

    //check if company already added ----> Pending
    const checkAdded = await query({
        query: "SELECT * FROM subscriberscompany WHERE subscriberId = ? AND companyId = ?",
        values: [subscriberId, companyId]
    });

    if (checkAdded.length > 0) {
        return res.status(400).json({ message: "Company already added" });
    } else {
        //get the number of companies the user has added


        const getCompanyCount = await query({
            query:"SELECT COUNT(*) as companyCount FROM subscriberscompany where subscriberId = ?",
            values: [subscriberId],
        })

        const companyCount = getCompanyCount[0].companyCount;

        if(companyCount === 0){
            const updatestockAdded = await query({
                query: "UPDATE subscribers SET stockAdded = ?",
                values: [1]
            })
        }

        if(companyCount >= 500){
            return res.status(200).json({ message: "Your watchlist is Full", companyId: companyId });
        }

        //add company to user's company table
        const addCompany = await query({
            query: "INSERT INTO subscriberscompany (subscriberId,companyId) VALUES (?,?)",
            values: [subscriberId, companyId],
        });

        return res.status(200).json({ message: "Success", companyId: companyId });
    }
}

async function handleDelete(req, res) {
    const id = req.body.companyId;
    const { token } = cookies({ req });
    const userToken = token;
    const decodedToken = jwt.decode(userToken);
    const phoneNumber = decodedToken.phone_number;

    const getCompanyName = await query({
        query: "SELECT companyName from company where companyId = ?",
        values: [id]
    });

    const companyName = getCompanyName[0].companyName;

    const getSubscriberId = await query({
        query: "SELECT subscriberId from subscribers WHERE mobileNumber = ?",
        values: [phoneNumber],
    });

    const subscriberId = getSubscriberId[0].subscriberId;

    const deleteCompany = await query({
        query: "DELETE FROM subscriberscompany WHERE subscriberId = ? AND companyID = ?",
        values: [subscriberId, id],
    });

    if (deleteCompany.affectedRows) {
        return res.status(200).json({ message: "Success", deletedCompanyId: id, companyName: companyName });
    } else {
        return res.status(500).json({ message: "Error" });
    }
}

async function handlePut(req,res){
    const langId = req.body.alertLangId;
    console.log("Language ID console in server::",langId);
    const {token} = cookies({ req });
    const decoded_token = jwt.decode(token);

    const phoneNumber = decoded_token.phone_number;

    const updateLanguage = await query({
        query: "UPDATE subscribers SET alertLangId = ? WHERE mobileNumber = ?",
        values: [langId, phoneNumber]
    })

    if(updateLanguage.affectedRows){
        res.status(200).json({message: "Success"});
    }else{
        res.status(500).json({message: "Error"});
    }
}

export default authMiddleware(async function handler(req, res) {
    try{
        if (req.method === 'GET') {
            return handleGet(req, res);
        } else if (req.method === 'POST') {
            return handlePost(req, res);
        } else if (req.method === 'DELETE') {
            return handleDelete(req, res);
        }
        else if(req.method === 'PUT'){
            return handlePut(req, res);
        } else {
            return res.status(405).json({ error: 'Method Not Allowed' });
        }
    }catch(err){
        console.error("Error in handler:", err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
    
});


