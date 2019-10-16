import React from 'react'
import { connect } from 'react-redux';
import Menuitem from '../Menuitem/Menuitem';
import { createStructuredSelector } from 'reselect';

import { DirectorySelector } from '../../redux/directory/DirectorySelectors';

import './directory.styles.scss';

const Directory = ({ sections }) => {
    return (
        <div className="directory-menu">
            {sections.map(({ id, ...otherSectionProps }) => (
                <Menuitem key={id} {...otherSectionProps} />
            ))}
        </div>
    )
}


const mapStateToProps = createStructuredSelector({
    sections: DirectorySelector
})

export default connect(mapStateToProps)(Directory)

