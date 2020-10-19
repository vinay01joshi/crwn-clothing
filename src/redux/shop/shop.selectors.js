import { createSelector } from 'reselect'

const selectShop = state => state.shop;


export const selectShopCollection = createSelector(
    [selectShop],
    shop => shop.collection
)

export const selectCollection = collectionUrlParams => createSelector(
    [selectShopCollection],
    collection => collection[collectionUrlParams]
)