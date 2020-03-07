const path = require('path')
const express = require('express')
// const hbs = require('hbs')

// .. to go back one directory
const publicDirectoryPath=path.join(__dirname,'../public')

const app = express()

app.use(express.static(publicDirectoryPath))

app.get('',(req,res)=>{
    res.send('<h1>dsfsd<h1>')
})



app.listen(3000,()=>{
    console.log('server is up in port 3000')
})
