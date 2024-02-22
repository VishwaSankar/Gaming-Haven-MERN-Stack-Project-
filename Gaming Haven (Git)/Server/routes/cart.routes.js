import express from 'express'
import   { addtocart, deletecart, getcart, getcarts }  from '../controller/cart.controller.js';

import { verifyToken } from '../middleware/jwt.js';


const router=express.Router();

router.post("/",verifyToken,addtocart)
router.delete("/:id",verifyToken,deletecart)
router.get("/single/:id",verifyToken,getcart)
router.get('/usercart',verifyToken,getcarts)

export default router;