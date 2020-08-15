import React, { useState } from "react";
import OrderSummary from "../components/OrderSummary";

const Checkout = props => {
    const [cartItems, setCartItems] = useState();
    const [orderTotal, setOrderTotal] = useState(0);

    return (
        <div>
            <OrderSummary checkout={true} />
        </div>
    );
};

export default Checkout;
