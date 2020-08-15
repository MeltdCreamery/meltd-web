import React, { useState } from "react";
import Card from "../components/Card";
import { connect } from "react-redux";

const iceCreamData = [
    { name: "vanilla", price: "3" },
    { name: "chocolate", price: "3" },
];

const Menu = props => {
    return (
        <div>
            <div>Menu</div>
            <div>
                {props.iceCreams.map(iceCream => {
                    return (
                        <div>
                            <Card title={iceCream.name} price={iceCream.price} img={iceCream.img} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        iceCreams: state.iceCreams,
    };
};

export default connect(mapStateToProps)(Menu);
