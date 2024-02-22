import mongoose from 'mongoose';
const { Schema } = mongoose;

const favSchema = new Schema({
    
  userId:{
    type:String,
    required:true
  },
  title: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
     
      platform: {
        type: String,
        required: false,
      },
      price: {
        type: String,
        required: false,
        
      },
      Rating: {
        type: String,
        required: false,
      },
      Dev: {
        type: String,
        required: false,
      },
      Genre: {
        type: String,
        required: false,
      },
      
      img1: {
        type: String,
        required: false,
      },
      
      slideimg1: {
        type: String,
        required: false,
      },
      
 
},{
    timestamps:true
});

export default mongoose.model("FavData", favSchema );