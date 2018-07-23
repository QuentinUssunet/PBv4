import { Compte } from "./compte";
import { Address } from "./address";

export class Client {

    id: number;
    firstName: string;
    lastName: string;
    address: Address;
    comptes: Array<Compte>;

}