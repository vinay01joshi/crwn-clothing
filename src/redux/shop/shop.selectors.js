import { createSelector } from 'reselect'

const selectShop = state => state.shop;


export const selectShopCollection = createSelector(
    [selectShop],
    shop => shop.collection
)

export const selectCollectionPreview = createSelector(
    [selectShopCollection],
    collection => collection ? Object.keys(collection).map(key => collection[key])
        : []
)

export const selectCollection = collectionUrlParams => createSelector(
    [selectShopCollection],
    collection => (collection ? collection[collectionUrlParams] : null)
)

export const selectIsCollectionFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
)