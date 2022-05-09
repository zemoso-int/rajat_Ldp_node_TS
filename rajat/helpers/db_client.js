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
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
// import   dotenv from "dotenv";
exports.collections = [];
function connectToDatabase() {
    return __awaiter(this, void 0, void 0, function* () {
        // dotenv.config();
        const client = new mongodb_1.MongoClient('mongodb+srv://nodeapp:nodeapp@cluster0.0sxot.mongodb.net/todo?retryWrites=true&w=majority');
        yield client.connect();
        const db = client.db('todo');
        const todosCollection = db.collection('todos');
        console.log(todosCollection);
        // collections = todosCollection;
        console.log(`Successfully connected to database: ${db.databaseName} and collection: ${todosCollection.collectionName}`);
    });
}
exports.connectToDatabase = connectToDatabase;
// export function connect() {
//   const client = new MongoClient('mongodb+srv://nodeapp:nodeapp@cluster0.0sxot.mongodb.net/todo?retryWrites=true&w=majority');
//   db = client.db('todo-app');
// }
// export function getDb() {
//   return db;
// }
