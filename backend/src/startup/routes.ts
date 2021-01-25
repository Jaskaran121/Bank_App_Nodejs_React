import express,{Application} from 'express';
import {customerRouter,accountRouter,testRouter} from '../routes/endPoints';

export const routes = (app: Application) => {
  app.use(express.json());
  app.use("/api/customer",customerRouter);
  app.use("/api/account",accountRouter);
  app.use("/api/test",testRouter);
}

export default routes;