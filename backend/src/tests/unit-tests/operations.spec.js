import {exchangeCurrency,getCustomerAccounts,getCustomerData,performDeposit} from '../../utils';

describe("Operations Test Suite",() => {
    describe("exchangeCurrency",() => {
        it("should return same amount, if exchangeType is CAD",() => {
            const exchangeCurrencyMap = {
                "CAD": 1
            }
            const exchangedAmount = exchangeCurrency("CAD",1000,exchangeCurrencyMap);
            expect(exchangedAmount).toBe(1000);
        });
        
        it("should return correct exchanged amount, according to exchangeCurrencyMap",() => {
            const exchangeCurrencyMap = {
                "CAD": 1.00,
                "MXN": 25.00
            }
            const actualAmount = exchangeCurrency("MXN",1000,exchangeCurrencyMap);
            const expectedAmount = 1000/exchangeCurrencyMap["MXN"];
            expect(actualAmount).toEqual(expectedAmount);
        });

        it("should return the same amount,if wrong CurrencyType is passed",() => {
            const exchangeCurrencyMap = {
                "CAD": 1.00,
                "MXN": 25.00
            }
            const actualAmount = exchangeCurrency("PND",1000,exchangeCurrencyMap);
            expect(actualAmount).toEqual(1000);
        });
    });

    describe("getCustomerAccounts",() => {
        const mockData = [{
                accountNumber: 123
            },
            {
                accountNumber: 1234
            }
        ];
        it("should filter values according to predicate",() => {
            const predicate = (data) => data.accountNumber === 123;
            expect(getCustomerAccounts(predicate,mockData)).toEqual([mockData[0]]);
        });

        it("should return empty array,if none of the conditions statisfy",() => {
            const predicate = (data) => data.accountNumber === 1245;
            expect(getCustomerAccounts(predicate,mockData)).toEqual([]);
        });
    });

    describe("getCustomerData",() => {
        const customerAccountData = [{
            accountNumber: 123,
            customerAccountID: 1,
            customerId: 1234
        }];
        const customerData = {
            1234: {
                name: "ABC"
            },
            456: {
                name: "XYZ"
            }
        };
        const accountData = {
            123 : {
                balance : 20
            },
            98: {
                balance: 25
            }
        }
        it("should return customer data",() => {
            const result = getCustomerData(customerAccountData,customerData,accountData);
            const expectedResult = {
                customerDetails: customerData[1234],
                accounts: [
                    accountData[123]
                ]
            }
            expect(result).toEqual(expectedResult);
        });

        it("should return undefined if customerAccountData is sent as undefined",() => {
            const result = getCustomerData(undefined);
            expect(result).toEqual(undefined);
        });

        it("should return undefined if customerAccountData is sent as empty array",() => {
            const result = getCustomerData([]);
            expect(result).toEqual(undefined);
        }); 
    });

    describe("performDeposit",() => {
        const accountData = {
            678: {
                accountNumber: 678,
                accountType: "Checking",
                balance: 456.00
            },
            456: {
                accountNumber: 456,
                accountType: "Checking",
                balance: 123.00
            },
        }
        const exchangeCurrencyMap = {
            "CAD": 1.00,
            "MXN": 25.00
        }
        it("should performDeposit and update the accountData",() => {
            const payload = {
                customerAccount: {
                    accountNumber: 678
                },
                amount: 20.00,
                currencyType: "CAD"
            }
            const initialAmount = accountData[payload.customerAccount.accountNumber].balance;
            const expectedAmount = initialAmount + payload.amount;
            performDeposit(payload,accountData,exchangeCurrencyMap);
            expect(accountData[payload.customerAccount.accountNumber].balance).toEqual(expectedAmount);
        });

        it("should performDeposit with converted currency",() => {
            const payload = {
                customerAccount: {
                    accountNumber: 678
                },
                amount: 20.00,
                currencyType: "MXN"
            }
            const initialAmount = accountData[payload.customerAccount.accountNumber].balance;
            const expectedAmount = initialAmount + (payload.amount/exchangeCurrencyMap[payload.currencyType]);
            performDeposit(payload,accountData,exchangeCurrencyMap);
            expect(accountData[payload.customerAccount.accountNumber].balance).toEqual(expectedAmount);
        });
    })
})