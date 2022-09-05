import { ProductBusiness } from "../../src/business/ProductBusiness"
import { BaseError } from "../../src/errors/BaseError"
import { ICreateProductInputDTO } from "../../src/models/Product"
import { AuthenticatorMock } from "../mocks/services/AuthenticatorMock"
import { IdGeneratorMock } from "../mocks/services/IdGeneratorMock"
import { ProductDatabaseMock } from "../mocks/ProductDatabaseMock"

describe("Testando createProduct da ProductBusiness", () => {
    const productBusiness = new ProductBusiness(
        new ProductDatabaseMock(),
        new IdGeneratorMock(),
        new AuthenticatorMock()
    )

    test("Caso de sucesso", async () => {
        const input: ICreateProductInputDTO = {
            token: "token-astrodev",
            name: "Casaco amarelo",
            tag: "CASACOS"
        }

        const result = await productBusiness.createProduct(input)

        expect(result.message).toEqual("Product criado com sucesso")
        expect(result.product.getId()).toEqual("id-mock")
        expect(result.product.getName()).toEqual("Casaco amarelo")
        expect(result.product.getTag()).toEqual("CASACOS")
    })

    test("Erro ao tentar criar product com conta não-admin", async () => {
        expect.assertions(2)
        try {
            const input: ICreateProductInputDTO = {
                token: "token-mock",
                name: "Casaco amarelo",
                tag: "CASACOS"
            }
    
            await productBusiness.createProduct(input)
        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.message).toEqual("Somente admins podem criar products")
                expect(error.statusCode).toEqual(403)
            }
        }
    })
})