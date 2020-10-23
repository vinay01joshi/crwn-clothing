
import ShopActionType from './shop.types';
const INITIAL_SATE = {
    collection: null
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