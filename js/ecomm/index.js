// to run -  npm run dev

const express = require('express');
const bodyParser = require('body-parser');
const userRepo = require('./repositories/users');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get('/ecomm',(req,res)=> {
res.send(`

<form method="POST">
<table align="center">
<tr><td><h3>Sign Up</h3</td></tr>
<tr><td></td></tr>
<tr><td></td></tr>
<tr><td></td></tr>
<tr><td></td></tr>
<tr><td><input type="text" name="email" placeholder="email"></td></tr>
<tr><td></td></tr>
<tr><td><input type="password" name="password" placeholder="password"></td></tr>
<tr><td></td></tr><tr><td></td></tr>
<tr><td><input type="submit"></td></tr>
</table>
</form>

`);
});
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
*/
//app.post('/ecomm',bodyParser.urlencoded({extended:true}),(req,res)=> {
app.post('/ecomm',async (req,res)=> {   
    console.log(req.body);
    const {email,passwprd} = req.body;
    
    const existingUser = await userRepo.getOneBy({email});
    if(existingUser){
        return res.send('Account already exists with given email id');
    }
    
    else{
        userRepo.create(req.body);
        return res.send("Account created...");
    }


    
    });

app.listen(3000,()=>{

console.log("Server started and running....")
});