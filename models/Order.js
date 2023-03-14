import {Schema,model} from "mongoose";

const OrderSchema = new Schema({
    customer: {type:String, required: true},
    address: {type:String, required: true},
    phone: {type: Number, required:true},
    products: [
        {
            title: {type:String,required: true},
            quantity:{type:Number,required: true},
            extras: []
        }
    ],
    total: {type:Number, required: true},
    status: {type:Number, default: 0}
})

export default model('Order', OrderSchema)