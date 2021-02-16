import React from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { CollectionOverviewContainer } from './collection-overview.styles'

import { selectCollectionPreview } from '../../redux/shop/shop.selectors';
import CollectionPreview from '../collection-preview/collection-preview.component';

const CollectionOverview = ({ collection }) => (
    <CollectionOverviewContainer>
        {
            collection.map(({ id, ...otherProps }) => (
                <CollectionPreview key={id} {...otherProps} />
            ))
        }
    </CollectionOverviewContainer>
)

const mapStateToProps = createStructuredSelector({
    collection: selectCollectionPreview
})

export default connect(mapStateToProps)(CollectionOverview)

