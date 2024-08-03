import { Account } from "./account";
import { Purchase } from "./purchase";
import { Supplier } from "./supplier";

export interface ProductIncome {
    id: number;
    date: Date;
    total: number;
    supplier?: Supplier;
    remitter: Account;
    purchases?: Purchase;
}
