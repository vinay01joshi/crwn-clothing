import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.action';
import { CartDropdownContainer, CartItemContainer, MessageContainer } from './cart-dropdown.styled'


const CartDrowpdown = ({ cartItems, history, dispatch }) => (
    <CartDropdownContainer>
        <CartItemContainer>
            {
                cartItems.length > 0 ?
                    cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem} />))
                    :
                    <MessageContainer className='empty-message'>Your cart is empty</MessageContainer>
            }
        </CartItemContainer>
        <CustomButton onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden());
        }}>GO TO CHECKOUT</CustomButton>
    </CartDropdownContainer>
)

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
});

export default withRouter(connect(mapStateToProps)(CartDrowpdown));