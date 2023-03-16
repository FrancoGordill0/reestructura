import ManagerMongoDb from "../dao/ManagerMongoDb.js";

const cartManager = new ManagerMongoDb.CartManager();

export const getCartprod = async (req, res) => {
    try{
        const cart = await cartManager.getCart()
        res.send(cart)
    }
    catch (err){
        res.status(500).send(err.message)
    }
}

export const getCartU = async (req, res) => {
    const {id} = req.params;
    try{
        const cart = await cartManager.getCartUser(id)
        res.send(cart)
    }
    catch (err){
        res.status(500).send(err.message)
    }
}

export const createCarts = async (req, res) => {
    try{
        const response = await cartManager.createCart([])
        res.send(response)
    }
    catch (err){
        res.status(500).send(err.message)
    }
}

export const updateProduct = async (req, res) => {
    const {cid} = req.params;
    const {pid} = req.params;
    let {quantity} = req.body
    try {
        const response = await cartManager.addProductToCart(cid, pid, quantity);
        res.send(response);
      } catch (err) {
        res.status(500).send(err.message);
      }
}

export const deleteProduct = async (req, res) => {
    const {cid} = req.params;
    const {pid} = req.params;

    try {
        const response = await cartManager.removeProductFromCart(cid, pid);
        res.send({
            message: 'Product deleted successfully',
            id: pid
        })
      } catch (err) {
        res.status(500).send(err.message);
      }
}

export const deleteAll = async (req,res)=>{
    const {cid} = req.params;
    try {
        const response = await cartManager.deleteAllProductCart(cid);
        res.send({
            message: 'Cart deleted successfully',
            id: cid
        })
    }
    catch (err) {
        req.status(500).send(err.message)
    }
}
