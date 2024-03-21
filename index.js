// const express = require('express')
// const mongoose = require('mongoose')
// const cors = require('cors')
// const bodyParser = require('body-parser')


// const app = express()
// app.use(cors())
// app.use(express.json())


// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.get('/data',function(req, res){
//     data.find().then((item) => res.send((item)))
//   })

// app.post('/create',function(req, res){
//     data.create(req.body).then((item) => res.send((item)))
//   }) 

//   app.put('/update/:id',async(req,res)=>{
//     console.log(req.params.id);
//      console.log(req.body);
//    const amount = req.body.amount;
   
//   const userUpdate= await Data.findByIdAndUpdate(req.params.id,{amount:amount},{new:true,});
//     res.json({
//      data:userUpdate
// })
// })
// app.delete('/delete/:id',async(req,res)=>{
//     console.log(req.params.id);
//     const userDelete= await Data.findByIdAndDelete(req.params.id);
//     res.json({
//      data:userDelete
// })

// })

// app.listen(8080, () => {
//   console.log(`Example app listening on port 8080`)
// })

// mongoose.connect("mongodb+srv://SUBASH:Iphonepurple128@cluster0.q7ykm2w.mongodb.net/mca").then( () => console.log("MongoDB Connect"))

// // create a Schema 

// var newSchema = new mongoose.Schema({
//     id:Number,
//     name:String,
//     email:String,
//     password:String,
//     amount:Number
// })

// //model1

// let data = mongoose.model('mca',newSchema)

// // create a data

// // let data1 = new data(
// //     {
// //     id:2345,
// //     name:"Subash",
// //     email:'subash@gamil.com',
// //     password:'123',
// //     amount:33
// // })

// // data1.save()

const express = require('express');
const mongoose = require('mongoose');
const cors = require ('cors');
const bodyparser = require('body-parser')

const app =express();
app.use(cors())
app.use(express.json())

app.get('/',(req,res)=>{
    res.send("Hello World")
})

app.get('/data',(req,res)=>{
    Data.find().then((item)=>res.send(item))
})

app.post('/create',(req,res)=>{
    Data.create(req.body).then((item)=>res.send(item))
})
app.listen(8080,()=>{
  console.log(`server is running ${8080}`);
})

mongoose.connect("mongodb+srv://SUBASH:Iphonepurple128@cluster0.q7ykm2w.mongodb.net/mca")
.then(console.log("Mongodb Connected"))

var newSchema = new mongoose.Schema({
  id:Number,
  name:String,
  email:String,
  password:String,
  amount:Number
})

let Data = mongoose.model('mca',newSchema)
app.put('/update/:id',async(req,res)=>{
  console.log(req.params.id);
   console.log(req.body);
 const amount = req.body.amount;
 
const userUpdate= await Data.findByIdAndUpdate(req.params.id,{amount:amount},{new:true,});
  res.json({
   data:userUpdate
})
})
app.delete('/delete/:id',async(req,res)=>{
  console.log(req.params.id);
  const userDelete= await Data.findByIdAndDelete(req.params.id);
  res.json({
   data:userDelete
})
})