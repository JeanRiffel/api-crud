"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerRespositoryMemory = void 0;
class CustomerRespositoryMemory {
    constructor() {
        this.customers = [];
    }
    save(customer) {
        this.customers.push(customer);
        return true;
    }
    delete(customer) {
        this.customers.forEach((item, index) => {
            if (item === customer) {
                this.customers.splice(index, 1);
            }
        });
        return true;
    }
    update(customerId, fields, values) {
        this.customers.forEach((item) => {
            if (item.id === customerId) {
                item.firstName = values[0];
            }
        });
        return true;
    }
    findById(customerId) {
        let [customer] = this.customers.filter(customer => { return customer.id === customerId; });
        return customer;
    }
    findAll() {
        return this.customers;
    }
}
exports.CustomerRespositoryMemory = CustomerRespositoryMemory;
