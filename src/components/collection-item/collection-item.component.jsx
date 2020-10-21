import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.action';
import { CollectionItemContainer, CollectionFooterContainer, ImageContainer, AddButton, NameContainer, PriceContainer } from './collection-item.styles'
import CustomButton from '../custom-button/custom-button.component'

const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;
    return (
        <CollectionItemContainer>
            <ImageContainer imageUrl={imageUrl} />
            <CollectionFooterContainer>
                <NameContainer className='name'>{name}</NameContainer>
                <PriceContainer className='price'>{price}</PriceContainer>
            </CollectionFooterContainer>
            <AddButton onClick={() => addItem(item)} inverted>ADD TO CART</AddButton>
        </CollectionItemContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);