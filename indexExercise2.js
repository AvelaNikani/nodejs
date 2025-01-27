import express from "express"

const PicknSteal = express()
const PORT = process.env.PORT || 3002

PicknSteal.get('/employees',(req,res)=>{
    res.json({
        message: "We have to get the employees to the path."
    })
})
PicknSteal.get('/managers',(req,res)=>{
    res.json({
        message: "We have to get the managers to the path."
    })
})
PicknSteal.post('/employees',(req,res)=>{
    res.json({
        message: "We need to post the employees on the management systems."
    })
})
PicknSteal.post('/managers',(req,res)=>{
    res.json({
        message: "We have to post on the managers group in order for work to be approved."
    })
})
PicknSteal.patch('/employees',(req,res)=>{
    res.json({
        message: "We need to update the employees information."
    })
})
PicknSteal.patch('/managers',(req,res)=>{
    res.json({
        message: "We have new management soon, and update of leadership of some sort."
    })
})
PicknSteal.delete('/employees',(req,res)=>{
    res.json({
        message: "We need to remove the employees from the system."
    })
})
PicknSteal.delete('/managers',(req,res)=>{
    res.json({
        message: "Management has been firing, employees are decreasing."
    })
})

PicknSteal.listen(PORT, ()=>{
    console.log('http://localhost:'+ PORT);   
})