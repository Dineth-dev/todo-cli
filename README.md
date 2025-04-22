# Todo CLI App

A simple command-line todo application built with Node.js

Manage tasks from terminal - add, list, mark task progression, delete and sort tasks.

## Features
- Add new tasks
- List all tasks
- Mark tasks as completed or not completed
- Delete tasks
- Sort tasks by completion status
- Tasks saved in a local JSON file

## Installation
Clone repo and run:

npm install

## Commands
<bash>
- Add - node todo.js add "Task"
- List - node todo.js list
- Done (Task number is used to select Task) - node todo.js done 1
- Undone (Task number is used to select Task) - node todo.js undone 1
- Sort - node todo.js sort

## Tech Stack

- Node.js
- Javascript
- File system (fs) module for data storage