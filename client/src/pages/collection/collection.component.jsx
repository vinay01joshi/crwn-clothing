import React from 'react';
import { connect } from 'react-redux'
import { CollectionPageContainer, CollectionItemsContainer, TitleContainer } from './collection.styles'

import { selectCollection } from '../../redux/shop/shop.selectors'
import CollectionItem from '../../components/collection-item/collection-item.component'

const CollectionPage = ({ collection }) => {
    const { title, items } = collection;
    return (
        <CollectionPageContainer>
            <TitleContainer className='title'>{title}</TitleContainer>
            <CollectionItemsContainer className='items'>
                {
                    items.map(item => <CollectionItem key={item.id} item={item} />)
                }
            </CollectionItemsContainer>
        </CollectionPageContainer>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);