# W08D03

# TRELLO
=> https://trello.com/b/MQ3yi8Mw/to-do-task


## Task : Build a server & mongo Database 
in this repo i created a server by express and build a database with mongoDB 
and i used postman as an interface for the backend 



# Installation: 
##### Node js : 
install npm to your project by running : 
```
npm install 
```

install express package to build your server: 

```
npm i express 
```
install nodemon to run your server :
```
npm i nodemon
```

install morgan middleware :
```
npm i morgan 
```

install dotenv to the sensitive variables: 
```
npm i dotenv
```

install mongoose to build your database: 
```
npm i mongoose
```

install bcrypt to incription the password: 
```
npm i bcrypt
```

install json web token to generate a session ID :
```
npm i jsonwebtoken
```


## Run the server:
run your server with command: 
```
npm run dev 
```

# API Reference :
## Base URL :
This application runs locally on port 4000 
BASE_URL= http:/localhost:4000

# CRUD operations: 

##### GET

* to get all roles in this application: 
localhost:4000/roles 

* to get all tasks : 
localhost:4000/todo/:id

* To get all users : 
localhost:4000/users



##### POST 

* to create a new role : 
localhost:4000/role 


* to add new task in this application: 
localhost:4000/task


* to sign up in this application: 
localhost:4000/register

##### PUT 

* to edit a task in this application: 
localhost:4000/edit/:id


##### Delete : 
* to delete a task in this application: 
localhost:4000/todo/:id



# Links : 

* [MongoDB Doc](https://docs.mongodb.com/manual/installation/)
* [Express Doc](https://expressjs.com/en/starter/installing.html)
* [Postman Doc](https://www.postman.com/downloads/)