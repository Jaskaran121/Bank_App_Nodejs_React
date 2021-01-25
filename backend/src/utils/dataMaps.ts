import { CURRENCYTYPE,ACTIONTYPE } from "../common";
import {performDeposit,performTransfer,performWithDraw} from "./operations";

export const exchangeRatesMap: {
    [id: string]: number
} = {
    [CURRENCYTYPE.USD]: 0.50,
    [CURRENCYTYPE.MXN]: 10.00,
    [CURRENCYTYPE.CAD]: 1.00
}

export const actionTypeMap: {
    [id: string]: Function
} = {
    [ACTIONTYPE.DEPOSIT]: performDeposit,
    [ACTIONTYPE.WITHDRAW]: performWithDraw,
    [ACTIONTYPE.TRANSFER]: performTransfer
}

export const accountPayloadSchema = {
    email: {
        type: "string",
        belongTo: null,
        required: true
    },
    actionType: {
        type: "string",
        belongTo: actionTypeMap,
        required: true
    },
    currencyType:{
        type: "string",
        belongTo: exchangeRatesMap,
        required: true
    },
    amount:{
        type: "number",
        belongTo: null,
        required: true
    },
    destinationAccount: {
        type: "number",
        belongTo: null,
        required: false
    },
    accountNumber: {
        type: "number",
        belongTo: null,
        required: true
    }
}