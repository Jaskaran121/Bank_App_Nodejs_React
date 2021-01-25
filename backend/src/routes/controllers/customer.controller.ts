import {Request,Response} from 'express';
import { CustomerAccount } from '../../models';
import {getCustomerAccounts, getCustomerData} from '../../utils';

export const customerController = {
    // This api /api/customer will return customer data along with their associated accounts
    getCustomerInfo: (req:Request,res:Response) => {
        console.log("Called getCustomerInfo with body params",req.body);
        try{
            const {email} = req.body;
            if(!email)
                throw new Error("No email found in the request");

            const predicate = (ca: CustomerAccount) => ca.customerEmail === email;
            const filteredData = getCustomerAccounts(predicate);
            const result = getCustomerData(filteredData);

            if(!result)
                throw new Error("This user is not yet registered with us.")
            return res.send(result);
        } catch(ex){
            console.error(ex);
            const message = ex.message? ex.message : "Network error";
            return res.status(400).json({message});
        }
    }
}