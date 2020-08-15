import React, { useState } from "react";

const OrderSummary = props => {
    const [orderTotal, setOrderTotal] = useState(0);

    return (
        <div>
            <div>Order Total</div>
            <div>{orderTotal}</div>
            <btn>{props.checkout ? "Order Now" : "Checkout"}</btn>
        </div>
    );
};

export default OrderSummary;
