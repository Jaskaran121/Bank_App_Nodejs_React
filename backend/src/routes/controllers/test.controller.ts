import {Request,Response} from 'express';

export const testController = {
    // This api "GET" /api/test can be used to connectivity with server.
    testServer: (req:Request,res:Response) => {
        console.log("Called test API....",);
        try{
            return res.status(200).send({message: "Success"});
        } catch(ex){
            console.error(ex);
            const message = ex.message? ex.message : "Network error";
            return res.status(400).json({message});
        }
    }
}