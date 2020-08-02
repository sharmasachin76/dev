// to run npm run dev

const express = require('express');
const app = express();

app.get('/ecomm',(req,res)=> {
res.send("Return from Test Ecomm App");
});

app.listen(3000,()=>{

console.log("Server started....")
});