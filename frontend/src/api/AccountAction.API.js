import {executeAPI} from './API.utils';

export const performAccountAction = (options) => executeAPI("/api/account","POST",options);