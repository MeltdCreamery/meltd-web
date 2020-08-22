import axios from "axios";

import {
    ADD_TO_CART,
    REMOVE_ITEM,
    SET_QUANTITY,
    FETCH_PRODUCTS_BEGIN,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE,
} from "../actions/actionTypes";

const productError = (err, errSrc) => {
    return dispatch => {
        dispatch({
            type: FETCH_PRODUCTS_FAILURE,
            payload: "Error fetching icecreams",
        });
    };
};

export const fetchProducts = () => dispatch => {
    dispatch({
        type: FETCH_PRODUCTS_BEGIN,
    });

    console.log("URL", `${process.env.REACT_APP_API_URL}/icecreams/`);
    let config = {
        headers: { "Access-Control-Allow-Origin": "*" },
    };
    axios
        .get(`${process.env.REACT_APP_API_URL}/icecreams/`, config)
        .then(response => {
            console.log("response", response);
            return dispatch({
                type: FETCH_PRODUCTS_SUCCESS,
                payload: response.data,
            });
        })
        .catch(err => {
            console.log("error getting products", err);
            dispatch(productError(err, "getIcecream"));
        });
};

export const addToCart = id => {
    return {
        type: ADD_TO_CART,
        id,
    };
};

//remove item action
export const removeItem = id => {
    return {
        type: REMOVE_ITEM,
        id,
    };
};

export const setQuantity = (id, quantity) => {
    return {
        type: SET_QUANTITY,
        id,
        quantity,
    };
};
