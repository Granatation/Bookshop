import { IUser } from "./IUser";

export interface IBook {
    title: string;
    author: string;
    publisher: string;
    price: number;
    description: string;
    postCreator: IUser;
}