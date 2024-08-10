import { prisma } from '../utils/prisma';
import { Request, Response } from 'express';


// Post
export const createTask = async (req: Request, res: Response) => {
  const { title, description, limitDate } = req.body;

  const task = await prisma.task.create({
    data: {
      title,
      description,
      limitDate
    }
  });

  return res.json(task);
}

// GET
export const getTasks = async (req: Request, res: Response) => {
  const tasks = await prisma.task.findMany();

  return res.json(tasks);
}

// GET by ID
export const getTask = async (req: Request, res: Response) => {
  const { id } = req.params;

  const task = await prisma.task.findUnique({
    where: {
      id: Number(id)
    }
  });

  return res.json(task);
}

// PATCH
export const updateTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, description, limitDate } = req.body;

  const task = await prisma.task.update({
    where: {
      id: Number(id)
    },
    data: {
      title,
      description,
      limitDate
    }
  });

  return res.json(task);
}

// DELETE
export const deleteTask = async (req: Request, res: Response) => {
  const { id } = req.params;

  await prisma.task.delete({
    where: {
      id: Number(id)
    }
  });

  return res.status(204).send();
}