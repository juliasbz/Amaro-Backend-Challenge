import {ProductBusiness } from "../../src/business/ProductBusiness"
import { AuthenticatorMock } from "../mocks/services/AuthenticatorMock"
import { IdGeneratorMock } from "../mocks/services/IdGeneratorMock"
import { ProductDatabaseMock } from "../mocks/ProductDatabaseMock"

describe("Testando getProductss da ProductBusiness", () => {
    const productBusiness = new ProductBusiness(
        new ProductDatabaseMock(),
        new IdGeneratorMock(),
        new AuthenticatorMock()
    )

    test("Caso de sucesso", async () => {
        const result = await productBusiness.getProducts()

        expect(result.products.length).toEqual(2)
        expect(result.products[0].getId()).toEqual("201")
        expect(result.products[0].getName()).toEqual("Casaco amarelo")
        expect(result.products[0].getTag()).toEqual("CASACOS")
    })
})