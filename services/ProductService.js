import Product from "../models/Product.js";

export const createProduct = (data) => {
    const product = Product.create(data)

    return product
}

export const getAllProducts = () => {
    const products = Product.find()

    return products
}

export const getOneProduct = (id) => {
    const product = Product.findById(id)

    return product
}