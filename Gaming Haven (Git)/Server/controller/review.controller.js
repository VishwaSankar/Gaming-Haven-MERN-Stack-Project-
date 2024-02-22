import createError from "../utils/createError.js"
import Review from "../model/reviewmodel.js"
export const createReview=async(req,res,next)=>{
    if(req.isSeller) return next(createError(403,"Sellers cannot set reviews"))

    const newReview=new Review
    ({
        userId:req.userId,
        gameId:req.body.gameId,
        desc:req.body.desc,
        star:req.body.star
    })
    try{
        const  review =await Review.findOne(
            {
            gameId:req.body.gameId,
            userId:req.body.userId
        })

        if(review)return next(createError(403,"You have already created a review for this game"))

        const savedReview=await newReview.save()
        res.status(201).send(savedReview);
    }catch(err){next(err)}
}


export const getReviews=async(req,res)=>{
    try{
        const reviews= await Review.find({gameId:req.body.gameId});
        res.status(201).send(reviews)
    }catch(err){next(err)}
}


export const deleteReview=async(req,res)=>{
    try{

    }catch(err){next(err)}
}