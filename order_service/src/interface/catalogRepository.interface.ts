import { Product } from "../models/product.model";

export interface ICatalogRepository {

    creaate(data: Product): Promise<Product>;

    update(data: Product): Promise<Product>;

    delete(id: any): Promise<void>;

    find(): Promise<Product[]>;

    findOne(data: any): Promise<Product>;

}