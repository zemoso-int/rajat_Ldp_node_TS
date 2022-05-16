import express, {Request, Response, Router} from 'express';
import {Product} from '../models/todo';
import {connectToDatabase,db} from "../helpers/db_client";
import {ObjectId} from 'mongodb'

const DB=db;
const router = Router();

export const productsRouter = express.Router();

productsRouter.use(express.json());


productsRouter.get("/", async (_req: Request, res: Response) => {
  
      let products= await DB.collection('products')
        .find()
        .toArray()
        

              res.status(200).send(products);
   
       

    
    // } catch (error: any) {
    //     res.status(500).send(error.message);
    // }
});

productsRouter.post('/',async (req, res, next) => {
    
  const body = req.body ;
  const newProduct: Product = {
   
    title: body.title,
    price: body.price,
    description: body.description,
    imageUrl: body.imageUrl,
  };
  
  await  DB.collection('products').insertOne(newProduct)
  console.log(newProduct)
  

  res.status(201).json({ message: 'Added Product', Product: newProduct});
//       }
//   catch (error: any) {
//     res.status(500).send(error.message);
// }
});

productsRouter.put('/',async (req, res, next) => {
 const body = req.body ;
 const id= new ObjectId(body._id); 
  const updatedProduct: Product = {
  
    title: body.title,
    price: body.price,
    description: body.description,
    imageUrl: body.imageUrl,
  };

  await  DB.collection('products')
    .updateOne({ _id: id }, { $set: updatedProduct });
  console.log(updatedProduct)
  

  res.status(201).json({ message: 'updated Product', Product: updatedProduct});
//       }
//   catch (error: any) {
//     res.status(500).send(error.message);
// }
});

productsRouter.delete('/',async (req, res, next) => {
  const body = req.body ;
  const id= new ObjectId(body._id); 
   
   
  await   DB.collection('products')
     .deleteOne({ _id: id })
   
   
 
   res.status(201).json({ message: 'Deleted Product'});
//        }
//    catch (error: any) {
//      res.status(500).send(error.message);
//  }
 });



export default router;
