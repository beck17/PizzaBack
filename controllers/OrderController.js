import {createOrder, getOrder} from "../services/OrderService.js";

export const newOrder = async (req, res) => {
    try {
        const order = await createOrder(req.body)

        res.status(201).json(order)
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Не удалось оформить заказ'
        })
    }
}

export const oneOrder = async (req,res) => {
    try {
        const {id} = req.params

        const order = await getOrder(id)

        res.json(order)
    }catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Не удалось получить заказ'
        })
    }
}