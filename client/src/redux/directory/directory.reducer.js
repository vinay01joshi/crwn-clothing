import SECTIONS_DATA from './directory.data';
const INITIAL_STATE = {
    sections: SECTIONS_DATA
}

const direcotryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default direcotryReducer;