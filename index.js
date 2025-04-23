const express = require("express");
const multer  = require('multer');
require('./config');
const Product = require('./product');
const swaggerJsdoc =require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");



const app = express();
app.use(express.json());

const option ={
    definition:{
        openapi: '3.0.0',
        info: {
                    title: "My API with MongoDB",
                    version: "1.0.0",
                    description: "API for managing users with MongoDB and Express",
                  },
                  servers: [
                            {
                              url: "http://localhost:5000/",
                            },
                          ],
    },
    apis: ["./index.js"], // You can also include other files like models or routes

}
const swaggerSpec = swaggerJsdoc(option);
   app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));



app.post("/create", async (req,res)=>{
    let data = new Product(req.body);
    const result= await data.save()
  console.log(req.body)
    res.send(result);
    
});

app.get("/list",async (req,res)=>{
    let  data = await Product.find();
    res.send(data);

})

app.delete("/delete/:_id",async (req, res)=>{
    let  data = await Product.deleteOne(req.params);
     res.send(data);
    })

app.put("/update/:_id",async (req, res)=>{
let  data = await Product.updateOne(
    req.params,
  
    {
        $set:req.body
    }
);
 res.send(data);
})




//SIngle Search

app.get("/search/:key",async (req,res)=>{
    let data= await Product.find({
        "$or":[
            {"name":{$regex:req.params.key}}
        ]
    })

})


// multiple search 
app.get("/search/:key",async (req,res)=>{
    let data= await Product.find({
        "$or":[
            {"name":{$regex:req.params.key}},
            {"email":{$regex:req.params.key}},
            {"mobile":{$regex:req.params.key}}
            
        ]
    })

})


//file Uploade
const upload = multer({
    storage:multer.diskStorage({
        destination: function(req, file,cb){
            cb(null,"uploads");
        },
        filename:function(req,file,cb){
         //   const ext = path.extname(file.originalname);
            cb(null, file.fieldname + "-"+ Date.now() + ".jpg")

        }
    })
}).single("user_file");

app.post("/upload",upload, (req, res)=>{
    res.send("file Uploade 3");
})

//os Module






app.listen(5000);