import {executeAPI} from './API.utils';

export const getCustomerInfo = (options) => executeAPI("/api/customer","POST",options);