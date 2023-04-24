const { Router } = require("express")
const db = require("./db")
const router = Router()
console.log("route ",router)

router.get('/routes',(req,res)=>{
    db()
    res.json({message:'Aqui foi'})
})

module.exports = router