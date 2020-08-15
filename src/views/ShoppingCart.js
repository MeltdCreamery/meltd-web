import React, { useState } from "react";
import OrderSummary from "../components/OrderSummary";

const ShoppingCart = props => {
    const [cartItems, setCartItems] = useState();
    const [orderTotal, setOrderTotal] = useState(0);

    return (
        <div>
            <div>
                <div>Your Cart</div>

                {cartItems ? (
                    cartItems.map(item => {
                        return (
                            <div>
                                <div> {item.title} </div>
                                <div> {item.price} </div>
                                <div> {item.amount} </div>
                            </div>
                        );
                    })
                ) : (
                    <div>Your cart is empty!</div>
                )}
            </div>
            <OrderSummary checkout={false} />
        </div>
    );
};

export default ShoppingCart;
