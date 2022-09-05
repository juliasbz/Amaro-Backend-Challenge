import { BaseDatabase } from "../../src/database/BaseDatabase"
import { IProductDB, Product } from "../../src/models/Product"

export class ProductDatabaseMock extends BaseDatabase {
    public static TABLE_PRODUCTS = "Amaro_Products"

    public toProductDBModel = (product: Product) => {
        const productDB: IProductDB = {
            id: product.getId(),
            name: product.getName(),
            tag: product.getTag()
        }

        return productDB
    }

    public createProduct = async (product: Product): Promise<void> => {

    }

    public getProducts = async (): Promise<IProductDB[]> => {
        return [
            {
                id: "201",
                name: "Casaco amarelo",
                tag: "CASACOS"
            },
            {
                id: "202",
                name: "Pijama minions",
                tag: "PIJAMAS"
            }
        ]
    }

    public findProductById = async (productId: string): Promise<IProductDB | undefined> => {
        switch(productId) {
            case "201":
                return {
                    id: "201",
                    name: "Casaco amarelo",
                    tag: "CASACOS"
                }
            default:
                return undefined
        }
    }
}