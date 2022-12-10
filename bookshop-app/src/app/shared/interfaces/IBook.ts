import { IUser } from "./IUser";

export interface IBook {
    title: string;
    author: string;
    publisher: string;
    price: number;
    imageUrl: string;
    description: string;
    postCreator: IUser;
}