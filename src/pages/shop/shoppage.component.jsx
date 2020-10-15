import React from 'react';
import './shoppage.styles.scss'
import CollectionOverview from '../../components/collection-overview/collection-overview.component'

const ShopPage = () => (
    <div>
        <h1>Shop Pag</h1>
        <div className='shop-page'>
            <CollectionOverview />
        </div>
    </div>
)


export default ShopPage;