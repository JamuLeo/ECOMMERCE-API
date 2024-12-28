<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>
Product Management Service

This project is a NestJS-based Product Management Service that utilizes a MySQL database to manage CRUD operations for products. It also supports filtering of products based on search and category.

Features

CRUD Operations:

Create a new product.

Retrieve all products or a single product by ID.

Update an existing product.

Delete a product.

Filtering:

Filter products based on search (matching name or description) and category.

MySQL Integration:

Data is stored and managed using MySQL.

Prerequisites

Ensure you have the following installed:

Node.js

NestJS CLI

MySQL Database

Installation

Clone the repository:

git clone <repository-url>
cd <repository-folder>

Install dependencies:

npm install

Configure MySQL database:

Update the ormconfig.json or .env file with your MySQL database credentials.

Running the Application

Start the MySQL server.

Run the application:

npm run start:dev



