import SHOP_DATA from './shop.data';
const INITIAL_SATE = {
    collection: SHOP_DATA
}

const shopReducer = (state = INITIAL_SATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default shopReducer;