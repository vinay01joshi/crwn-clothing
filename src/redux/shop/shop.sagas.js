import { takeLatest, call, put } from 'redux-saga/effects';
import ShopActionTypes from './shop.types'
import { firestore, converCollectionSnapShotToMap } from '../../firebase/firebase.utils';
import { fetchCollectionSuccess, fetchCollectionFailure } from './shop.actions'

export function* fetchCollectionAsync() {
    yield console.log('fetch collection async fired');

    try {

        const collectionRef = firestore.collection('collection');

        const snapshot = yield collectionRef.get();

        const collectionMap = yield call(converCollectionSnapShotToMap, snapshot);

        // put use for creating actions
        yield put(fetchCollectionSuccess(collectionMap));

    }
    catch (error) {
        yield put(fetchCollectionFailure(error.message))
    }
}

export function* fetchCollectionStart() {
    yield takeLatest(ShopActionTypes.FETCH_COLLECTION_START, fetchCollectionAsync);
}