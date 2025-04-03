const express = require('express')
const app = express()
//test .env
require('dotenv').config()
console.log ("... check env: ", process.env)

const port = process.env.PORT;
const path = require('path')

//config template
app.set('views', path.join(__dirname,'views') )
app.set('view engine', 'ejs')
//khai báo route
app.get('/', (req, res) => {
  res.send('Hello World! \n From Canh')
})
app.get('/abc', (req, res) => {
    res.send('Check abc')
  })
app.get('/hoicanh', (req, res) => {
    res.render('sample.ejs')
  }) 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})