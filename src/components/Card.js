import React from "react";

const Card = props => {
    return (
        <div>
            <img src={props.image} alt="icecream" />
            <div>{props.title}</div>
            <div>{props.price}</div>

            <div>
                <div>Add to Cart</div>
            </div>
        </div>
    );
};

export default Card;
