import {Router} from "express";

import {getUser, loginUser, registerUser} from "../controllers/UserController.js";
import {loginValidation, registerValidation} from "../validations/validation.js";
import handleErrors from "../utils/handleErrors.js";
import {checkAuth} from "../utils/checkAuth.js";
import {allProduct, newProduct, oneProduct} from "../controllers/ProductController.js";
import {newOrder, oneOrder} from "../controllers/OrderController.js";

const router = new Router()

//auth
router.post('/auth/login', loginValidation, handleErrors, loginUser)
router.post('/auth/register', registerValidation, handleErrors, registerUser)
router.get('/auth/me', checkAuth, getUser)

//product
router.post('/product', checkAuth, newProduct)
router.get('/product', allProduct)
router.get('/product/:id', oneProduct)

// order
router.post('/order',checkAuth, newOrder)
router.get('/order/:id',checkAuth, oneOrder)

export default router;