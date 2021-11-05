import { Customer } from "../entity/Customer";

export  interface CustomerRepositoryInterface {
    save( customer :  Customer  ) : boolean;
    delete( customer : Customer ) : boolean;
    update( customerId : number, fields : string [] , values : string [] ) : boolean;
    findById( customerId : number ) : Customer; 
}