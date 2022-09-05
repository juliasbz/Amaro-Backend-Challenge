import { IProductDB, Product } from "../models/Product"
import { BaseDatabase } from "./BaseDatabase"

export class ProductDatabase extends BaseDatabase {
    public static TABLE_PRODUCTS = "Amaro_Products"

    public toProductDBModel = (product: Product): IProductDB => {
        const productDB: IProductDB = {
            id: product.getId(),
            name: product.getName(),
            tag: product.getTag()
        }

        return productDB
    }

    public createProduct = async (product: Product): Promise<void> => {
        const productDB = this.toProductDBModel(product)

        await BaseDatabase
            .connection(ProductDatabase.TABLE_PRODUCTS)
            .insert(productDB)
    }

    public getProducts = async (): Promise<IProductDB[]> => {
        const result: IProductDB[] = await BaseDatabase
            .connection(ProductDatabase.TABLE_PRODUCTS)
            .select()

        return result
    }

    public findProductById = async (productId: string): Promise<IProductDB | undefined> => {
        const result: IProductDB[] = await BaseDatabase
            .connection(ProductDatabase.TABLE_PRODUCTS)
            .select()
            .where({ id: productId })

        return result[0]
    }
}