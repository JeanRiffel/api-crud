"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
class Customer {
    constructor() {
        this._id = 0;
        this._firstName = "";
        this._surname = "";
        this._age = 0;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        this._firstName = value;
    }
    get surname() {
        return this._surname;
    }
    set surname(value) {
        this._surname = value;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        this._age = value;
    }
}
exports.Customer = Customer;
