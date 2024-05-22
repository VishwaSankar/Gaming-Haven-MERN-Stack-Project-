import jwt from "jsonwebtoken";
import User from "../model/usermodel.js"
import createError from "../utils/createError.js";
export const deleteUser=async (req,res,next)=>{
    const user= await User.findById(req.params.id)

        if(req.userId!==user._id.toString()){
            return next(createError(403,"You can delete only your account"))
        }
         await User.findByIdAndDelete(req.params.id)
         res.status(200).send("deleted")
    
}
export const getuser = async (req, res) => {
    
  
    try {
      const user = await User.findById(req.params.id);
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      // You may choose to omit sensitive information (e.g., password) from the response
      const { _id, username, email, img } = user;
  
      res.status(200).json({ _id, username, email, img });
    } catch (error) {
      console.error('Error fetching user:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };