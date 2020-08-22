const express = require('express');
const multer = require('multer');

const {handleErrors,requireAuth} =require ('./middleware');
const productRepo = require('../../repositories/products');
const productsNewTemplate = require ('../../views/admin/products/new');
const productIndexTemplate = require ('../../views/admin/products/index');
const productEditTemplate = require ('../../views/admin/products/edit');
const {requireTitle,requirePrice} = require ('./validators');


const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });
router.get('/ecomm/admin/products',requireAuth, async (req,res)=>{
    
    const products  = await productRepo.getAll();
    res.send(productIndexTemplate({products}));

    
});

router.get('/ecomm/admin/products/new',requireAuth,(req,res)=>{
    
    res.send(productsNewTemplate({}));
});

router.post('/ecomm/admin/products/new',requireAuth,
    upload.single('image'),     
    [requireTitle,requirePrice], 
    handleErrors(productsNewTemplate),
    async (req,res)=>{
        
        const image = req.file.buffer.toString('base64');
        const {title, price} = req.body;
        await productRepo.create({title,price,image});
        res.redirect('/ecomm/admin/products');
        //res.send('product created');
});

router.get('/ecomm/admin/products/:id/edit' ,requireAuth,async (req,res)=>{
    const product = await productRepo.getOne(req.params.id);
   
    if(!product){
        return res.send('Product not found');

    }

    res.send(productEditTemplate({product}));
});


router.post('/ecomm/admin/products/:id/delete' ,requireAuth,async (req,res)=>{
    const product = await productRepo.getOne(req.params.id);
   
    if(!product){
        return res.send('Product not found');
    }

    try{
        await productRepo.delete(req.params.id);
        }
        catch(err){
            return res.send('could not find item');
        }
    res.redirect('/ecomm/admin/products');
});


router.post('/ecomm/admin/products/:id/edit' 
,requireAuth
,upload.single('image'),     
[requireTitle,requirePrice], 
handleErrors(productEditTemplate, async (req)=>{
    const product = await productRepo.getOne(req.params.id);
    return {product};
})
,async (req,res)=>{
   const changes = req.body;
   if(req.file){
       changes.image = req.file.buffer.toString('base64');
   }
   try{
   await productRepo.update(req.params.id,changes);
   }
   catch(err){
       return res.send('could not find item');
   }
   res.redirect('/ecomm/admin/products');
});  

module.exports = router;