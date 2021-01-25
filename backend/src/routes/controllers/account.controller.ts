import {Request,Response} from 'express';
import { CustomerAccount } from '../../models';
import { PerformActionPayload } from '../../common';
import { actionTypeMap,exchangeRatesMap, getCustomerAccounts } from '../../utils';

export const accountController = {
    // This api /api/account will perform a action based on client's request
    performAction: (req:Request,res:Response) => {
        console.log("Called in accountController performAction with body params",req.body);
        try{
            const payload: PerformActionPayload = req.body;
            const {email,actionType,currencyType,accountNumber} = payload;
            const actionTypeValue = actionType && actionType.toUpperCase();
            const currencyTypeValue = currencyType && currencyType.toUpperCase();

            if(!actionTypeMap[actionTypeValue] || !exchangeRatesMap[currencyTypeValue])
                throw new Error("Incomplete or Invalid request details....");

            const predicate = (ca: CustomerAccount) => ca.customerEmail === email && ca.accountNumber === accountNumber;
            const customerAccount = getCustomerAccounts(predicate)[0];

            if(!customerAccount)
                return new Error("No account found with this information....");

            actionTypeMap[actionTypeValue]({...payload,customerAccount});
            return res.json({message: "Success"});
        } catch(ex){
            console.error(ex);
            const message = ex.message? ex.message : "Network error";
            return res.status(400).json({message});
        }
    }
}