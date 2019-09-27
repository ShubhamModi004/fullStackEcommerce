import React from 'react'
import PropTypes from 'prop-types'

import './CollectionItem.styles.scss';

const CollectionItem = ({ id, name, imageUrl, price }) => {
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
        </div>
    )
}

CollectionItem.propTypes = {

}

export default CollectionItem
