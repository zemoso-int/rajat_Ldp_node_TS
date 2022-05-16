import {connectToDatabase,db} from "../helpers/db_client";


export class rest{
    constructor(private DB=db.collection('products')){

    }
    get(){
        try {
        let products=    this.DB
            .find()
            .toArray()
        
        } catch (error: any) {
                        return {error:error.message};
        }
        
    }

    post(){

    }

    put(){

    }

    delete(){

    }

}