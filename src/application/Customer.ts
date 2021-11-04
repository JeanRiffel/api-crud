import { PersonAbstract } from "../domain/PersonAbstract";

export  class Customer implements PersonAbstract{
    
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