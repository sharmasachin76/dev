const express = require('express')
const app = express()
const {people} = require('./data')

app.use(express.static('./methods-public'))
app.use(express.urlencoded({extended:false}))

app.get('/api/people',(req,res)=>{
    res.status(200).json({success:true,data:people})
})

app.post('/login',(req,res)=>{
    res.send('post')
})

app.listen(5000,()=>{
    console.log('server ready and running on port 5000')
})