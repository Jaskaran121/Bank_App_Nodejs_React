import express from 'express';
import {testController as Controller} from '../controllers';

export const testRouter = express.Router();

// Url : /api/test
testRouter.get(
    '/',
    Controller.testServer
)

export default testRouter;