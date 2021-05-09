const  logger = (req,res,next)=>{    // express provides req,res,next
    console.log(req.method,req.url)
    //res.send('Testing')
    next()
}

const  dater = (req,res,next)=>{    // express provides req,res,next
    console.log(new Date().getFullYear())
    //res.send('Testing')
    next()
}

module.exports = {logger,dater}