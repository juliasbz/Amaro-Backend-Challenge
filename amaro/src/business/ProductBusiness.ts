import { ProductDatabase } from "../database/ProductDatabase"
import { ForbiddenError } from "../errors/ForbiddenError"
import { RequestError } from "../errors/RequestError"
import { UnauthorizedError } from "../errors/UnauthorizedError"
import { ICreateProductInputDTO, ICreateProductOutputDTO, IGetProductsOutputDTO, IProductDB, Product } from "../models/Product"
import { USER_ROLES } from "../models/User"
import { Authenticator } from "../services/Authenticator"
import { IdGenerator } from "../services/IdGenerator"

export class ProductBusiness {
    constructor(
        private productDatabase: ProductDatabase,
        private idGenerator: IdGenerator,
        private authenticator: Authenticator,
    ) {}

    public createProduct = async (input: ICreateProductInputDTO): Promise<ICreateProductOutputDTO> => {
        const { name, tag, token } = input

        if (!token) {
            throw new UnauthorizedError("Token inválido ou faltando")
        }

        const payload = this.authenticator.getTokenPayload(token)

        if (payload.role !== USER_ROLES.ADMIN) {
            throw new ForbiddenError("Somente admins podem criar products")
        }

        if (typeof name !== "string") {
            throw new RequestError("Parâmetro 'name' inválido: deve ser uma string")
        }

        if (typeof tag !== "string") {
            throw new RequestError("Parâmetro 'tag' inválido: deve ser uma string")
        }

        if (name.length < 3) {
            throw new RequestError("Parâmetro 'name' inválido: mínimo de 3 caracteres")
        }

        const id = this.idGenerator.generate()

        const product = new Product(
            id,
            name,
            tag
        )

        await this.productDatabase.createProduct(product)

        const response: ICreateProductOutputDTO = {
            message: "Product criado com sucesso",
            product
        }

        return response
    }

    public getProducts = async (): Promise<IGetProductsOutputDTO> => {
        const productsDB: IProductDB[] = await this.productDatabase.getProducts()

        const products = productsDB.map(productDB => {
            return new Product(
                productDB.id,
                productDB.name,
                productDB.tag
            )
        })
        
        const response: IGetProductsOutputDTO = {
            products
        }

        return response
    }
}