import favmodel from "../model/favmodel.js";
import createError from "../utils/createError.js"


export const addtofav=(req,res,next)=>{
    const newfav=new favmodel({
        userId:req.userId,
        ...req.body
    })
    try{
        const savedfav=newfav.save();
        res.status(201).json(savedfav)
    }catch(err){
        next(err)
    }
}

export const deletefav=async(req,res,next)=>{
    try{
        const fav = await favmodel.findById(req.params.id)
        console.log(fav.userId,req.userId );
       if(fav.userId!==req.userId)return next(createError(403,"you can delete only your fav "))
        await favmodel.findByIdAndDelete(req.params.id)
        res.status(200).send("fav is deleted!!")
    }catch(err){
       next (err)
    }
}

// export const getcart=async(req,res,next)=>{
//     try{        
//         const cart = await cartmodel.findById(req.params.id)
//         if(!cart) next(createError(404,"Cart not found"))
//         res.status(200).send(cart)

//     }catch(err){
//         next(err)
//     }
// }

export const getfavs=async(req,res,next)=>{
    const filter={
        userId:req.userId
    }
    try{
        const fav = await favmodel.find(filter)
        if(!fav){
            next(createError(404,"No uploads"))
        }
        res.status(200).send(fav)
    }catch(err){
        next(err)
    }
}
