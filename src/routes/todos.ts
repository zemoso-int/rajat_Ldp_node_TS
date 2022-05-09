import express, {Request, Response, Router} from 'express';
import {Todo} from '../models/todo';
import {connectToDatabase,db} from "../helpers/db_client";

type RequestBody = { text: string };
type RequestParams = { todoId: string };

let todos: Todo[] = [];
const DB=db;
const router = Router();

export const todosRouter = express.Router();

todosRouter.use(express.json());


todosRouter.get("/", async (_req: Request, res: Response) => {
    try {
        const tod = await connectToDatabase();

        res.status(200).send(tod);
    } catch (error: any) {
        res.status(500).send(error.message);
    }
});

todosRouter.post('/', (req, res, next) => {
    console.log('newTodo')
  const body = req.body as RequestBody;
  const newTodo: Todo = {
    id: new Date().toISOString(),
    text: body.text,
  };
DB.collection('todos').insertOne(newTodo)
  console.log(newTodo)
  todos.push(newTodo);

  res.status(201).json({ message: 'Added Todo', todo: newTodo, todos: todos });
});

router.post('/todo', (req, res, next) => {
  const body = req.body as RequestBody;
  const newTodo: Todo = {
    id: new Date().toISOString(),
    text: body.text,
  };
  console.log(newTodo)
  todos.push(newTodo);

  res.status(201).json({ message: 'Added Todo', todo: newTodo, todos: todos });
});

export default router;
