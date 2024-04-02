import { Product } from "./product.model";

export interface CartItem{
    product?: Product;
    id:       string;
    quantity: number;
}