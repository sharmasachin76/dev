const express = require('express');
const router = express.Router();
const cartsRepo = require('../repositories/carts');
const productsRepo = require('../repositories/products');
const cartShowTemplate = require('../views/carts/show');
const cartCheckoutTemplate = require('../views/carts/checkout');

router.post('/ecomm/cart/products', async (req,res)=>{
    let  cart;
    if(!req.session.cartId){
        cart = await cartsRepo.create({items: []});
        req.session.cartId = cart.id;
    }
    else{
        cart=  await cartsRepo.getOne(req.session.cartId);
    }

    const existingItem = cart.items.find(item =>item.id === req.body.productId);
    if(existingItem){
            existingItem.quantity++;
    }
    else{
            cart.items.push({id:req.body.productId, quantity:1});
    }
    await cartsRepo.update(cart.id, {
            items: cart.items
    });
    return res.redirect('/ecomm/cart');
});

router.get('/ecomm/cart',async (req,res)=>{
    if(!req.session.cartId){
        return res.redirect('/ecomm');
    }
//console.log(req.session.cartId);
    const cart=  await cartsRepo.getOne(req.session.cartId);
   // console.log(cart);
    for(let item of cart.items){
        const product = await productsRepo.getOne(item.id);
        item.product = product;
    }
//console.log(cart.items);
    res.send(cartShowTemplate({items: cart.items}));
});

router.post('/ecomm/cart/products/delete',async (req,res)=>{
    const {itemId} = req.body;
    const cart=  await cartsRepo.getOne(req.session.cartId);
    const items = cart.items.filter(item=>item.id !== itemId);
    await cartsRepo.update(req.session.cartId, {items});
    return res.redirect('/ecomm/cart');
});
router.post('/ecomm/cart/checkout',async (req,res)=>{
    
    await cartsRepo.delete(req.session.cartId);
    req.session.cartId = null;
    return res.send(cartCheckoutTemplate());
});
module.exports = router;