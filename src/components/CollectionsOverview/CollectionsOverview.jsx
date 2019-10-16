import React from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import PreviewCollection from '../PreviewCollection/PreviewCollection';

import { selectCollectionsForPreview } from '../../redux/shop/ShopSelector';

const CollectionsOverview = ({ collections }) => {
    return (
        <div className='collect-overview'>
            {collections.map(({ id, ...otherCollectionProps }) => (
                <PreviewCollection key={id} {...otherCollectionProps} />
            ))
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})


export default connect(mapStateToProps)(CollectionsOverview)
