// process.env.NODE_ENV = 'test';


//Require the dev-dependencies
// let cha = require('chai');
// let chaiHttp = require('chai-http');
// let server = require('../src/app');
// let should = chai.should();


// cha.use(chaiHttp);
// describe('calculate', function() {
//   it('add', function() {
//     let result = '5'+'2';
//     console.log(result)
//     result.should.be('52');
//   }); 
// });



//   describe('/GET product', () => {
//       it('it should GET all the products', (done) => {
//         cha.request(server)
//             .get('/products')
//             .end((err:any, res:any) => {
//                   res.should.have.status(200);
//                   res.body.should.be.a('array');
//                if(err){
//                  console.log(err)
//                }
//               done();
//             });
//       });
//   });

// import { expect } from 'chai';


// describe('Hello function', () => {
//   it('should return hello world', () => {
//     const result = 'Hello World!';
//     expect(result).to.equal('Hello World!');
//   });
// });

import app from './app'
import  {expect} from 'chai';
// import chaiHttp = require('chai-http');
import 'mocha';
import {agent as request} from 'supertest';
// chai.use(chaiHttp);
import {connectToDatabase,db} from "./helpers/db_client";
import express from 'express';
import bodyParser from 'body-parser';

import {productsRouter} from './routes/todos';
const DB=db;


describe('Products API Request', () => {
  it('should GET /products',  function () {
    connectToDatabase()
    .then(() => {
        app.use("/products", productsRouter);

        app.listen(3000, () => {
            console.log(`Server started at http://localhost:${3000}`);
        });
        const res:any=  request(app).get('/products')
        // expect(res.status).to.equal(404);
        expect(res.status).to.equal(200);
        expect(res.body).not.to.be.empty;
        expect(res.body.data).not.to.be.empty;
        expect(res.body.data).to.be.an("array");
        expect(res.body.error).to.be.empty;
        
    })
    .catch((error: Error) => {
        console.error("Database connection failed", error);
        process.exit();
    });

  
});


it('should post /products',  function () {
  connectToDatabase()
    .then(() => {
        app.use("/products", productsRouter);

        app.listen(3000, () => {
            console.log(`Server started at http://localhost:${3000}`);
        });
        const res:any =  request(app).post('/products')
        .send({
          "title": "title",
          "price": "1",
          "description": "desc",
          "imageUrl": "url"
        });
        // expect(res.status).to.equal(404);
        expect(res.status).to.equal(201);
        expect(res.body).not.to.be.empty;
        expect(res.body.data).not.to.be.empty;
        expect(res.body.data).to.be.an("array");
        expect(res.body.error).to.be.empty;
        
    })
    .catch((error: Error) => {
        console.error("Database connection failed", error);
        process.exit();
    });
 
});  
})

