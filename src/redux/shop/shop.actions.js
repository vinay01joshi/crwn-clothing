import ShopActionTypes from './shop.types';
import { firestore, converCollectionSnapShotToMap } from '../../firebase/firebase.utils';


export const fetchCollectionStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTION_START
});

export const fetchCollectionSuccess = collectionMap => ({
    type: ShopActionTypes.FETCH_COLLECTION_SUCCESS,
    payload: collectionMap
})

export const fetchCollectionFailure = errorMessage => ({
    type: ShopActionTypes.fetchCollectionFailure.fetchCollectionFailure,
    payload: errorMessage
})

// dispatch is handelled by thnk
export const fetchCollectionStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collection');

        dispatch(fetchCollectionStart())

        collectionRef.get().then(snapshot => {
            const collectionMap = converCollectionSnapShotToMap(snapshot)
            dispatch(fetchCollectionSuccess(collectionMap))
        }).catch(error => dispatch(fetchCollectionFailure(error.message)));
    }
}

