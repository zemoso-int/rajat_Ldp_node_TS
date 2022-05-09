import   {MongoClient} from "mongodb";
// import   dotenv from "dotenv";

export const collections=[];

export async function connectToDatabase () {
  // dotenv.config();

  const client = new MongoClient('mongodb+srv://nodeapp:nodeapp@cluster0.0sxot.mongodb.net/todo?retryWrites=true&w=majority');
          
  await client.connect();
      
  const db = client.db('todo');
 
  const todosCollection= db.collection('todos');
  console.log(todosCollection);
// collections = todosCollection;
     
       console.log(`Successfully connected to database: ${db.databaseName} and collection: ${todosCollection.collectionName}`);
}

// export function connect() {
//   const client = new MongoClient('mongodb+srv://nodeapp:nodeapp@cluster0.0sxot.mongodb.net/todo?retryWrites=true&w=majority');

//   db = client.db('todo-app');
// }

// export function getDb() {
//   return db;
// }
