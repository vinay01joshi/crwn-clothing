import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import CollectionOverview from '../../components/collection-overview/collection-overview.component'
import CollectionPage from '../collection/collection.component';
import { updateCollection } from '../../redux/shop/shop.actions'

import { firestore, converCollectionSnapShotToMap } from '../../firebase/firebase.utils';

class ShopPage extends React.Component {

    unSubscribeFromSnapShot = null;

    componentDidMount() {
        const { updateCollection } = this.props;
        const collectionRef = firestore.collection('collection');

        collectionRef.onSnapshot(async snapshot => {
            const collectionMap = converCollectionSnapShotToMap(snapshot)
            updateCollection(collectionMap)
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

const mapDispatchToProps = dispatch => ({
    updateCollection: collectionMap => dispatch(updateCollection(collectionMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);