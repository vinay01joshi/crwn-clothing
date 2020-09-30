import React, { Component } from 'react';

import CollectionPreview from '../../components/collection-preview/collection-preview.component'
import SHOP_DATA from './shop.data';
import './shoppage.styles.scss'

class ShopPage extends Component {
    constructor() {
        super();
        this.state = {
            collection: SHOP_DATA
        }
    }

    render() {
        const { collection } = this.state;
        return (
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
    }
}

export default ShopPage;