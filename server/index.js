// import express into our file 

const express = require('express')


// new express aplication

const app = express()

//the port our server will run

const port = 3000

//Allow static assets in public folder

app.use(express.static('public'))

const root = require('path').join(__dirname,'../client','dist')
app.use(express.static(root))
// server route

app.get('/',(req,res)=>(
    res.sendFile("index.html",{ root })

))



app.get('/test',(req, res)=>{


    //send back a response to the client
    res.send('Server is operational')
})


// run our server 

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)

})