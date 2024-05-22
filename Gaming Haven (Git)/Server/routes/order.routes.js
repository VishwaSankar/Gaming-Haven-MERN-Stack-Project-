import express from 'express'
import { verifyToken } from '../middleware/jwt.js';
import { addtoship, confirm, getorder, getsingleorder,intent} from '../controller/orders.controller.js';


const router=express.Router();

router.post("/neworder",verifyToken,addtoship)
router.get('/userorder',verifyToken,getorder)
router.get('/userorderone/:orderId',verifyToken,getsingleorder)
router.post('/create-payment-intent',verifyToken,intent)
router.put('/confirm/:orderId',verifyToken,confirm)

export default router;