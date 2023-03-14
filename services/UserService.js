import bcrypt from 'bcrypt'

import {createToken} from "./TokenService.js";
import User from "../models/User.js";

export const register = async (name, email, password, isAdmin) => {
    const passwordHash = await bcrypt.hash(password, 3)
    const userDoc = new User({
        name, email, password: passwordHash, isAdmin
    })
    const user = await userDoc.save()

    const token = await createToken(user._id)

    return {user, token}

}

export const login = async (email, password) => {
    const user = await User.findOne({email})
    if (!user) {
        throw `Неверный логин или пароль`
    }

    const isValidPassword = await bcrypt.compare(password, user.password)
    if (!isValidPassword) {
        throw `Неверный логин или пароль`
    }

    const token = await createToken(user._id)

    return {user, token}
}

export const getMe = async (userId) => {
    try {
        const user = await User.findById(userId)

        if (!user) {
            throw 'Такого пользователя не существует'
        }

        return user
    } catch (e) {
        throw new Error('Не удалось получить пользователя')
    }
}