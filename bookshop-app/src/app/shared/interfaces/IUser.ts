import { IBook } from "./IBook";

export interface IUser{
    username:string;
    email:string;
    password:string;
    _id:string;
    books:IBook[]
}