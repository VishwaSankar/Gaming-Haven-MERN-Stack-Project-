import express from 'express';
import { verifyToken } from '../middleware/jwt.js';
import { createReview, deleteReview, getReviews,  } from '../controller/review.controller.js';

const router=express.Router();

router.post("/put",verifyToken,createReview)
router.get("/:id",getReviews)
router.delete("/:revId", verifyToken, deleteReview);
export default router;
