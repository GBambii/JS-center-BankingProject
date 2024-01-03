# Javascript Competency Center : Banking

**Author:** Guillermo Busso Ambroggio

## Table of Contents

- [Introduction](#introduction)
- [Dependencies](#dependencies)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)

## Introduction

This project simulates various banking operations and entities that one might encounter in a real-world banking environment. Developed using TypeScript and MongoDB, it provides a comprehensive system for managing accounts, branches, transactions, and more.

### Key Features

- **Account Management:** Create, modify, and view customer accounts with detailed information.
- **Branch Operations:** Manage branches, assign managers, and oversee operations at different locations.
- **Transaction Handling:** Facilitate seamless transactions, including deposits, withdrawals, and transfers.
- **Employee and Manager Profiles:** Track and manage employee and manager details associated with different branches.
- **Loan Management:** Implement a robust loan system, handling application, approval, and repayment processes.

## Dependencies

### [@types/mongoose](https://www.npmjs.com/package/@types/mongoose)
- Provides TypeScript with type definitions for Mongoose to enhance code development.

### [express](https://www.npmjs.com/package/express)
- Used to build the web server and handle HTTP requests and responses.

### [mongoose](https://www.npmjs.com/package/mongoose)
- Used for MongoDB database interaction, defining schemas, and performing CRUD operations.

### [body-parser](https://www.npmjs.com/package/body-parser)
- Used to parse JSON and url-encoded data from HTTP requests.

### [mongodb](https://www.npmjs.com/package/mongodb)
- Required by Mongoose for low-level MongoDB operations.

### [dotenv](https://www.npmjs.com/package/dotenv)
- Used for taking env variables such as MONGODBNAME or env variable with username and password which is the URL used to connect to the mongo cluster.

### [faker](https://www.npmjs.com/package/@faker-js/faker)
- Used for generating random dataset for each model.

## Dev Dependencies

### [@types/express](https://www.npmjs.com/package/@types/express)
- Provides TypeScript with type definitions for Express to enhance code development.


### [typescript](https://www.npmjs.com/package/typescript)
- Used to enable static typing, improve code maintainability, and catch potential errors during development.

### [ts-node](https://www.npmjs.com/package/ts-node)
- Used to directly run TypeScript files without the need for a separate compilation step.


### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:

```
git clone https://github.com/GBambii/JS-center-BankingProject.git
```

2. Navigate to the project directory:

```
cd JS-center-BankingProject
```
3. Install dependencies:

```
npm install
```
## Usage

```
npm run start 
```