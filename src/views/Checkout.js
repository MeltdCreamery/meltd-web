import React, { useState } from "react";
import OrderSummary from "../components/OrderSummary";

const Checkout = props => {
    return (
        <div>
            <OrderSummary checkout={true} />
        </div>
    );
};

export default Checkout;
