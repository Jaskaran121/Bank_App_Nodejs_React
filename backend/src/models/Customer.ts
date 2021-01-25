import Base from './Base';

export class Customer extends Base{
    // Primary unique key
    customerId: number;
    // should be unique
    email: string;
    firstName: string;
    lastName: string;
    address: string;
    phone: number;
    areaCode: string;

    constructor(customerId: number,email: string,firstName: string,lastName: string,address: string,phone: number,areaCode: string){
        super();
        this.customerId = customerId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.phone = phone;
        this.areaCode = areaCode;
    }
}

export default Customer;