import cors from 'cors';
import { Application } from "express";

const setCors = (app: Application) => app.use(cors);

export default setCors;