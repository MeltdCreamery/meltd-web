import {
    ADD_TO_CART,
    REMOVE_ITEM,
    SET_QUANTITY,
    FETCH_PRODUCTS_BEGIN,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE,
} from "../actions/actionTypes";

const initialState = {
    iceCreams: [],
    loading: false,
    error: null,
    cartItems: [],
    total: 0,
};

export default function productReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_PRODUCTS_BEGIN: {
            // Mark the state as "loading" so we can show a spinner or something
            // Also, reset any errors. We're starting fresh.
            return {
                ...state,
                loading: true,
                error: null,
            };
        }
        case FETCH_PRODUCTS_SUCCESS: {
            // All done: set loading "false".
            // Also, replace the items with the ones from the server
            console.log("hello", action.payload);
            return {
                ...state,
                iceCreams: [...action.payload],
                loading: false,
            };
        }
        case FETCH_PRODUCTS_FAILURE: {
            // The request failed. It's done. So set loading to "false".
            // Save the error, so we can display it somewhere.
            // Since it failed, we don't have items to display anymore, so set `items` empty.
            //
            // This is all up to you and your app though:
            // maybe you want to keep the items around!
            // Do whatever seems right for your use case.
            return {
                ...state,
                loading: false,
                error: action.payload,
                items: [],
            };
        }
        case ADD_TO_CART: {
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
        }
        case REMOVE_ITEM: {
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
        }
        case SET_QUANTITY: {
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
        }

        default:
            // ALWAYS have a default case in a reducer
            return state;
    }
}
