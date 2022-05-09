import {MongoClient} from "mongodb";
export const client = new MongoClient('mongodb+srv://nodeapp:nodeapp@cluster0.0sxot.mongodb.net/shop?retryWrites=true&w=majority');
export const db = client.db('shop');
export const connectToDatabase = async () => {
   

    await client.connect();

    

    const todosCollection = db.collection('products');
    console.log(todosCollection);

    console.log(`Successfully connected to database: ${db.databaseName} and collection: ${todosCollection.collectionName}`);
}

