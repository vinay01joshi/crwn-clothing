import SHOP_DATA from './shop.data';
import ShopActionType from './shop.types';
const INITIAL_SATE = {
    collection: SHOP_DATA
}

const shopReducer = (state = INITIAL_SATE, action) => {
    switch (action.type) {
        case ShopActionType.UPDATE_COLLECTION:
            return {
                ...state,
                collection: action.payload
            }
        default:
            return state;
    }
}

export default shopReducer;