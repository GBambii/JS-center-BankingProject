import mongoose from 'mongoose';
import faker from 'faker';

  import Customer from './models/customers/Customers';
  import Account from './models/Account/Account';
  import Product from './models/Product/Product';
  import Loan from './models/Loan/Loan';
  import Employee from './models/employee/Employee';
  import ClientBase from './models/ClientBase/ClientBase';
  import Manager from './models/Manager/Manager';
  import Branch from './models/Branch/Branch';
  import Transaction from './models/Transaction/Transaction';

// Conectar a la base de datos MongoDB
mongoose.connect('mongodb://localhost:27017/your_database', { useNewUrlParser: true, useUnifiedTopology: true });


// Generar datos ficticios y guardarlos en la base de datos
async function generateData() {
  try {
    // Generar clientes ficticios
    const customers = Array.from({ length: 10 }, (_, index) => ({
      id: index + 1,
      name: faker.name.findName(),
      age: faker.random.number({ min: 18, max: 70 }),
      score: faker.random.number({ min: 300, max: 850 }),
      employeeId: faker.random.number({ min: 1, max: 5 }),
    }));

    // Generar productos ficticios
    const products = Array.from({ length: 5 }, (_, index) => ({
      id: index + 1,
      name: faker.commerce.productName(),
      typeP: faker.commerce.productMaterial(),
    }));

    // Generar préstamos ficticios
    const loans = Array.from({ length: 5 }, (_, index) => ({
      id: index + 1,
      account: mongoose.Types.ObjectId(),  // Generar un ObjectId aleatorio
      amount: faker.random.number({ min: 1000, max: 10000 }),
      date: faker.date.past(),
    }));

    // Generar empleados ficticios
    const employees = Array.from({ length: 5 }, (_, index) => ({
      id: index + 1,
      name: faker.name.findName(),
      type: faker.name.jobType(),
      branch: mongoose.Types.ObjectId(),  // Generar un ObjectId aleatorio
      clientBase: mongoose.Types.ObjectId(),  // Generar un ObjectId aleatorio
    }));

    // Generar bases de clientes ficticias
    const clientBases = Array.from({ length: 3 }, (_, index) => ({
      id: index + 1,
      name: faker.company.companyName(),
      type: faker.company.companySuffix(),
      clients: mongoose.Types.ObjectId(),  // Generar un ObjectId aleatorio
    }));

    // Generar gerentes ficticios
    const managers = Array.from({ length: 3 }, (_, index) => ({
      id: index + 1,
      name: faker.name.findName(),
      age: faker.random.number({ min: 30, max: 60 }),
      branch: mongoose.Types.ObjectId(),  // Generar un ObjectId aleatorio
    }));

    // Generar sucursales ficticias
    const branches = Array.from({ length: 2 }, (_, index) => ({
      id: index + 1,
      name: faker.company.companyName(),
      location: faker.address.city(),
      manager: mongoose.Types.ObjectId(),  // Generar un ObjectId aleatorio
    }));

    // Generar cuentas ficticias
    const accounts = Array.from({ length: 5 }, (_, index) => ({
      id: index + 1,
      owner: mongoose.Types.ObjectId(),  // Generar un ObjectId aleatorio
      type: faker.finance.accountType(),
      transaction: mongoose.Types.ObjectId(),  // Generar un ObjectId aleatorio
      loan: mongoose.Types.ObjectId(),  // Generar un ObjectId aleatorio
    }));

    // Generar transacciones ficticias
    const transactions = Array.from({ length: 10 }, (_, index) => ({
      id: index + 1,
      type: faker.finance.transactionType(),
      amount: faker.finance.amount(),
      date: faker.date.past(),
    }));

    // Guardar datos en la base de datos
    await Customer.insertMany(customers);
    await Product.insertMany(products);
    await Account.insertMany(accounts);
    await Branch.insertMany(branches);
    await Employee.insertMany(employees);
    await Manager.insertMany(managers);
    await Transaction.insertMany(transactions);
    await Loan.insertMany(loans);
    await ClientBase.insertMany(clientBases);
    console.log('Data generated and saved successfully!');
    }
   catch (error) {
    console.error('Error generating and saving data:', error);
  } finally {
    // Cerrar la conexión después de completar la operación
    mongoose.connection.close();
  }
}


// Ejecutar la generación de datos
generateData();

