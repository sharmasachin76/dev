const express = require('express')
const app = express()
const {logger,dater} = require('./middleware')

// req -> middleware -> res

app.use('/api',logger,dater);
// app.use(dater);
app.get('/api', logger,dater,(req,res)=>{
    
    res.send('Home')
})

app.get('/about',(req,res)=>{
    res.send('About')
})


app.listen(5000,()=>{
    console.log('server ready and running on port 5000')
})