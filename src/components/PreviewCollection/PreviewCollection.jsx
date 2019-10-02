import React from 'react'
import PropTypes from 'prop-types'
import './PreviewCollection.styles.scss';

import CollectionItem from '../CollectionItem/CollectionItem';

const PreviewCollection = ({ title, items }) => {
    return (
        <div className='collection-preview'>
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {items
                    .filter((item, idx) => idx < 4)
                    .map((item) => (
                        <CollectionItem key={item.id} item={item} />
                    ))
                }
            </div>
        </div>
    )
}

PreviewCollection.propTypes = {
    items: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
}

export default PreviewCollection
