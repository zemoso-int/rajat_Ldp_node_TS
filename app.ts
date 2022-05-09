import express from 'express';
import bodyParser from 'body-parser';

import todosRoutes from './routes/todos';
import { connectToDatabase } from "./helpers/db_client"
import {todosRouter} from "./routes/todos";
const app = express();

app.use(bodyParser.json());

// app.use(todosRoutes);

// app.listen(3000);

connectToDatabase()
    .then(() => {
        app.use("/todos", todosRouter);

        app.listen(3000, () => {
            console.log(`Server started at http://localhost:${3000}`);
        });
    })
    .catch((error: Error) => {
        console.error("Database connection failed", error);
        process.exit();
    });