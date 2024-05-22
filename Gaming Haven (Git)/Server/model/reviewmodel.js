import mongoose from 'mongoose';
const { Schema } = mongoose;

const reviewSchema = new Schema({
 gamename:{
    type:String,
    required:true,
 
 },
 userId:{
    type:String,
 required:true,
 },
 username:{
   type:String,
   required:true,
   
 },
 img:{
   type:String,
   required:true,
 },
 star:{
    type:Number,
    required:true,
    enum:[1,1.5,2,2.5,3,3.5,4,4.5,5]
 },
 desc:{
    type:String,
    required:true,
 },
 
 
},{
    timestamps:true
});

export default mongoose.model("Reviews", reviewSchema);