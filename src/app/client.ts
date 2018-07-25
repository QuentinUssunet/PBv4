import { Compte } from "./compte";

export class Client {

    id: number;
    firstName: string;
    lastName: string;
    address: string;
    comptes: Array<Compte>;

}