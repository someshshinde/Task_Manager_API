<h1>Assignment: Task API with Status Filter</h1>
🎯 Objective
Build a simple Task Management API that allows creating tasks and retrieving them with
optional filtering by status. The goal is to evaluate your ability to:
● Design a RESTful API
● Implement input validation
● Work with a database (Mysql Sequelizer)
● Apply clean code practices and structure

<h3>Package Install</h3>
<b>Nodemon</b>
<p>nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected</p>
<i>Development Dependency</i>

```bash
 npm install --save-dev nodemon 
```

add package.json to 

```bash
"scripts": { "start":"nodemon src/server.js" }
```

<b>Express</b>
<p>Fast, unopinionated, minimalist web framework for Node.js.</p>

```bash
npm i express
```
<b>Express Validator</b>
```bash
npm i express-validator
```
<b>Sequelize</b>
<p>Sequelize is an easy-to-use and promise-based Node.js ORM tool for Postgres, MySQL, MariaDB, SQLite, DB2, Microsoft SQL Server, and Snowflake. It features solid transaction support, relations, eager and lazy loading, read replication and more.</p>

```bash
npm i sequelize
```
<b>MySQL</b>
```bash
npm i mysql2
```
<b>cors</b>
<p>CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options</p>

```bash
 npm i cors 
 ```

<b>dotenv</b>
<p>dotenv is a package that loads environment variables from a .env file into process.env</p>

```bash
npm i dotenv
```

## Running 

run the following command

```bash
  npm start
```
<h2>API END POINT</h2>
<b>Create Task</b>

```bash
http://localhost:8000/api/v1/createTask
```
Input Field
```bash
{
    "title":"test",
    "description":"Test description",
    "status":"pending",
    "dueDate":"2025-04-30"

}
```
Response
```bash
{
    "message": "Task Created Successfully",
    "data": {
        "id": 1,
        "title": "test",
        "description": "Test description",
        "status": "pending",
        "dueDate": "2025-04-30",
        "updatedAt": "2025-04-23T07:36:05.426Z",
        "created_at": "2025-04-23T07:36:05.426Z"
    }
}
```
<b>Get Task</b>

```bash
http://localhost:8000/api/v1/getAllTask
```
Filter
```bash
status=pending
```
Response
```bash
[
    {
        "id": 4,
        "title": "test",
        "description": "Test description",
        "status": "pending",
        "dueDate": "2025-04-30",
        "created_at": "2025-04-23T07:36:05.000Z",
        "updatedAt": "2025-04-23T07:36:05.000Z"
    },
    {
        "id": 2,
        "title": "test",
        "description": "Test description",
        "status": "pending",
        "dueDate": "2025-04-30",
        "created_at": "2025-04-23T06:52:49.000Z",
        "updatedAt": "2025-04-23T06:52:49.000Z"
    },
    {
        "id": 1,
        "title": "test",
        "description": "Test description",
        "status": "pending",
        "dueDate": "2025-04-23",
        "created_at": "2025-04-23T06:51:48.000Z",
        "updatedAt": "2025-04-23T06:51:48.000Z"
    }
]
```
Filter
```bash
status=done
```
Response
```bash
[
    {
        "id": 3,
        "title": "test",
        "description": "Test description",
        "status": "done",
        "dueDate": "2025-04-30",
        "created_at": "2025-04-23T07:02:41.000Z",
        "updatedAt": "2025-04-23T07:02:41.000Z"
    }
]
```


<b>Status Count</b>

```bash
http://localhost:8000/api/v1/statusCount
```
Response
```bash
[
    {
        "status": "pending",
        "count": 3
    },
    {
        "status": "done",
        "count": 1
    }
]
```

