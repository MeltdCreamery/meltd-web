import React from "react";
import {
    GET_CATALOG,
    ADD_TO_CART,
    REMOVE_ITEM,
    ADD_QUANTITY,
    SUB_QUANTITY,
    SET_QUANTITY,
    ADD_SHIPPING,
} from "../actions/action-types/order-actions";

console.log("hi", process.env.REACT_APP_API_URL);

const initState = {
    iceCreams: [
        {
            id: 1,
            name: "Vanilla",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
            price: 110,
        },
        {
            id: 2,
            name: "Chocolate",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
            price: 80,
        },
        {
            id: 3,
            name: "Peach Pecan",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
            price: 120,
        },
        {
            id: 4,
            name: "White",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
            price: 260,
        },
        {
            id: 5,
            name: "Cropped-sho",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
            price: 160,
        },
        {
            id: 6,
            name: "Blues",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
            price: 90,
        },
    ],
    cartItems: [],
    total: 0,
};

const orderReducer = (state = initState, action) => {
    if (action.type === ADD_TO_CART) {
        let addedItem = state.iceCreams.find(iceCream => iceCream.id === action.id);
        //check if the action id exists in the addedItems
        let existing_item = state.cartItems.find(item => action.id === item.id);
        if (existing_item) {
            addedItem.quantity += 1;
            return {
                ...state,
                total: state.total + addedItem.price,
            };
        } else {
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.price;

            return {
                ...state,
                cartItems: [...state.cartItems, addedItem],
                total: newTotal,
            };
        }
    } else if (action.type === REMOVE_ITEM) {
        let itemToRemove = state.iceCreams.find(item => action.id === item.id);
        let newItems = state.cartItems.filter(item => action.id !== item.id);

        //calculating the total
        let newTotal = state.total - itemToRemove.price * itemToRemove.quantity;
        console.log("item to remove", itemToRemove);
        return {
            ...state,
            cartItems: newItems,
            total: newTotal,
        };
    } else if (action.type === SET_QUANTITY) {
        let itemToEdit = state.iceCreams.find(item => item.id === action.id);

        if (action.quantity === 0) {
            let newItems = state.cartItems.filter(item => action.id !== item.id);
            let newTotal = state.total - itemToEdit.price * itemToEdit.quantity;
            return {
                ...state,
                cartItems: newItems,
                total: newTotal,
            };
        } else {
            itemToEdit.quantity = action.quantity;
            let newTotal = state.total - itemToEdit.price * (action.quantity - itemToEdit.quantity);
            return {
                ...state,
                total: newTotal,
            };
        }
    } else {
        return state;
    }
};
export default orderReducer;
