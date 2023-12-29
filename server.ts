import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();
const PORT = process.env.PORT || 3000;

// Setting bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// conection to MongoDB

// Setting routes

app.listen(PORT, () => {
  console.log(`The server is online in the port: ${PORT}`);
});
