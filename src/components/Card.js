import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../actions/productActions";
import "../styles/card.css";

const Card = props => {
    const handleClick = () => {
        props.addToCart(props.id);
    };

    return (
        <div className="icecream-card">
            <img src={props.image} alt="icecream" />
            <div>{props.title}</div>
            <div>{props.price}</div>

            <div>
                <button onClick={handleClick}>Add to Cart</button>
            </div>
        </div>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        addToCart: id => {
            dispatch(addToCart(id));
        },
    };
};

export default connect(null, mapDispatchToProps)(Card);
