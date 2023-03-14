import {body} from 'express-validator'

export const registerValidation = [
    body('name', 'Укажите имя не менее 2 символов').isLength({min: 2}),
    body('email', 'Укажите коректный Email').isEmail(),
    body('password', 'Пароль должен быть больше 5 символов').isLength({min: 5}),
    body('repeatPassword', 'Пароли не совпадают').custom((value, {req}) => {
        if (value !== req.body.password) {
            throw new Error('Пароли не совпадают');
        }
        return true;
    })
]

export const loginValidation = [
    body('password', 'Неверный Email или пароль').isLength({min:5})
]