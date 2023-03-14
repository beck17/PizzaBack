import {createProduct, getAllProducts, getOneProduct} from "../services/ProductService.js";

export const newProduct = async (req,res) => {
    try{
        const product = await createProduct(req.body)

        res.status(201).json(product)
    }catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Не удалось создать продукт'
        })
    }
}

export const allProduct = async (req,res) => {
    try{
        const products = await getAllProducts()

        res.json(products)
    }catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Не удалось получить все продукты'
        })
    }
}

export const oneProduct = async (req,res)=> {
    try{
        const {id} = req.params
        const product = await getOneProduct(id)

        res.json(product)
    }catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Не удалось получить продукт'
        })
    }
}