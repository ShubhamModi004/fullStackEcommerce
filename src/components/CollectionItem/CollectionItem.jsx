import React from 'react'
import { connect } from 'react-redux';

import CustomButton from '../CustomButton/CustomButton';
import { addItem } from '../../redux/cart/cart-actions';

import './CollectionItem.styles.scss';

const CollectionItem = ({ item, addItem }) => {
    const { id, name, price, imageUrl } = item;
    return (
        <div className='collection-item'>
            <div
                className='image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <div className='custom-button'>
                <CustomButton onClick={() => addItem(item)} inverted> Add to cart</CustomButton>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem)
