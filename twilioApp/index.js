const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({extended:false}))

app.post('/message', (req, res)=>{
    console.log(req.body)
})