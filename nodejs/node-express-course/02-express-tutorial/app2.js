const express = require('express')
const path = require('path')
const app = express()

app.use(express.static('./public'))

// app.get('/',(req,res)=>{
//     res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
// })


app.get('/about',(req,res)=>{
    res.send('About page')
})


app.all('*',(req,res)=>{
    res.status(404).send('Error Page. resource not found')
})

app.listen(5000,()=>{
    console.log('server running on 5000')
})