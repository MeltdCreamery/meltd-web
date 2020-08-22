import React, { useState } from "react";
import { connect } from "react-redux";

const OrderSummary = props => {
    return (
        <div>
            <div>Order Total</div>
            <div>{props.total}</div>
            <btn>{props.checkout ? "Order Now" : "Checkout"}</btn>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        total: state.productReducer.total,
    };
};

export default connect(mapStateToProps)(OrderSummary);
