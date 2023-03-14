import jwt from 'jsonwebtoken'

export const createToken = async (id) => {
    return await jwt.sign({
        id
    }, process.env.JWT_KEY, {
        expiresIn: '2d'
    })
}