"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAllCustomers = void 0;
const CustomerRespositoryMemory_1 = require("../../repository/memory/CustomerRespositoryMemory");
const findAllCustomers = () => {
    const customer = new CustomerRespositoryMemory_1.CustomerRespositoryMemory();
    return customer.findAll();
};
exports.findAllCustomers = findAllCustomers;
