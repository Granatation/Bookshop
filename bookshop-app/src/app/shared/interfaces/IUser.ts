import { IBook } from "./IBook";

export interface IUser {
    username: string;
    email: string;
    password: string;
    accessToken: string;
    _id: string;
    books: IBook[]
}