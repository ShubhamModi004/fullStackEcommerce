import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';

import './CartDropdown.styles.scss';
import CustomButton from '../CustomButton/CustomButton';
import CartItem from '../CartItem/CartItem';
import { selectCartItems } from '../../redux/cart/cart-selectors';

const CartDropdown = ({ cartItems }) => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items' />
            {cartItems &&
                cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
            }
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropdown);
