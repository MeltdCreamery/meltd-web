import {
    GET_CATALOG,
    ADD_TO_CART,
    REMOVE_ITEM,
    ADD_QUANTITY,
    SUB_QUANTITY,
    SET_QUANTITY,
    ADD_SHIPPING,
} from "../actions/action-types/order-actions";

export const getCatalog = () => {
    return {
        type: GET_CATALOG,
    };
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
//subtract qt action
export const subtractQuantity = id => {
    return {
        type: SUB_QUANTITY,
        id,
    };
};
//add qt action
export const addQuantity = id => {
    return {
        type: ADD_QUANTITY,
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
