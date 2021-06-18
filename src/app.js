const express = require('express')
const app = express()
const path = require('path')

app.set('view engine','pug')
app.set('views', path.join(__dirname, 'views'))
//routes
//const routes = require('./routes/index.routes')
//app.use(routes)
app.use(require('./routes/index.routes'))
//static files
app.use(express.static(path.join(__dirname,'../public')))

app.use((req, res)=>{
    res.sendFile(path.join(__dirname,'../public/404.html'));
})

app.listen(3000, ()=>{
    console.log('servidor esperando conexiones')
})