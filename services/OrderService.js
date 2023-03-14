import Order from "../models/Order.js";

export const createOrder = (data) => {
    const order = Order.create(data)

    return order
}

export const getOrder = (id) => {
    const order = Order.findById(id)

    return order
}