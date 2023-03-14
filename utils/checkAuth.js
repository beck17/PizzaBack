import jwt from "jsonwebtoken";

export const checkAuth = async (req, res, next) => {
    const token = (req.headers.authorization || '').replace(/Bearer\s?/, '')
    if (token) {
        try {
            const decoded = await jwt.verify(token,process.env.JWT_KEY)
            req.userId = decoded.id
            next()
        } catch (e) {
            return res.status(403).json({
                message: 'Не удалось получить доступ'
            })
        }
    } else {
        return res.status(403).json({
            message: 'Нет доступа'
        })
    }
}
