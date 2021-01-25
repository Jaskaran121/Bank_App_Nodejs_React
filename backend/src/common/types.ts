import {Customer,Account,CustomerAccount} from '../models';
import { ACTIONTYPE, CURRENCYTYPE } from ".";
import { Request, Response, NextFunction } from 'express';

export type CustomerInfo = {
    customerDetails: Customer;
    accounts: Array<Account>;
}

export type PerformActionPayload = {
    customerAccount: CustomerAccount,
    actionType: ACTIONTYPE,
    currencyType:CURRENCYTYPE,
    amount:number,
    destinationAccountNumber?: number,
    email: string,
    accountNumber: number;
}

export type Middleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<void | unknown>;
