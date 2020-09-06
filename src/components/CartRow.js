import React, { useState } from "react";
import { connect } from "react-redux";
import { removeItem, setQuantity } from "../actions/productActions";
import { formatCurrency } from "../utils/CurrencyFormatter";
import CloseIcon from "@material-ui/icons/Close";

import "../styles/shoppingCart.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const CartRow = props => {
    //to remove the item completely
    const handleRemove = () => {
        props.removeItem(props.item.id);
    };

    const onQuantityChange = (e, id) => {
        const re = /^[0-9\b]+$/;
        let qty = e.target.value;

        if (qty === "" || qty === null) {
            props.setQuantity(id, 0);
        }

        if (re.test(qty)) {
            props.setQuantity(id, qty);
        }
    };

    return (
        <div className="cart-items-row">
            <div className="cart-items-desc">
                <CloseIcon onClick={handleRemove} />
                <div>{props.item.flavor}</div>
            </div>
            <input
                className="quantity-box"
                value={props.item.quantity}
                onChange={e => onQuantityChange(e, props.item.id)}
            />
            <div> {formatCurrency(props.item.price)} </div>
        </div>
    );
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

export default connect(null, mapDispatchToProps)(CartRow);
