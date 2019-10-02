import React from 'react'
import PropTypes from 'prop-types'

import './CartDropdown.styles.scss';
import CustomButton from '../CustomButton/CustomButton';

const CartDropdown = props => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items' />
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

CartDropdown.propTypes = {

}

export default CartDropdown
