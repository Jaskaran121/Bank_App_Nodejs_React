import { CustomerAccount } from '../models';
import {Middleware} from '../common';
import { getCustomerAccounts,getCustomerData } from '../utils';
/**
 * This middleware should only be used in front of API endpoints.
 * It returns a 401 unauthorized if the account number whose access is required does not matches with the customer email.
* @param {*} req
* @param {*} res
* @param {*} next
*/

export const checkFraud: Middleware = async (req,res,next) => {
    const {email,accountNumber} = req.body;
    
    const predicate = (ca: CustomerAccount) => ca.accountNumber === accountNumber;
    const customerAccounts = getCustomerAccounts(predicate);
    const customer = getCustomerData(customerAccounts);

    if(customer?.customerDetails.email !== email)
        return res.status(401).send({message: "Unauthorized access...."});
        
    return next();
}