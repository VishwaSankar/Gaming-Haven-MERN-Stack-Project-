import express from "express";
import mongoose from "mongoose";
import authRoute from "./routes/auth.routes.js"
import userRoute from "./routes/user.routes.js"
import orderroute from './routes/order.routes.js'
import cookieParser from "cookie-parser"
import cors from "cors"
import router from "./routes/cart.routes.js";
import favroute from "./routes/fav.routes.js"
import reviewroute from "./routes/review.routes.js"
import sessionMiddleware from "./middleware/session.js";
const app =express();
const connect= async ()=> {
  try{
    await mongoose
      .connect(
        "mongodb+srv://vishwaexpert7788:12345qwert@cluster001.vzfz843.mongodb.net/Gaminghaven"
      )
      .then((res) => console.log("Database Connected :-)"));
  } catch (err) {
    console.log(err);
  }
}
app.use(sessionMiddleware);
app.use(express.json())
app.use(cookieParser())
app.use(cors({origin:"http://localhost:3000",credentials:true}))
app.use("/auth",authRoute)
app.use("/users",userRoute)
app.use("/fav",favroute)
app.use("/cart",router)
app.use("/library",router)
app.use("/reviews",reviewroute)
app.use("/order",orderroute)

app.use((err,req,res,next)=>{
  const errorStatus=err.status || 500;
  const errorMessage=err.message || "something went wrong"

  return res.status(errorStatus).send(errorMessage);
})


app.listen(5000,()=>{
    connect()
    console.log("Backend Server is running");
})