import { mockCustomerData,mockAccountData,CustomerInfo, PerformActionPayload, CURRENCYTYPE, mockCustomerAccountData } from "../common";
import {exchangeRatesMap} from './dataMaps';
import {CustomerAccount} from "../models";

export const exchangeCurrency = (type: CURRENCYTYPE,amount:number,dataMapper = exchangeRatesMap) => {
    const currencyType = type && type.toUpperCase();
    if(dataMapper[currencyType])
        return (amount/dataMapper[currencyType]);
    return amount;
}

export const getCustomerAccounts = (predicate: Function,data = mockCustomerAccountData) => {
    const values = Object.values(data);
    return values.filter(
        (item) => predicate(item)
    );
}

export const getCustomerData = (customerAccountData: Array<CustomerAccount>,customerData = mockCustomerData
    ,accountData = mockAccountData) => {
    if(!customerAccountData || customerAccountData.length === 0)
        return;
    const result:CustomerInfo = {customerDetails: customerData[customerAccountData[0].customerId],accounts: []};
    customerAccountData.forEach(d => result.accounts.push(accountData[d.accountNumber]));
    return result;
}

export const performDeposit = (payload: PerformActionPayload,accountData = mockAccountData,currencyMap = exchangeRatesMap) => {
    const {customerAccount,currencyType,amount} = payload;
    const account = accountData[customerAccount.accountNumber];
    const exchangedAmount = exchangeCurrency(currencyType,amount,currencyMap);
    accountData[customerAccount.accountNumber].balance = account.balance + exchangedAmount;
} 

export const performTransfer = (payload: PerformActionPayload,accountData = mockAccountData) => {
    const {customerAccount,currencyType,amount,destinationAccountNumber} = payload;
    const mainAccount = accountData[customerAccount.accountNumber];
    const destinationAccount = destinationAccountNumber && accountData[destinationAccountNumber];
    if(!destinationAccount)
        throw new Error("The account in which you want to transfer money is not valid");
    const exchangedAmount = exchangeCurrency(currencyType,amount);
    if(mainAccount.balance - exchangedAmount >=0 && destinationAccountNumber){
        accountData[customerAccount.accountNumber].balance = mainAccount.balance - exchangedAmount;
        accountData[destinationAccountNumber].balance = destinationAccount.balance + exchangedAmount;
    }  
}

export const performWithDraw = (payload: PerformActionPayload,accountData = mockAccountData) => {
    const {customerAccount,currencyType,amount} = payload;
    const account = accountData[customerAccount.accountNumber];
    const exchangedAmount = exchangeCurrency(currencyType,amount);
    if(account.balance - exchangedAmount >=0)
        accountData[customerAccount.accountNumber].balance = account.balance - exchangedAmount;
    else
        throw new Error("Not enough balance to make this withdraw");
}
