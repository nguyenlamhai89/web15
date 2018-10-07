const express = require('express');
const apiWeb = express.Router();
const axios = require('axios')
apiWeb.get('/web15',(req,res)=>{
 
    const url = 'https://btvn-web15s.herokuapp.com/router/web15'

    axios.get(url).then((respones) =>{
        console.log(respones.data)
      res.send(respones.data)
    })

})
apiWeb.get('/web14',(req,res)=>{
 
    const url = 'https://btvn-web15s.herokuapp.com/router/web14'

    axios.get(url).then((respones) =>{
        console.log(respones.data)
      res.send(respones.data)
    })

})
apiWeb.get('/web13',(req,res)=>{
 
    const url = 'https://btvn-web15s.herokuapp.com/router/web13'

    axios.get(url).then((respones) =>{
        console.log(respones.data)
      res.send(respones.data)
    })

})
apiWeb.get('/web12',(req,res)=>{
 
    const url = 'https://btvn-web15s.herokuapp.com/router/web12'

    axios.get(url).then((respones) =>{
        console.log(respones.data)
      res.send(respones.data)
    })

})
apiWeb.get('/web11',(req,res)=>{
 
    const url = 'https://btvn-web15s.herokuapp.com/router/web11'

    axios.get(url).then((respones) =>{
        console.log(respones.data)
      res.send(respones.data)
    })

})
apiWeb.get('/web10',(req,res)=>{
 
    const url = 'https://btvn-web15s.herokuapp.com/router/web10'

    axios.get(url).then((respones) =>{
        console.log(respones.data)
      res.send(respones.data)
    })

})

module.exports = web;