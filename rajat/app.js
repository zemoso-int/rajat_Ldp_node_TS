"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const db_client_1 = require("./helpers/db_client");
const todos_1 = require("./routes/todos");
const app = express_1.default();
app.use(body_parser_1.default.json());
// app.use(todosRoutes);
// app.listen(3000);
db_client_1.connectToDatabase()
    .then(() => {
    app.use("/todos", todos_1.todosRouter);
    app.listen(3000, () => {
        console.log(`Server started at http://localhost:${3000}`);
    });
})
    .catch((error) => {
    console.error("Database connection failed", error);
    process.exit();
});
