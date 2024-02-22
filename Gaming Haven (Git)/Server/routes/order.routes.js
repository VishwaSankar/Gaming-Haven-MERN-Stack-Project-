import express from 'express'
import { verifyToken } from '../middleware/jwt.js';
import { addtoship, getorder, getsingleorder } from '../controller/orders.controller.js';


const router=express.Router();

router.post("/neworder",verifyToken,addtoship)
// router.post("/",verifyToken,addtopayment)
router.get('/userorder',verifyToken,getorder)
router.get('/userorderone/:orderId',verifyToken,getsingleorder)


export default router;