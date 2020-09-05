import React, { useState } from "react";
import OrderSummary from "../components/OrderSummary";
import RectangularButton from "../components/RectangularButton";
import { connect } from "react-redux";
import { removeItem, setQuantity } from "../actions/productActions";

const ShoppingCart = props => {
    //to remove the item completely
    const handleRemove = id => {
        props.removeItem(id);
    };

    const handleSetQuantity = (id, quantity) => {
        props.setQuantity(id, quantity);
    };

    return (
        <div>
            <h2>SHOPPING CART</h2>

            {props.cartItems && props.cartItems.length > 0 ? (
                <div>
                    <div className="cart-items-table-header">
                        <div>Item</div>
                        <div>QTY</div>
                        <div>Price</div>
                    </div>
                    <hr />
                    <div className="cart-items-table">
                        {props.cartItems.map(item => {
                            return (
                                <div>
                                    <div> Flavor: {item.flavor} </div>
                                    <div> Price: {item.price} </div>
                                    <div> Quantity: {item.quantity} </div>
                                </div>
                            );
                        })}
                    </div>
                    <hr />
                    <div className="cart-order-summary">
                        <div>Subtotal: {props.total}</div>
                        <RectangularButton
                            text="CHECKOUT"
                            width="130px"
                            height="50px"
                            backgroundColor="black"
                            fontColor="white"
                        />
                    </div>
                </div>
            ) : (
                <div>You have nothing in your shopping cart. Continue shopping</div>
            )}
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
