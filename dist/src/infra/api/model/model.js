"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allCustomers = void 0;
const CustomerRespositoryMemory_1 = require("../../repository/memory/CustomerRespositoryMemory");
const allCustomers = () => {
    const customer = new CustomerRespositoryMemory_1.CustomerRespositoryMemory();
    return customer.findAll();
};
exports.allCustomers = allCustomers;
