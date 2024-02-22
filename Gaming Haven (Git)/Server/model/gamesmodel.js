import mongoose from 'mongoose';
const { Schema } = mongoose;

const AllGameSchema = new Schema({
      title: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      about: {
        type: String,
        required: true,
      },
      platform: {
        type: String,
        required: true,
      },
      price: {
        type: String,
        required: true,
        min: 0,
      },
      Rating: {
        type: String,
        required: true,
      },
      Dev: {
        type: String,
        required: true,
      },
      Genre: {
        type: String,
        required: true,
      },
      Releasedate: {
        type: String,
        required: true,
      },
      trend: {
        type: String,
      },
      sale: {
        type: String,
      },
      saleval: {
        type: String,
      },
      Trailer: {
        type: String,
        required: true,
      },
      img1: {
        type: String,
        required: true,
      },
      type: {
        type: String,
        required: true,
      },
      slideimg1: {
        type: String,
        required: true,
      },
      slidealt1: {
        type: String,
        required: true,
      },
      slideimg2: {
        type: String,
        required: true,
      },
      slidealt2: {
        type: String,
        required: true,
      },
      slideimg3: {
        type: String,
        required: true,
      },
      slidealt3: {
        type: String,
        required: true,
      },
      slideimg4: {
        type: String,
        required: true,
      },
      slidealt4: {
        type: String,
        required: true,
      },
      slideimg5: {
        type: String,
        required: true,
      },
      slidealt5: {
        type: String,
        required: true,
      },
      os_m: {
        type: String,
        required: true,
      },
      cpu_m: {
        type: String,
        required: true,
      },
      ram_m: {
        type: String,
        required: true,
      },
      gpu_m: {
        type: String,
        required: true,
      },
      storage_m: {
        type: String,
        required: true,
      },
      sound_m: {
        type: String,
        required: true,
      },
      os_r: {
        type: String,
        required: true,
      },
      cpu_r: {
        type: String,
        required: true,
      },
      ram_r: {
        type: String,
        required: true,
      },
      gpu_r: {
        type: String,
        required: true,
      },
      storage_r: {
        type: String,
        required: true,
      },
      sound_r: {
        type: String,
        required: true,
      },
      tagvid1: {
        type: String,
      },
      tagtext1: {
        type: String,
      },
      tagvid2: {
        type: String,
      },
      tagtext2: {
        type: String,
      },
      tagvid3: {
        type: String,
      },
      tagtext3: {
        type: String,
      },
    });
    export default mongoose.model("TotalGamedata", userSchema);