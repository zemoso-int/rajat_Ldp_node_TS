import express, { Request, Response ,Router}from 'express';
import { ObjectId } from 'mongodb';
import { Todo } from '../models/todo';
// import { getDb } from '../helpers/db_client';
import { collections } from "../helpers/db_client";
type RequestBody = { text: string };
type RequestParams = { todoId: string };

let todos: Todo[] = [];

const router = Router();

export const todosRouter = express.Router();

todosRouter.use(express.json());
// router.get('/', (req, res, next) => {
//   res.status(200).json({ todos: todos });
// });
// router.get('/todos', async (ctx:any) => {
//   const todos = (await collections.todos.find({}).toArray())as Todo; // { _id: ObjectId(), text: '...' }[]
//   const transformedTodos = todos.map(
//     (todo: { _id: ObjectId; text: string }) => {
//       return { id: todo._id, text: todo.text };
//     }
//   );
//   ctx.response.body = { todos: transformedTodos };
// });

todosRouter.get("/", async (_req: Request, res: Response) => {
  try {
    const tod = await collections.todos.find({}).toArray() ;


      res.status(200).send(tod);
  } catch (error:any) {
      res.status(500).send(error.message);
  }
});

// router.post('/todo', (req, res, next) => {
//   const body = req.body as RequestBody;
//   const newTodo: Todo = {
//     id: new Date().toISOString(),
//     text: body.text,
//   };
//   console.log(newTodo)
//   todos.push(newTodo);

//   res.status(201).json({ message: 'Added Todo', todo: newTodo, todos: todos });
// });

// router.put('/todo/:todoId', (req, res, next) => {
//   const params = req.params as RequestParams;
//   const tid = params.todoId;
//   const body = req.body as RequestBody;
//   const todoIndex = todos.findIndex((todoItem) => todoItem.id === tid);
//   if (todoIndex >= 0) {
//     todos[todoIndex] = { id: todos[todoIndex].id, text: body.text };
//     return res.status(200).json({ message: 'Updated todo', todos: todos });
//   }
//   res.status(404).json({ message: 'Could not find todo for this id.' });
// });

// router.delete('/todo/:todoId', (req, res, next) => {
//   const params = req.params as RequestParams;
//   todos = todos.filter((todoItem) => todoItem.id !== params.todoId);
//   res.status(200).json({ message: 'Deleted todo', todos: todos });
// });

export default router;
