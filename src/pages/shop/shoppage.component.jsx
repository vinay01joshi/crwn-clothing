import React from 'react';
import { Route } from 'react-router-dom';
import CollectionOverview from '../../components/collection-overview/collection-overview.component'
import CollectionPage from '../collection/collection.component';

import { firestore, converCollectionSnapShotToMap } from '../../firebase/firebase.utils';

class ShopPage extends React.Component {

    unSubscribeFromSnapShot = null;

    componentDidMount() {
        const collectionRef = firestore.collection('collection');

        collectionRef.onSnapshot(async snapshot => {
            converCollectionSnapShotToMap(snapshot)
        })
    }

    render() {
        const { match } = this.props;
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} component={CollectionOverview} />
                <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
            </div>
        );
    }

}


export default ShopPage;