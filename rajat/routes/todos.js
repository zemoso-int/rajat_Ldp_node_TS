"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
// import { getDb } from '../helpers/db_client';
const db_client_1 = require("../helpers/db_client");
let todos = [];
const router = express_1.Router();
exports.todosRouter = express_1.default.Router();
exports.todosRouter.use(express_1.default.json());
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
exports.todosRouter.get("/", (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tod = yield db_client_1.collections.todos.find({}).toArray();
        res.status(200).send(tod);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
}));
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
exports.default = router;
