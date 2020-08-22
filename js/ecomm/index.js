// to run -  npm run dev

const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const authRouter = require('./routes/admin/auth');
const adminProductRouter = require('./routes/admin/product');
const productRouter = require('./routes/products');
const cartsRouter = require ('./routes/carts');
const mysql = require('mysql');


const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieSession({
    keys :['asdfghjklyiyiuyiuyjj34hkkll']
}));
app.use(authRouter);
app.use(productRouter);
app.use(adminProductRouter);
app.use(cartsRouter);

app.listen(3000,()=>{

console.log("Server started and running....");
});