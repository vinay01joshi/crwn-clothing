import { createSelector } from 'reselect';

// There are two type of selector
// 1- Input selector
// 2- Output selector

// Exaple of input selector.
// select a piece of state
const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const selectCartItemCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0)
);