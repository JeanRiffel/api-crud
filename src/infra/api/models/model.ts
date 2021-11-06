import { CustomerRespositoryMemory } from "../../repository/memory/CustomerRespositoryMemory"

export const findAllCustomers = ()=>{
    const customer = new CustomerRespositoryMemory();
    return customer.findAll();
}