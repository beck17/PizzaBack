import {Schema, model} from "mongoose";

const ProductSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    img:{
        type: String,
        required: true,
    },
    type:{
        type: String,
        required: true,
    },
    desc:{
        type:String,
    },
    prices:[
        {
            price:{type: Number, required: true},
            weight: {type: Number, required: true},
            size:{type:Number}
        }
    ],
    foodValues: {
            calories:{type: Number, required: true},
            proteins:{type: Number, required: true},
            fats: {type: Number, required: true},
            carbohydrates:{type: Number, required: true}
        },
    extraOptions:[
        {
            text: String,
            price: Number
        }
    ],
})

export default model('Product', ProductSchema)