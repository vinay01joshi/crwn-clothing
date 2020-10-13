import React from 'react';
import { connect } from 'react-redux'

import './cart-icon.styles.scss'
import { selectCartItemCount } from '../../redux/cart/cart.selectors';
import { ReactComponent as ShoppoingIcon } from '../../assets/shopping-bag.svg'
import { toggleCartHidden } from '../../redux/cart/cart.action'



const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppoingIcon className='shopping-icon' />
        <span className='item-count'>{itemCount}</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = (state) => ({
    itemCount: selectCartItemCount(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);