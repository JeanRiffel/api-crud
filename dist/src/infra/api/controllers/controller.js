"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allCustomers = void 0;
const model_1 = require("../models/model");
const allCustomers = (req, res) => {
    const allCustomersSearched = (0, model_1.findAllCustomers)();
    res.send(allCustomersSearched);
};
exports.allCustomers = allCustomers;
