const ejs = require('ejs')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const bodyParser = require('body-parser')

app.use(bodyParser());
app.set('view engine', 'ejs')



app.get(['/'],(req,res)=>{
    res.render('index')
})

app.post(['/adminSend'], (req,res)=>{
    console.log(req.body)
    
    res.render('cv',{data:req.body})
})


app.listen(PORT,()=>{
    console.log(`App Listening on PORT:${PORT}`)
})