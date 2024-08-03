import { ProductIncome } from "./product-income";

export interface Supplier {
    id: number;
    name: string;
    address: string;
    tel1: string;
    tel2: string;
    incomeProducts?: Array<ProductIncome>;
}
