import mongoose from 'mongoose'

export const connectdb = async ()=>{
       await mongoose.connect('mongodb+srv://zola:zola@cluster0.8oaktx9.mongodb.net/boq-service');
       console.log("db connected");
} 