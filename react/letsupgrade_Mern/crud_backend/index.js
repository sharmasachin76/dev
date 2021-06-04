 const express=require('express');
 const mongoose=require('mongoose');
 const cors=require("cors");

 const app=express();


//  connection to mongo db 

mongoose.connect("mongodb://localhost:27017/pms",{useUnifiedTopology:true,useNewUrlParser:true},()=>{
    console.log("connected to mongo db server");
})

// schema for products collection 

let productSchema=new mongoose.Schema({
        name:String,
        price:Number,
        quantity:Number,
        color:String,
        category:String,
        description:String,
        rating:Number
});

let productModel=new mongoose.model('products',productSchema);



//  use of middleware to covert unreadable data to readable data 
 app.use(express.json());
 app.use(cors());

// to fetch all products 
 app.get('/products',async (req,res)=>{
    let products=await productModel.find();
    res.send(products);
 })

//  to create a new product
 app.post("/products",(req,res)=>{
     let product=req.body;
     let proObj=new productModel(product);
     proObj.save();
    res.send({message:"Product Created",product:proObj});
 })

 
//  to delete a product
app.delete("/products/:id",async (req,res)=>{
    
    await productModel.deleteOne({"_id":req.params.id});
    res.send({message:"product deleted"});

});

// to update a product
 
app.put("/products/:id",async (req,res)=>{
    const id=req.params.id;
    const data=req.body;
    await productModel.updateOne({"_id":id},{$set:data});
    res.send({message:"product updated"});

})
    



//  creating and starting a server 

app.listen(8000,function(){
    console.log("server is running");
});
