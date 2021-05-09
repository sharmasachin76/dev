const express = require('express')
const {products} = require('./data')
const app = express()

app.get('/',(req,res)=>{
    //res.json(products);
    res.send('<h1>HOME PAGE</h1><a href="/api/products"> Products</a>')
})

app.get('/api/products',(req,res)=>{
    
    const modProducts = products.map((product)=>{
        const{id,name,image}= product
        return {id,name,image}
    })
    res.json(modProducts);
})

app.get('/api/query',(req,res)=>{
    const {search,limit} = req.query // looking for these key value parameter
    let sortedProducts = [...products] // assigning sorted products as products
    console.log(search)
    console.log(limit)
    if(search){
        sortedProducts = products.filter((product)=>{
            return product.name.startsWith(search)
        })
    }
    if(limit){
        sortedProducts = sortedProducts.slice(0,Number(limit))
    }
    if(sortedProducts.length <1){
       return res.status(200).send('No result')    
    }
    res.status(200).json(sortedProducts)
})

app.get('/api/product/:id',(req,res)=>{
    //console.log(req.params)
    const singleProduct = products.find(product=>product.id===parseInt(req.params.id))
    if(!singleProduct){
        res.status(404).send('Product doesnt exist')
    }
    res.json(singleProduct);
  })



app.listen(5000,()=>{
    console.log('server ready on 5000')
})