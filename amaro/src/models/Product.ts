export interface IProductDB {
    id: string,
    name: string,
    tag: string
}

export class Product {
    constructor(
        private id: string,
        private name: string,
        private tag: string
    ) {}

    public getId = () => {
        return this.id
    }

    public getName = () => {
        return this.name
    }

    public getTag = () => {
        return this.tag
    }

    public setId = (newId: string) => {
        this.id = newId
    }

    public setName = (newName: string) => {
        this.name = newName
    }

    public setTag = (newTag: string) => {
        this.name = newTag
    }
}

export interface ICreateProductInputDTO {
    token: string,
    name: string,
    tag: string
}

export interface ICreateProductOutputDTO {
    message: string,
    product: Product
}

export interface IGetProductsOutputDTO {
    products: Product[]
}