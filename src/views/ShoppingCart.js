import React, { useState } from "react";
import OrderSummary from "../components/OrderSummary";
import { connect } from "react-redux";
import { removeItem, addQuantity, subtractQuantity, setQuantity } from "../actions/orderActions";

const ShoppingCart = props => {
    const [cartItems, setCartItems] = useState();
    const [orderTotal, setOrderTotal] = useState(0);

    //to remove the item completely
    const handleRemove = id => {
        props.removeItem(id);
    };
    //to add the quantity
    const handleAddQuantity = id => {
        props.addQuantity(id);
    };
    //to substruct from the quantity
    const handleSubtractQuantity = id => {
        props.subtractQuantity(id);
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
                                <div> {item.name} </div>
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

const mapStateToProps = state => {
    return {
        cartItems: state.cartItems,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        removeItem: id => {
            dispatch(removeItem(id));
        },
        addQuantity: id => {
            dispatch(addQuantity(id));
        },
        subtractQuantity: id => {
            dispatch(subtractQuantity(id));
        },
        setQuantity: id => {
            dispatch(subtractQuantity(id));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
