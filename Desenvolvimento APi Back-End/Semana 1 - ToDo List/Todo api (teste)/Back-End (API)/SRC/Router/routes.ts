import express, { Router } from "express";
import bodyParser from "body-parser";
import { toDoList } from "./ToDoList.Routers";

export const apiRouter = Router();

apiRouter.use(bodyParser.json());
apiRouter.use(express.json());
apiRouter.use(bodyParser.urlencoded({ extended: false }));
apiRouter.use(express.urlencoded({ extended: false }));

apiRouter.use("/ToDoList", toDoList);
