import express from 'express';
import {customerController as Controller} from '../controllers';

export const customerRouter = express.Router();

// Url : /api/customer
customerRouter.post(
    '/',
    Controller.getCustomerInfo
)

export default customerRouter;