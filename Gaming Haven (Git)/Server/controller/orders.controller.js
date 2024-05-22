import createError from "../utils/createError.js";
import ordermodel from "../model/ordermodel.js";
import Stripe from "stripe";

// import dotenv from "dotenv";
// dotenv.config();
const stripe = new Stripe(
  "sk_test_51P9iR8SGv5CHQ94O0vG38ODrySJK7N9KCw0KadPiWqSkG6AFlvynt86G95izXV2BUrcDOXPLAuRm2uZczwfJ1nxR00YSLuNp9t"
);
export const addtoship = (req, res, next) => {
  const neworder = new ordermodel({
    userId: req.userId,
    ...req.body,
    payment_intent:"temp"
  });                                 
  try {
    
    const savedorder = neworder.save();
    res.status(201).json(savedorder);
  } catch (err) {
    next(err);
  }
};

export const getorder = async (req, res, next) => {
  const filter = {
    userId: req.userId,
  };
  try {
    const order = await ordermodel.find(filter);
    if (!order) {
      next(createError(404, "No uploads"));
    }
    res.status(200).send(order);
  } catch (err) {
    next(err);
  }
};

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

export const intent = async (req, res) => {
 



  const paymentIntent = await stripe.paymentIntents.create({
    amount: req.body.amount *100,
    currency: "inr",
    description: 'Gaming project test payment gateway',
    shipping: {
      name: 'Vishwa (test)',
      address: {
        line1: 'xxxx',
        postal_code: 'xxxx',
        city: 'India',
        state: 'CA',
        country: 'US',
      },
    },
    automatic_payment_methods: {
      enabled: true,
    }, 
  });
  console.log(paymentIntent.id);


 

res.status(200).send({
  clientSecret:paymentIntent.client_secret,
})
};


export const confirm = async (req, res, next) => {
  const orderId = req.params.orderId; // Assuming the order ID is in the request parameters

  const filter = {
    userId: req.userId,
    _id: orderId, // Add the order ID to the filter
  };


  try {
    const order = await ordermodel.findOneAndUpdate(
     
      filter,
      {
        $set: {
          payment_status: true,
          payment_intent: req.body.payment_intent

        },
      }
    );
    res.status(200).send("Order can been confirmed!!");
  } catch (err) {
    console.log(err);
  }
};


