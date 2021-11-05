import { Customer } from "../../src/domain/entity/Customer";
import { CustomerRespositoryMemory } from "../../src/infra/repository/memory/CustomerRespositoryMemory";

const customer = new Customer();

beforeEach( ()=>{
    customer.id = 100;
    customer.firstName = 'john';
    customer.surname = 'silva';
    customer.age = 30;
})

test("Save Customer", ()=>{
    const customerRepository = new CustomerRespositoryMemory();
    const saved = customerRepository.save(customer);
    expect(saved).toBeTruthy();
});

test("Delete Customer", ()=>{
    const customerRepository = new CustomerRespositoryMemory();
    const deleted = customerRepository.delete(customer);
    expect(deleted).toBeTruthy();
})

test('Select by Id', ()=>{
    const customerRepository = new CustomerRespositoryMemory();
    customerRepository.save(customer);
    const customerSelectd = customerRepository.findById(100);
    expect(customerSelectd.id).toEqual(100);
})

test('Updating name', ()=>{
    const customerRepository = new CustomerRespositoryMemory();
    customerRepository.save(customer);
    const customerFound = customerRepository.findById(100);
    const updated = customerRepository.update(customerFound.id, ["firstName"], ["jair"] )
    expect(updated).toBeTruthy();
    const newCustomerFound = customerRepository.findById(100);
    expect(newCustomerFound.firstName).toEqual('jair');
})