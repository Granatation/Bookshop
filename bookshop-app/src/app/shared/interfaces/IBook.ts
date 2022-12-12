import { IUser } from "./IUser";

export interface IBook {
    title: string;
    author: string;
    language: string;
    description: string;
    price: number;
    availability: number;
    imageUrl: string;
    postCreator: IUser;
    _id: string;
}