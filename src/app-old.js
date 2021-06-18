const http = require('http')
//req es request
//res es response
//cliente es un navegador
const server = http.createServer((req, res)=>{
 console.log('un cliente se conecto')
 res.end('conexion exitosa')
})

server.listen(3000, ()=>{
    console.log('servidor esperando conexiones')
})