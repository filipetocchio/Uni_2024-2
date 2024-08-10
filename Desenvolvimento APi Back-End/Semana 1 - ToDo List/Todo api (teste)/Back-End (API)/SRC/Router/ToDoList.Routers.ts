import express from "express";

import { createTask } from "../Controllers/ToDoList.Controllers"
import { getTasks } from "../Controllers/ToDoList.Controllers"
import { getTask } from "../Controllers/ToDoList.Controllers"
import { updateTask } from "../Controllers/ToDoList.Controllers"
import { deleteTask } from "../Controllers/ToDoList.Controllers"

export const toDoList = express.Router();

toDoList.post("/", createTask);
toDoList.get("/", getTasks);
toDoList.get("/:id", getTask);
toDoList.patch("/:id", updateTask);
toDoList.delete("/:id", deleteTask);
