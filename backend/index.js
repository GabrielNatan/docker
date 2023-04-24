const express = require('express')
const route = require('./src/routes')
const app = express()

app.use("/",route)

app.listen(3020,()=>{
    console.log("app running Maneiro",3020)
})