import React, { useState } from "react";
import OrderSummary from "../components/OrderSummary";
import { connect } from "react-redux";
import { removeItem, setQuantity } from "../actions/productActions";

const ShoppingCart = props => {
    const [cartItems, setCartItems] = useState();
    const [orderTotal, setOrderTotal] = useState(0);

    //to remove the item completely
    const handleRemove = id => {
        props.removeItem(id);
    };

    const handleSetQuantity = (id, quantity) => {
        props.setQuantity(id, quantity);
    };

    return (
        <div>
            <div>
                <div>Your Cart</div>

                {props.cartItems ? (
                    props.cartItems.map(item => {
                        return (
                            <div>
                                <div> Flavor: {item.flavor} </div>
                                <div> Price: {item.price} </div>
                                <div> Quantity: {item.quantity} </div>
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

const mapStateToProps = state => {
    return {
        cartItems: state.productReducer.cartItems,
        total: state.productReducer.total,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        removeItem: id => {
            dispatch(removeItem(id));
        },
        setQuantity: id => {
            dispatch(setQuantity(id));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
