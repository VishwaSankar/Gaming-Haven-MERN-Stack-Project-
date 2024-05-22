import cartmodel from "../model/cartmodel.js";
import createError from "../utils/createError.js"


export const addtocart=(req,res,next)=>{
    const newcart=new cartmodel({
        userId:req.userId,
        ...req.body
    })
    try{
        const savedcart=newcart.save();
        res.status(201).json(savedcart)
    }catch(err){
        next(err)
    }
}

export const deletecart=async(req,res,next)=>{
    try{
        const cart = await cartmodel.findById(req.params.id)
        console.log(cart.userId,req.userId );
       if(cart.userId!==req.userId)return next(createError(403,"you can delete only your cart"))
        await cartmodel.findByIdAndDelete(req.params.id)
        res.status(200).send("Cart is deleted!!")
    }catch(err){
       next (err)
    }
}

export const getcart=async(req,res,next)=>{
    try{        
        const cart = await cartmodel.findById(req.params.id)
        if(!cart) next(createError(404,"Cart not found"))
        res.status(200).send(cart)

    }catch(err){
        next(err)
    }
}

export const getcarts=async(req,res,next)=>{
    const filter={
        userId:req.userId
    }
    try{
        const cart = await cartmodel.find(filter)
        if(!cart){
            next(createError(404,"No uploads"))
        }
        res.status(200).send(cart)
    }catch(err){
        next(err)
    }
}

