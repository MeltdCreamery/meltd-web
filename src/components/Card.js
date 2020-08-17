import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../actions/orderActions";

const Card = props => {
    const handleClick = () => {
        props.addToCart(props.id);
    };

    return (
        <div>
            <img src={props.image} alt="icecream" />
            <div>{props.title}</div>
            <div>{props.price}</div>

            <div>
                <btn onClick={handleClick}>Add to Cart</btn>
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
