import Base from './Base';
import {ACCOUNTTYPE,ACCOUNTSTATUS} from '../common';

export class Account extends Base{
    // Primary unique key
    accountNumber: number;
    accountType: ACCOUNTTYPE;
    accountStatus: ACCOUNTSTATUS;
    balance: number;

    constructor(accountNumber:number,accountType: ACCOUNTTYPE,accountStatus: ACCOUNTSTATUS,balance: number){
        super();
        this.accountNumber  = accountNumber;
        this.accountType = accountType;
        this.accountStatus = accountStatus;
        this.balance = balance;
    }
}

export default Account;