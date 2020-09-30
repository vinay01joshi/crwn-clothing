import React, { Component } from 'react';

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
        return (
            <div>
                <h1>Shop Pag</h1>
            </div>
        )
    }
}

export default ShopPage;