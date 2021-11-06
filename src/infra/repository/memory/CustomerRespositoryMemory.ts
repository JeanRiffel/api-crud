import { Customer } from "../../../domain/entity/Customer";
import { CustomerRepositoryInterface } from "../../../domain/repository/CustomerRepositoryInteface";

export class CustomerRespositoryMemory implements CustomerRepositoryInterface{
    
    customers : Customer [];
    
    constructor ( ){
        this.customers = [];
    }

    save(customer: Customer): boolean {
        this.customers.push(customer);
        return true;
    }
    delete(customer: Customer): boolean {
        this.customers.forEach( ( item , index )=>{
            if (  item === customer ){
                this.customers.splice(index, 1);
            }
        });
        return true;
    }
    
    update( customerId : number, fields : string [] , values : string [] ) : boolean{
        this.customers.forEach( ( item )=>{
            if ( item.id === customerId ){
                 item.firstName = values[0]; 
            }
        });
        return true;
    }

    findById( customerId : number ) : Customer{
        let [customer] = this.customers.filter( customer => { return customer.id === customerId; });
        return customer;
    }

    findAll() :Customer[]{
        return this.customers;
    }

}