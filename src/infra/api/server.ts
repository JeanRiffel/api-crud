import express from "express";
import { Customer } from "../../domain/entity/Customer";
const server = express();



server.get('/',  (req, res)=>{

    const customer = new Customer();
    customer.id = 100;
    customer.firstName = 'John';
    customer.surname = 'Eliot';
    customer.age = 43;

    res.send( customer );


});

server.listen( 3000 , ()=>{ {`Server is running on Port 3000`}});
