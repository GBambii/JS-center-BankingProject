import express, { Application, Request, Response } from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import accountRoutes from "./routes/accountRoutes";
import branchRoutes from "./routes/branchRoutes";
import clientBaseRoutes from "./routes/clientBaseRoutes";
import customersRoutes from "./routes/customersRoutes";
import employeeRoutes from "./routes/employeeRoutes";
import loanRoutes from "./routes/loanRoutes";
import managerRoutes from "./routes/managerRoutes";
import productRoutes from "./routes/productRoutes";
import transactionRoutes from "./routes/transactionRoutes";
import * as dotenv from "dotenv";
import log4js from './log4js.config';

dotenv.config();
const logger = log4js.getLogger('server');

const app: Application = express(); 
const PORT: number = parseInt(process.env.PORT || '3000', 10); 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (_req: Request, res: Response) => {
  res.send('Express server running');
});
app.use('/api/account', accountRoutes);
app.use('/api/branch', branchRoutes);
app.use('/api/clientBase', clientBaseRoutes);
app.use('/api/customers', customersRoutes);
app.use('/api/employee', employeeRoutes);
app.use('/api/loan', loanRoutes);
app.use('/api/manager', managerRoutes);
app.use('/api/product', productRoutes);
app.use('/api/transaction', transactionRoutes);
const start = async () => {
  try {
      await mongoose.connect(process.env.MONGODB_URI);
      logger.info('Connected to MongoDB');

      app.listen(PORT, () => logger.info(`Server started on ${PORT}`));
  } catch (error: any) {
      logger.error('Error starting the server:', error);

      if (error.name === 'MongoError') {
          logger.error('MongoDB Connection Error:', error.message);
      }

      process.exit(1);
  }
};
start();