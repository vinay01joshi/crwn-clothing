import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import CollectionOverview from '../../components/collection-overview/collection-overview.component'
import CollectionPage from '../collection/collection.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import { updateCollection } from '../../redux/shop/shop.actions'

import { firestore, converCollectionSnapShotToMap } from '../../firebase/firebase.utils';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {

    state = {
        loading: true
    };

    unSubscribeFromSnapShot = null;

    componentDidMount() {
        const { updateCollection } = this.props;
        const collectionRef = firestore.collection('collection');

        collectionRef.onSnapshot(async snapshot => {
            const collectionMap = converCollectionSnapShotToMap(snapshot)
            updateCollection(collectionMap)
            this.setState({ loading: false })
        })
    }

    render() {
        const { match } = this.props;
        const { loading } = this.state;
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={loading}{...props} />} />
                <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} />} />
            </div>
        );
    }

}

const mapDispatchToProps = dispatch => ({
    updateCollection: collectionMap => dispatch(updateCollection(collectionMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);