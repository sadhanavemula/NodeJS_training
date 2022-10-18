Project Title
express-node-mysql-project - ecommerce-store

PROJECT description
An full-stack eCommerce store web application in nodejs. It will allows user to sign up or sign in, and tag the user to 
different role. Once the user istagged with the appropriate role, and signed in - user will get access to the 
appropriate api's. There are multiple brands, and categories for the product choice.
We will be using MySql database to store all the user and products related data

Requirements
For development, you will only need Node.js, bcryptjs, express, jsonwebtoken, mysql2, sequilize and a node global package, 
nodemon, installed in your environement.

Node
#### Node installation on Windows
Just go on official Node.js website and download the installer.

#### Node installation on Ubuntu
You can install nodejs and npm easily with apt install, just run the following commands.

  $ sudo apt install nodejs
  $ sudo apt install npm
#### Other Operating Systems You can find more information about the installation on the official Node.js website and 
the official NPM website.
If the installation was successful, you should be able to run the following command.

$ node --version
v8.11.3

$ npm --version
6.1.0
Configure app
Provide your authorization related configurations at /config/auth.conffig.js file. And the db realted configurations 
at /config/db.config.js

Running the project
$ nodemon app.js