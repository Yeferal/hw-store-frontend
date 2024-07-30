import { Category } from "./category";

export interface AssignmentCategory {
    product_id: number;
    measurement_id: number;
    category?: Category;
}
