const express = require('express')
const app = express()
const port = 8080

app.get('/home',(req,res) =>
    res.end('Hello world')
)
app.listen(port,() => console.log(`Server is running at http://localhost:${port}`))