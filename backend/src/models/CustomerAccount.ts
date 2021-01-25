import Base from './Base';

export class CustomerAccount extends Base {
    // unique primary key
    customerAccountID: number;
    // foreign key from Customer
    customerId: number;
    // foreign key from Account
    accountNumber: number;
    customerEmail: string;

    constructor(customerAccountID: number,customerId: number,accountNumber: number,customerEmail: string){
        super();
        this.customerAccountID = customerAccountID;
        this.customerId = customerId;
        this.accountNumber = accountNumber;
        this.customerEmail = customerEmail;
    }
}

export default CustomerAccount;