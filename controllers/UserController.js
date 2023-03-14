import {getMe, login, register} from "../services/UserService.js";

export const registerUser = async (req, res) => {
    try {
        const {name, email, password, isAdmin} = req.body

        const user = await register(name, email, password, isAdmin)

        res.status(201).json(user)
    } catch (e) {
        console.log(e);
        res.status(400).json(e)
    }
}

export const loginUser = async (req, res) => {
    try {
        const {email, password} = req.body

        const user = await login(email, password)

        res.status(200).json(user)
    } catch (e) {
        console.log(e);
        res.status(400).json(e)
    }
}

export const getUser = async (req,res) => {
    try {
        const user = await getMe(req.userId)

        res.json(user)
    }catch (e) {
        console.log(e);
        res.status(400).json(e)
    }
}