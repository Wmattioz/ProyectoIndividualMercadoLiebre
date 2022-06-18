const path = require('path');
const express = require('express');
const server = express();
const port = process.env.PORT || 3000;

server.listen(port,()=> console.log('Servidor corriendo en http://localhost:${port}'));

const public=path.resolve(__dirname,'../public')
server.use(express.static(public)); 

server.get('/', (req, res) => {
    return res.sendFile(path.resolve(__dirname, 'views/home.html'))
})
server.get('/register', (req, res) => {
    return res.sendFile(path.resolve(__dirname, 'views/register.html'))
})
server.get('/login', (req, res) => {
    return res.sendFile(path.resolve(__dirname, 'views/login.html'))
})
