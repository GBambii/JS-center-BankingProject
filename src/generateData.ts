import mongoose, { Schema } from 'mongoose';
import faker from 'faker';
import * as dotenv from "dotenv";
import Customer from './models/customers/Customers';
import Account from './models/Account/Account';
import Product from './models/Product/Product';
import Loan from './models/Loan/Loan';
import Employee from './models/employee/Employee';
import ClientBase from './models/ClientBase/ClientBase';
import Manager from './models/Manager/Manager';
import Branch from './models/Branch/Branch';
import Transaction from './models/Transaction/Transaction';
import log4js from './log4js.config';

const logger = log4js.getLogger('generateData');
dotenv.config();

const start = async () => {
    try {
      await mongoose.connect(process.env.MONGODB_URI!, { useUnifiedTopology: true });
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

async function generateData() {
  try {
    const customers = Array.from({ length: 10 }, (_, index) => ({
      id: index + 1,
      name: faker.name.findName(),
      age: faker.random.number({ min: 18, max: 70 }),
      score: faker.random.number({ min: 300, max: 850 }),
      employeeId: faker.random.number({ min: 1, max: 5 }),
    }));
    const products = Array.from({ length: 5 }, (_, index) => ({
      id: index + 1,
      name: faker.commerce.productName(),
      typeP: faker.commerce.productMaterial(),
    }));
    const loans = Array.from({ length: 5 }, (_, index) => ({
      id: index + 1,
      account: Schema.Types.ObjectId(),
      amount: faker.random.number({ min: 1000, max: 10000 }),
      date: faker.date.past(),
    }));
    const employees = Array.from({ length: 5 }, (_, index) => ({
      id: index + 1,
      name: faker.name.findName(),
      type: faker.name.jobType(),
      branch: Schema.Types.ObjectId(),
      clientBase: Schema.Types.ObjectId(),
    }));
    const clientBases = Array.from({ length: 3 }, (_, index) => ({
      id: index + 1,
      name: faker.company.companyName(),
      type: faker.company.companySuffix(),
      clients: Schema.Types.ObjectId(),
    }));
    const managers = Array.from({ length: 3 }, (_, index) => ({
      id: index + 1,
      name: faker.name.findName(),
      age: faker.random.number({ min: 30, max: 60 }),
      branch: Schema.Types.ObjectId(),
    }));
    const branches = Array.from({ length: 2 }, (_, index) => ({
      id: index + 1,
      name: faker.company.companyName(),
      location: faker.address.city(),
      manager: Schema.Types.ObjectId(),
    }));
    const accounts = Array.from({ length: 5 }, (_, index) => ({
      id: index + 1,
      owner: Schema.Types.ObjectId(),
      type: faker.finance.accountType(),
      transaction: Schema.Types.ObjectId(),
      loan: Schema.Types.ObjectId(),
    }));
    const transactions = Array.from({ length: 10 }, (_, index) => ({
      id: index + 1,
      type: faker.finance.transactionType(),
      amount: faker.finance.amount(),
      date: faker.date.past(),
    }));

    await Customer.insertMany(customers);
    await Product.insertMany(products);
    await Account.insertMany(accounts);
    await Branch.insertMany(branches);
    await Employee.insertMany(employees);
    await Manager.insertMany(managers);
    await Transaction.insertMany(transactions);
    await Loan.insertMany(loans);
    await ClientBase.insertMany(clientBases);
    logger.log('Data generated and saved successfully!');
    }
   catch (error) {
    logger.error('Error generating and saving data:', error);
  } finally {
    mongoose.connection.close();
  }
}
generateData();

