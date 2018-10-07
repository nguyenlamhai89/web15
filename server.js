const express = require('express');
const server = express();
const Router = require('./hw/web')


server.get('/', (req, res) => {
res.sendfile('index.html')
})
server.use('/router', Router)

server.listen(8902, (err) => {
    if (err) console.err(err)
    else console.log('Server is listening at port 8902!')
})

