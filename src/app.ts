import express from 'express';
import bodyParser from 'body-parser';

import {todosRouter} from './routes/todos';
import {connectToDatabase} from "./helpers/db_client"

const app = express();

app.use(bodyParser.json());

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
