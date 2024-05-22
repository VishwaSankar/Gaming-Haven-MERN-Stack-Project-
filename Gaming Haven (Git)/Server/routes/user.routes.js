import express from 'express'
import { deleteUser, getuser } from '../controller/user.controller.js';
import { verifyToken } from '../middleware/jwt.js';
//import { verify } from 'jsonwebtoken';
const router=express.Router();

router.get("/:id", verifyToken, getuser);
router.delete("/:id",verifyToken,deleteUser )

export default router;