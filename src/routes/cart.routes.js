import { Router } from "express";
import { updateProduct, createCarts, deleteProduct, deleteAll, getCartprod, getCartU } from "../controllers/cart.controller.js";


const router = Router();

router.get('/', getCartprod)

router.get('/:id', getCartU)

router.post('/', createCarts)

router.put('/:cid/products/:pid', updateProduct)

router.delete('/:cid/products/:pid', deleteProduct)

router.delete('/:cid', deleteAll)

export default router