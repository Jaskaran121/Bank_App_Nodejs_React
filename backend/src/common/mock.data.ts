import {Customer,Account,CustomerAccount} from '../models';
import {ACCOUNTSTATUS,ACCOUNTTYPE} from '../common';

export const mockCustomerData: {
    [id: string]: Customer
} = {
    777 : {
        customerId: 777,
        email: "stewie_griffin@gmail.com",
        firstName: "Stewie",
        lastName: "Griffin",
        address: "Dummy Address",
        phone: 99999999999,
        areaCode: "H4T265"
    },
    504 : {
        customerId: 504,
        email: "glenn_quagmire@gmail.com",
        firstName: "Glenn",
        lastName: "Quagmire",
        address: "Dummy Address",
        phone: 99999999999,
        areaCode: "H4T265"
    },
    2: {
        customerId: 2,
        email: "joe_swanson@gmail.com",
        firstName: "Joe",
        lastName: "Swanson",
        address: "Dummy Address",
        phone: 99999999999,
        areaCode: "H4T265"
    },
    123 : {
        customerId: 123,
        email: "peter_griffin@gmail.com",
        firstName: "Peter",
        lastName: "Griffin",
        address: "Dummy Address",
        phone: 99999999999,
        areaCode: "H4T265"
    },
    456: {
        customerId: 456,
        email: "lois_griffin@gmail.com",
        firstName: "Lois",
        lastName: "Griffin",
        address: "Dummy Address",
        phone: 99999999999,
        areaCode: "H4T265"
    },
}

export const mockAccountData: {
    [id: string]: Account
} = {
    1234: {
        accountNumber: 1234,
        accountType: ACCOUNTTYPE.CHECKING_ACCOUNT,
        accountStatus: ACCOUNTSTATUS.OPEN,
        balance: 100.00
    },
    2001: {
        accountNumber: 2001,
        accountType: ACCOUNTTYPE.CHECKING_ACCOUNT,
        accountStatus: ACCOUNTSTATUS.OPEN,
        balance: 35000.00
    },
    1010: {
        accountNumber: 1010,
        accountType: ACCOUNTTYPE.CHECKING_ACCOUNT,
        accountStatus: ACCOUNTSTATUS.OPEN,
        balance: 7425.00
    },
    5500: {
        accountNumber: 5500,
        accountType: ACCOUNTTYPE.CHECKING_ACCOUNT,
        accountStatus: ACCOUNTSTATUS.OPEN,
        balance: 15000.00
    },
    123: {
        accountNumber: 123,
        accountType: ACCOUNTTYPE.CHECKING_ACCOUNT,
        accountStatus: ACCOUNTSTATUS.OPEN,
        balance: 150.00
    },
    456: {
        accountNumber: 456,
        accountType: ACCOUNTTYPE.CHECKING_ACCOUNT,
        accountStatus: ACCOUNTSTATUS.OPEN,
        balance: 65000.00
    }
}

export const mockCustomerAccountData: {
    [id: string]: CustomerAccount
} = {
    1: {
        customerAccountID: 1,
        customerId: 777,
        accountNumber: 1234,
        customerEmail: "stewie_griffin@gmail.com",
    },
    2: {
        customerAccountID: 2,
        customerId: 504,
        accountNumber: 2001,
        customerEmail: "glenn_quagmire@gmail.com",
    },
    3: {
        customerAccountID: 3,
        customerId: 2,
        accountNumber: 1010,
        customerEmail: "joe_swanson@gmail.com",
    },
    4: {
        customerAccountID: 4,
        customerId: 2,
        accountNumber: 5500,
        customerEmail: "joe_swanson@gmail.com",
    },
    5: {
        customerAccountID: 5,
        customerId: 123,
        accountNumber: 123,
        customerEmail: "peter_griffin@gmail.com",
    },
    6: {
        customerAccountID: 6,
        customerId: 456,
        accountNumber: 456,
        customerEmail: "lois_griffin@gmail.com",
    }
}