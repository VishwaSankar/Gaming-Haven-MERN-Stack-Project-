import createError from "../utils/createError.js"
import ordermodel from "../model/ordermodel.js";

export const addtoship=(req,res,next)=>{
    const neworder=new ordermodel({
        userId:req.userId,
        ...req.body
    })
    try{
        const savedorder=neworder.save();
        res.status(201).json(savedorder)
    }catch(err){
        next(err)
    }
}

// export const addtopayment=(req,res,next)=>{
//     const neworder=new ordermodel({
//         userId:req.userId,
//         ...req.body
//     })
//     try{
//         const savedorder=neworder.save();
//         res.status(201).json(savedorder)
//     }catch(err){
//         next(err)
//     }
// }

export const getorder=async(req,res,next)=>{
    const filter={
        userId:req.userId
    }
    try{
        const order = await ordermodel.find(filter)
        if(!order){
            next(createError(404,"No uploads"))
        }
        res.status(200).send(order)
    }catch(err){
        next(err)
    }
}

export const getsingleorder = async (req, res, next) => {
    const orderId = req.params.orderId; // Assuming the order ID is in the request parameters
  
    const filter = {
      userId: req.userId,
      _id: orderId, // Add the order ID to the filter
    };
  
    try {
      const order = await ordermodel.findOne(filter); // Use findOne instead of find to get a single order
      if (!order) {
        return res.status(404).json({ error: "Order not found" });
      }
      res.status(200).json(order);
    } catch (err) {
      next(err);
    }
  };

