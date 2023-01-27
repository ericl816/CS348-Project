# CS348-Project

# Fashion Shopping Website

This is a fashion shopping website that lets any user register, login, view products, add products, add products to cart, checkout, and place orders (the payment method is TBD, will probably be Stripe API). The platform will be complete with product titles, prices, images, ratings and I plan to use a Kaggle Dataset that consists of 20,000 fashion e-commerce items in the format of a CSV file.

Any e-commerce enthusiast (especially fashion lovers) can use my application. By creating a user account, it gives the user the ability to interact with products, add products to cart, and even checkout. In addition, I also plan on incorporating a payment gateway (e.g: with Stripe's API). If I have time, I will look into making the whole platform secure and improving query performance for supporting production datasets with millions of records and new table schemas.

## Creating and Loading the Sample Database

### Installing MySQL locally

1. Download the MySQL installer ([link] (https://dev.mysql.com/downloads/mysql/))
2. Install with all default options

### Creating the Database

1. To setup MySQL, first create a password for the root user. After, open up MySQLWorkbench and connect to the database, with the password that was created previously.
2. Run `create database fashiondb;`
3. Run `use fashiondb;`

### Running Database Migrations

1. To upgrade to the latest version of the database, run `npm run db-migrate up`
2. To downgrade to the previous version of the database, run `npm run db-migrate down`

### Loading Sample Sata and Running SQL Files

1. Run `npm run load-sample-data`
2. Compare the output to test-sample.out

## How to Run the Application

### Running the Sample Application Locally

1. Run the backend
  - Navigate to the `/backend` folder
  - Install dependencies by running `npm install`
  - Run `npm run dev`
2. Run the frontend
  - Navigate to the `/frontend` folder
  - Install dependencies by running `npm install`
  - Run `npm start`
3. Navigate to `http://localhost:3000/` to view and interact with the web application

### Interacting With Sample Data

1. Go to the localhost webpage and simply interact with the sample database (e.g: select and insert queries)
2. See the records updated on the webpage after the database has been modified
