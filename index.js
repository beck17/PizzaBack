import express from 'express'
import cors from 'cors'
import {set, connect} from "mongoose";
import dotenv from 'dotenv'

import router from "./router/index.js";


dotenv.config()
set('strictQuery', true);

const app = express()

const PORT = process.env.PORT || 5000
const MONGO_URI = process.env.MONGO_URI

app.use(cors())
app.use(express.json())
app.use('/api', router)


const start = async () => {
    try {
        await connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
            .then(() => console.log("DB OK"))
            .catch(e => console.log(`DB ERROR  ${e}`))

        await app.listen(PORT, () => {
            console.log(`Server started on port: ${PORT}`)
        })
    } catch (e) {
        console.log(e);
    }
}

start()
