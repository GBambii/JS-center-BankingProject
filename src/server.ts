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

dotenv.config();

const app: Application = express();  // Corregir la asignación de express a app
const PORT: number = parseInt(process.env.PORT || '3000', 10);  // Asegurarse de que PORT sea un número

// Setting bodyParser
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
    await mongoose.connect(process.env.MONGODB_URI!, { useUnifiedTopology: true });

    console.log('Connected to MongoDB');
    
    app.listen(PORT, () => console.log(`Server started on ${PORT}`));
  } catch (error: any) {
    console.error('Error starting the server:', error);

    if (error.name === 'MongoError') {
      console.error('MongoDB Connection Error:', error.message);
    }

    process.exit(1);
  }
};

start();
// app.listen(PORT, () => {
//   console.log(`The server is online in the port: ${PORT}`);
// });
