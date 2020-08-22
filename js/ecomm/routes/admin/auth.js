
const express = require('express');
const {handleErrors} =require ('./middleware');
const userRepo = require('../../repositories/users');

const router = express.Router();
const signupTemplate = require('../../views/admin/auth/signup');
const signinTemplate = require('../../views/admin/auth/signin');
const dbConnection = require ('../../repositories/db');
const {requireEmail,
        requirePassword,
        requireEmailExists, 
        requireValidPasswordForUser} = require ('./validators');
const { response } = require('express');


router.get('/ecomm/signup',(req,res)=> {
    res.send(signupTemplate({req}));
});

router.get('/ecomm/signin',(req,res)=>{
    res.send(signinTemplate({req}));   
});

router.get('/ecomm/signout',(req,res)=>{
    req.session = null;
    res.send("You are logged out");
});


router.post('/ecomm/signup', 
    [ requireEmail, requirePassword ],
    handleErrors(signupTemplate),
    async (req,res)=> {   
    const newUser = await userRepo.create(req.body);
    req.session.userId = newUser.id;
    //return res.send(`Account created...your id is ${req.session.userId}`);
    res.redirect('/ecomm/admin/products');
});

router.post('/ecomm/signin',
[ requireEmailExists, requireValidPasswordForUser ],
handleErrors(signinTemplate),
async (req,res)=> { 
    const existingUser = await userRepo.getOneBy({email : req.body.email});
    req.session.userId = existingUser.id;
    //return res.send(`Welcone to Ecomm your id is ${req.session.userId}`);
    res.redirect('/ecomm/admin/products');              
});

router.get('/ecomm/contacts',
async (req,res)=> { 
 
 //res.send('in process');
try{
const response = await new Promise((resolve, reject)=>{

        const query = "select * from contact";
        dbConnection.query(query, (err, results)=>{
            if(err) reject(new Error(err.message));
            resolve(results);
        });

    });

    //return response;
    res.send(response);

}
catch(err){
    console.log(err);
}
 /* running code
    await dbConnection.query('select * from contact',
    (err, rows,fields) => {
        if(!err){
            res.send(rows);
        }
        else{
            console.log(err);
        }
    });   
 */                
});


module.exports = router;

/*
const bodyParser =(req,res,next)=>{
    if(req.method==="POST"){
        req.on('data',data=>{
            const parsed = data.toString('utf8').split('&');
            const formData = {};  
            for (let pair of parsed){
                const[key,value]= pair.split('=');
                formData[key] = value;
            }
           // console.log(formData);
        req.body = formData;
        next();
        });
    }
    else{
        next();
    }
};
//router.post('/ecomm',bodyParser.urlencoded({extended:true}),(req,res)=> {

*/
