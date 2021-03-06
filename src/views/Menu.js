import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import { connect } from "react-redux";
import { fetchProducts } from "../actions/productActions";
import "../styles/menu.css";

const Menu = props => {
    useEffect(() => {
        props.fetchProducts();
    }, []);

    return (
        <div>
            <h1>Shop</h1>
            <hr />
            <div className="ice-cream-menu">
                {props.iceCreams ? (
                    props.iceCreams.map(iceCream => {
                        return (
                            <div>
                                <Card
                                    id={iceCream.id}
                                    title={iceCream.flavor}
                                    price={iceCream.price}
                                    img={iceCream.img}
                                />
                            </div>
                        );
                    })
                ) : (
                    <div>Error getting ice creams</div>
                )}
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        iceCreams: state.productReducer.iceCreams,
    };
};

export default connect(mapStateToProps, { fetchProducts })(Menu);
