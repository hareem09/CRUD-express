
# Basic CRUD Express App
CRUD operations are the bread and butter of backend systems. This is because they allow you to "Create", "Read", "Update", and "Delete" data through your API.


## Features
CRUD stands for

1. C -> Create
2. R-> Read
3. U->Update
4. D->Delete


## Setting up
To set up basic app you need to install some packages by running commands in terminal.

1 . Install node.js.

2 . Initialize project by running (npm init -y) in terminal

3 . Install express.js
          
    npm install express

## Installation

Install my-project with 

```bash
  git clone https://github.com/hareem09/CRUD-express
```
Change directory by running

```bash
cd CRUD-express
```
    
## Usage
Start the server
```bash
node index.js
```
The server will be running at port:
```bash
http://localhost:5000
```


## CRUD operation 
Here's a quick overview of the four primary HTTP methods associated with CRUD operations:

1. GET: Used for reading or retrieving data from the server.
2. POST: Used for creating new data on the server.
3. PUT: Used for updating existing data on the server.
4. DELETE: Used for removing data from the server.
## API Endpoints
1. Get all books
```bash
GET/books
```
2. Add new book 
```bash
POST/addbook
```
Body
```bash
{
    "id":3,
    "title":"Ego Is the Enemy",
    "author":"Ryan Holiday",
    "year":2016
}
```
3. GET book by id
```bash
GET/books/:id
```
4. Update book
```bash
PUT /updatebook/:id
```
Body
```bash
{
    "id":1,
    "title":"Harry potter the  curse child",
    "author":"JK rowling",
    "year":2020
}
```
5. Delete book by id
```bash
DELETE/deletebook/:id
```
## Error Handling
If there is error it will return status 404 which will display  message according to it on screen
