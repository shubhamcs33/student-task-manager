# Student Task Manager

## Project Overview

Student Task Manager is a web-based application designed to help students organize and manage their daily tasks efficiently.

The application allows users to create tasks, search tasks, filter tasks, mark tasks as completed or pending, delete tasks, and track their overall progress.

## Objective

The main objective of this project is to develop and deploy a simple web application that can be accessed through the internet using a cloud deployment platform.

The project demonstrates the use of frontend web technologies, a Node.js backend, Firebase Authentication, GitHub version control, and cloud deployment.

## Features

- User registration and login using Firebase Authentication
- Email verification for registered users
- Add new tasks
- Mark tasks as completed or pending
- Delete tasks
- Search tasks
- Filter tasks
- Task progress tracking
- Dashboard with task statistics
- Calendar view
- Student profile section
- Responsive user interface
- Cloud deployment with HTTPS

## Technologies Used

### Frontend

- HTML
- CSS
- JavaScript

### Backend

- Node.js
- Express.js

### Authentication

- Firebase Authentication

### Version Control

- Git
- GitHub

### Cloud Deployment

- AWS EC2
- Amazon Linux 2023
- Node.js and Express.js
- Nginx reverse proxy
- EC2 instance: t3.micro
- Public access through EC2 public IP
- Live URL: http://13.236.162.252

## Project Structure

```text
student-task-manager/
├── public/
│   ├── index.html
│   └── firebase-config.js
├── server.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md