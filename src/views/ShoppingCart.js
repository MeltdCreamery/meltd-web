import React, { useState } from "react";
import { Link } from "react-router-dom";
import RectangularButton from "../components/RectangularButton";
import { connect } from "react-redux";
import { removeItem, setQuantity } from "../actions/productActions";
import { formatCurrency } from "../utils/CurrencyFormatter";
import CartRow from "../components/CartRow";

import "../styles/shoppingCart.css";

const ShoppingCart = props => {
    //to remove the item completely

    const handleCheckout = () => {};

    return (
        <div className="shopping-cart">
            <h2>SHOPPING CART</h2>

            {props.cartItems && props.cartItems.length > 0 ? (
                <div>
                    <div className="cart-items-table-header">
                        <div>ITEM</div>
                        <div>QTY.</div>
                        <div>PRICE</div>
                    </div>
                    <hr />
                    <div className="cart-items-table">
                        {props.cartItems.map(item => {
                            return (
                                <>
                                    <CartRow item={item} />
                                    <hr />
                                </>
                            );
                        })}
                    </div>
                    <div className="cart-order-summary">
                        <div className="cart=subtotal">Subtotal: {formatCurrency(props.total)}</div>
                        <RectangularButton
                            text="CHECKOUT"
                            width="130px"
                            height="50px"
                            backgroundColor="black"
                            fontColor="white"
                            onClick={handleCheckout}
                        />
                    </div>
                </div>
            ) : (
                <div className="shopping-cart-empty">
                    <div>You have nothing in your shopping cart. Continue shopping</div>
                    <Link to="/shop">
                        <RectangularButton
                            text="SHOP"
                            width="130px"
                            height="50px"
                            backgroundColor="black"
                            fontColor="white"
                        />
                    </Link>
                </div>
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
