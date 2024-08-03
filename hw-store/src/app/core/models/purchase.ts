import { Product } from "./product";
import { ProductIncome } from "./product-income";

export interface Purchase {
    id: number;
    amount: number;
    unitPrice: number;
    description: string;
    subtotal: number;
    productIncome?: ProductIncome;
    product: Product;
}
