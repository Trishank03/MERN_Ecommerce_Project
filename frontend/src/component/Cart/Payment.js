// import React from "react";
// import CheckCircleIcon from "@material-ui/icons/CheckCircle";
// import "./payment.css";
// import { Typography } from "@material-ui/core";
// import { Link } from "react-router-dom";

// const OrderSuccess = () => {
//   return (
//     <div className="orderSuccess">
//       <CheckCircleIcon />

//       <Typography>Your Order has been Placed successfully </Typography>
//       <Link to="/orders">View Orders</Link>
//     </div>
//   );
// };

// export default OrderSuccess;


import React, { Fragment, useEffect, useRef } from "react";
import CheckoutSteps from "../Cart/CheckoutSteps";
import { useSelector, useDispatch } from "react-redux";
import MetaData from "../layout/MetaData";
import { Typography } from "@material-ui/core";
import { useAlert } from "react-alert";
import { createOrder, clearErrors } from "../../actions/orderAction";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));

  const dispatch = useDispatch();
  const alert = useAlert();
  const payBtn = useRef(null);
  const navigate = useNavigate();

  const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);
  const { error } = useSelector((state) => state.newOrder);

  const order = {
    shippingInfo,
    orderItems: cartItems,
    itemsPrice: orderInfo.subtotal,
    taxPrice: orderInfo.tax,
    shippingPrice: orderInfo.shippingCharges,
    totalPrice: orderInfo.totalPrice,
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    payBtn.current.disabled = true;

    // Simulate payment completion
    order.paymentInfo = {
      id: Math.floor(Math.random() * 1000), // Generate a random payment ID
      status: "succeeded",
    };

    // Dispatch action to create order with updated payment status
    dispatch(createOrder(order));

    // Redirect to success page
    navigate("/success");
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, error,navigate, alert]);

  return (
    <Fragment>
      <MetaData title="Payment" />
      <CheckoutSteps activeStep={2} />
      <div className="paymentContainer">
        <form className="paymentForm" onSubmit={(e) => submitHandler(e)}>
          <Typography>Card Info</Typography>
          
          {/* Payment form inputs */}
          
          <input
            type="submit"
            value={`Pay - ₹${orderInfo && orderInfo.totalPrice}`}
            ref={payBtn}
            className="paymentFormBtn"
          />
        </form>
      </div>
    </Fragment>
  );
};

export default Payment;
