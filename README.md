
# Fullstack React App with CRUD Operations (Containerized in Docker)

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [License](#license)

## Introduction

This project is a fullstack React application with CRUD (Create, Read, Update, Delete) operations. The application is containerized using Docker for easy deployment and management.

## Features

- Perform CRUD operations on employee data.
- ...

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)

## Project Structure

The project follows the structure below:

```
.
├── README.md
├── backend
│   ├── Dockerfile
│   ├── index.js
│   ├── package-lock.json
│   ├── package.json
│   └── src
│       ├── models
│       │   └── Employee.js
│       └── routes
│           └── employeeRoutes.js
├── docker-compose.yml
└── frontend
    ├── Dockerfile
    ├── package-lock.json
    ├── package.json
    ├── public
    │   ├── favicon.ico
    │   ├── index.html
    │   ├── logo192.png
    │   ├── logo512.png
    │   ├── manifest.json
    │   └── robots.txt
    └── src
        ├── App.css
        ├── App.js
        ├── App.test.js
        ├── components
        │   ├── AddEmployee.js
        │   ├── EmployeeDetails.js
        │   ├── EmployeeList.js
        │   ├── ListAllEmployees.js
        │   ├── Login.js
        │   └── Signup.js
        ├── index.css
        ├── index.js
        ├── logo.svg
        ├── reportWebVitals.js
        └── setupTests.js
```

## Technologies Used

- React
- Node.js
- Docker

