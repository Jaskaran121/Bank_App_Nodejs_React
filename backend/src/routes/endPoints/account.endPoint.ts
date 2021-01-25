import express from 'express';
import {accountController as Controller} from '../controllers';
import {checkFraud} from '../../middleware';

export const accountRouter = express.Router();

// Url : /api/account
accountRouter.post(
    '/',
    checkFraud,
    Controller.performAction
)

export default accountRouter;