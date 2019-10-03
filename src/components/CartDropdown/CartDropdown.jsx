import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './CartDropdown.styles.scss';
import CustomButton from '../CustomButton/CustomButton';
import CartItem from '../CartItem/CartItem';
import { selectCartItems } from '../../redux/cart/cart-selectors';
import { toggleCartHidden } from '../../redux/cart/cart-actions';
import { createStructuredSelector } from 'reselect';

const CartDropdown = ({ cartItems, history, dispatch }) => {

    return (
        <div className='cart-dropdown'>
            <div className='cart-items' />
            {cartItems && cartItems.length ? (
                cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
            ) : (
                    <span className="empty-message">No Items</span>
                )
            }
            <CustomButton
                onClick={() => {
                    history.push('/checkout')
                    dispatch(toggleCartHidden());
                }}
            >
                GO TO CHECKOUT
            </CustomButton>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));
