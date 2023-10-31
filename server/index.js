import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
import Product from "./models/product.js";

const app = express();
app.use(express.json());

const connectMongoDB=async()=>{
 const connection = await mongoose.connect(process.env.MONGODB_URI);
 if(connection){
    console.log('connected to mongodb');
 }
}
connectMongoDB();


app.post("/product",async(req,res)=>{
 const {name ,price ,description}=req.body;  
    
    const product =new Product({
        name:name,
        price:price,
        description:description
    });


    const savedProduct= await product.save();
   
    res.json({
        success: true,
        data: savedProduct,
        message:'Product Created Successfully!'
    })
})

app.get('/products',async(req,res)=>{

    
    res.json({
        success:true,
        data:products,
        message:'Product Retrived Succesfully'
    })
})

app.get('/product/:id', async(req,res)=>{
    const {id}=req.params;
    const products=await Product.findOne({_id:id});
    res.json({
        success:true,
        data:products,
        message:"Product Retrived Succesfully"
    })

})

app.delete("/product/:id",async(req,res)=>{
    const {id}=req.params;

    await Product.deleteOne({_id:id});

    res.json({
      success:true,
      message:"Product deleted Succesfully"  
    })
});

app.put("/product/:id",async(req,res)=>{
    const{id}=req.params;
    const{name,price,description}=req.body;

    await Product.updateOne({_id: id},{$set:{
        name:name,
        price:price,
        description:description
    }});

    const updatedProduct=await Product.findOne({_id: id});
    res.json({
        success:true,
        data: updatedProduct,
        message:'Product Update Successfully'
    })
});

app.get("/test" ,async(req,res)=>{

    console.log(req.query);
    res.json({
        success:true
    })
})
const PORT=5000;

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})