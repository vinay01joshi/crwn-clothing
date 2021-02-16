import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux';
import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors'
import WithSpinner from '../with-spinner/with-spinner.component'
import CollectionOverview from './collection-overview.component'

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
});

// compose execute left to right multiple quired function to allow them execute to chain.
const CollectionOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionOverview);

export default CollectionOverviewContainer;
