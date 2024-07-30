import { AssignmentMeasure } from "./assignment-measure";
import { Brand } from "./brand";
import { Category } from "./category";
import { ProductImage } from "./product-image";

export interface Product {
    id: number;
    code: string;
    name: string;
    description: string;
    active: boolean;
    amount: number;
    creationDate: Date;
    creator: Creator;
    delivery: boolean;
    deliveryPrice: number;
    discount: number;
    discountType: string;
    formula: boolean;
    minAmount: number;
    previousPrice: number;
    purchasePrice: number;
    retailPrice: number;
    wholesalePrice: number;
    
    assignmentCategoryList: Array<Category>;
    assignmentMeasureList: Array<AssignmentMeasure>;
    brand?: Brand;
    images: Array<ProductImage>;

}

export interface Creator {
    id: number;
    username: string;
}