import React from "react";

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
    addedItems: [],
    total: 0,
};
const orderReducer = (state = initState, action) => {
    return state;
};
export default orderReducer;
