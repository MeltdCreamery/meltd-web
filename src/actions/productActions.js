import { axios } from "axios";

import {
    FETCH_PRODUCTS_BEGIN,
    FETCH_PRODUCTS_FAILURE,
    FETCH_PRODUCTS_SUCCESS,
} from "../actions/action-types/product-actions";

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

    axios
        .get("${process.env.API_URL}/icecreams/")
        .then(response => {
            console.log("response", response);
            return dispatch({
                type: FETCH_PRODUCTS_SUCCESS,
                payload: response.data,
            });
        })
        .catch(err => {
            dispatch(productError(err, "getIcecream"));
        });
};
