"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Customer_1 = require("../../domain/entity/Customer");
const server = (0, express_1.default)();
server.get('/', (req, res) => {
    const customer = new Customer_1.Customer();
    customer.id = 100;
    customer.firstName = 'John';
    customer.surname = 'Eliot';
    customer.age = 43;
    res.send(customer);
});
server.listen(3000, () => { {
    `Server is running on Port 3000`;
} });
