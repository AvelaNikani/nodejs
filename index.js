import express from "express"

// initialised/created project 
const app = express()
const PORT = process.env.PORT || 3000
//return information
app.get('/', (req,res)=>{
    res.json({
        message : "This is the GET method"
    })
})
app.get('/api', (req,res)=>{
    res.json({
        message : "Hello there cookmaster!"
    })
})

app.post('/',(req,res)=>{
    res.json({
        message: "You added something new."
    })
})

// allows the project to be an API
app.listen(PORT, ()=> {
    console.log('http://localhost:'+PORT);
    console.log('another');
    
})
