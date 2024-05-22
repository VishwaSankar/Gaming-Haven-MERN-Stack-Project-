import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import newRequest from "../../utils/newRequest";
import { useLocation, useParams } from "react-router-dom";
import { Checkoutform } from "./checkoutform";

const stripePromise = loadStripe(
  `pk_test_51P9iR8SGv5CHQ94OvIFtrEqVkdjXn3J6kAilGPyVJQt0g2E3pZ1nCzsDDkPe5oU2B92IAHosG7nqABIeLqCYV4UV00T7ZBHFso`
);

const Pay = (props) => {
  const location = useLocation();

  const [clientSecret, setClientSecret] = useState("");
  console.log(location.state.amount);
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await newRequest.post("/order/create-payment-intent", {
          amount: location.state.amount,
        });
        setClientSecret(res.data.clientSecret);
      } catch (err) {
        console.log(err);
      }
    };
    makeRequest();
  }, []);

  console.log("order id is " + location.state.orderId);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="pay" style={{ display: "flex", alignItems: "center" }}>
      {clientSecret && (
        <div
          style={{
            width: "30vw",
            minWidth: "500px",
            alignSelf: "center",
            boxShadow:
              "0px 0px 0px 0.5px rgba(50, 50, 93, 0.1), 0px 2px 5px 0px rgba(50, 50, 93, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.07)",
            borderRadius: "7px",
            padding: "40px",
          }}
        >
          <Elements options={options} stripe={stripePromise}>
            <Checkoutform orderId={location.state.orderId} />{" "}
          </Elements>
        </div>
      )}
    </div>
  );
};

export default Pay;
