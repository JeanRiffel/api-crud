import { PersonInterface } from "./PersonInterface";

export  class Customer  implements  PersonInterface  {
    
    private _id: number = 0;
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    private _firstName: string="";
    public get firstName(): string {
        return this._firstName;
    }
    public set firstName(value: string) {
        this._firstName = value;
    }
    private _surname: string="";
    public get surname(): string {
        return this._surname;
    }
    public set surname(value: string) {
        this._surname = value;
    }
    private _age: number=0;
    public get age(): number {
        return this._age;
    }
    public set age(value: number) {
        this._age = value;
    }
    

}