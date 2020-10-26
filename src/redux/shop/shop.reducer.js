
import ShopActionType from './shop.types';
const INITIAL_SATE = {
    collection: null,
    isFetching: false,
    errorMessage: undefined
}

const shopReducer = (state = INITIAL_SATE, action) => {
    switch (action.type) {
        case ShopActionType.FETCH_COLLECTION_START:
            return {
                ...state,
                isFetching: true
            }
        case ShopActionType.FETCH_COLLECTION_SUCCESS:
            return {
                ...state,
                isFetching: false,
                collection: action.payload
            }
        case ShopActionType.FETCH_COLLECTION_FAILIURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }
        default:
            return state;
    }
}

export default shopReducer;