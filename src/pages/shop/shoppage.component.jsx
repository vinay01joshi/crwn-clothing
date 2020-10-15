import React from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import CollectionPreview from '../../components/collection-preview/collection-preview.component'
import { selectShopCollection } from '../../redux/shop/shop.selectors';
import './shoppage.styles.scss'

const ShopPage = ({ collection }) => (
    <div>
        <h1>Shop Pag</h1>
        <div className='shop-page'>
            {
                collection.map(({ id, ...otherProps }) => (
                    <CollectionPreview key={id} {...otherProps} />
                ))
            }
        </div>
    </div>
)

const mapStateToProps = createStructuredSelector({
    collection: selectShopCollection
})

export default connect(mapStateToProps)(ShopPage);