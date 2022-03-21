const path = require('path')
const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const app = express()
const port = 8080

//use morgan
app.use(morgan('combined'))
//template engine
app.engine('handlebars',handlebars())
app.set('view engine','handlebars')
app.set('views', path.join(__dirname,'views'));
app.get('/home',(req,res) =>
    res.render('home')
)
app.listen(port,() => console.log(`Server is running at http://localhost:${port}`))
